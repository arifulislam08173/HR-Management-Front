import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

//redux imports
import { connect } from "react-redux";

// Theme imports
import { tokens } from "../../theme";
import { CircularProgress, Typography, useTheme, Button } from "@mui/material";

//axios
import axios from "axios";
import { BASE_URL } from "../../../base";

//DateTime
import moment from "moment";

// PDF
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

// PRINT
import { useReactToPrint } from "react-to-print";

// QR
import QRCode from "qrcode.react";

//Icons
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import Download from "@mui/icons-material/Download";
import Print from "@mui/icons-material/Print";

//Converter
import converter from "number-to-words";

//Watermark
import Watermark from "../../../components/services/Watermark";

const OrderVat = ({ query, token }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [orderDetails, setOrderDetails] = useState({});
  const [loader, setLoader] = useState(true);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const id = +query.id;

  const currentDateTime = new Date();

  const router = useRouter();

  const printRef = useRef();

  const getOrderDetails = () => {
    const apiUrl = BASE_URL + "api/v1/sales/" + id;
    axios
      .get(apiUrl, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        if (res.data.status) {
          setLoader(false);
          setOrderDetails(res.data.data);
          console.log(res.data.data);
          if (res.data.data.printed > 0) {
            setIsDuplicate(true);
          } else {
            setIsDuplicate(false);
          }
        } else {
          setFormErrors(res.data.message);
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getOrderDetails();
  }, [isDuplicate]);

  const calculate = () => {
    let total = 0;
    orderDetails?.sales_items?.map((product) => {
      total += product.total_price;
    });
    return total.toFixed(2);
  };
  const calculateVat = () => {
    let total = 0;
    orderDetails?.sales_items?.map((product) => {
      total += +product.vat_amount;
    });
    return total.toFixed(2);
  };
  const calculateTotal = () => {
    let total = 0;
    orderDetails?.sales_items?.map((product) => {
      total += product.total_price + product.vat_amount;
    });
    return total.toFixed(2);
  };
  const calculateQty = () => {
    let total = 0;
    orderDetails?.sales_items?.map((product) => {
      total += product.qty;
    });
    return total;
  };

  // PRINT
  const printMushak = async () => {
    const apiUrl = BASE_URL + "api/v1/sales-print?id=" + id;
    try {
      await axios.get(apiUrl, {
        headers: { Authorization: "Bearer " + token },
      });

      handlePrint();
      router.push(`/orders/OrderList/`);
    } catch (error) {
      console.log(error);
    }
  };
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  // DOWNLOAD
  const downloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    const name = orderDetails?.sales_no + "_vat_6.3.pdf";

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save(name);
  };

  // Return
  const goBack = () => {
    router.back();
  };

  console.log(orderDetails);

  return (
    <>
      {loader ? (
        <CircularProgress />
      ) : (
        <>
          <div className="row justify-content-between">
            <div className="col-md-2">
              <Button variant="outlined" size="large" onClick={goBack}>
                <ArrowLeftIcon />
                Sales List
              </Button>
            </div>
            <div className="col-md-10">
              {/* <Button
                variant="contained"
                size="large"
                className="float-end"
                onClick={downloadPdf}
              >
                <Download />
                Download
              </Button> */}
              <Button
                variant="outlined"
                size="large"
                className="float-end me-3"
                onClick={printMushak}
              >
                <Print className="me-2" />
                Print
              </Button>
            </div>
          </div>

          <div
            ref={printRef}
            className="p-3 small-text custom-line-height"
            style={{ marginLeft: "20px", marginRight: "20px" }}
          >
            {isDuplicate && <Watermark />}
            <div className="row justify-content-md-center mt-3">
              <div className="col-sm-3">
                <img
                  alt="govt-img"
                  width="50px"
                  height="50px"
                  src={`../../assets/images/govt.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </div>
              <div className="col-sm-6 text-center">
                <b>Government of the People's Republic of Bangladesh</b>
                <br />
                <b>National Board of Revenue</b>
                <div className="row">
                  <div className="col-md-12 mt-1">
                    <b>Tax Invoice</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    [See clauses (GA) and (CHA) of Sub-Rule (1) of Rule 40]
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <b
                  style={{
                    border: "2px solid black",
                    padding: "5px",
                    fontSize: "10px",
                  }}
                  className="float-end"
                >
                  Mushak 6.3
                  {isDuplicate && <b className="ms-2 mt-2">- DUPLICATE</b>}
                </b>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-11">
                <div className="row">
                  <div className="col-md-12">
                    Name of Registered Person:{" "}
                    <b>{orderDetails?.company?.name}</b>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    BIN of Registered Person:{" "}
                    {orderDetails?.company?.company_bin}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    Address: {orderDetails?.company?.contact_address}
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    Challan Issuing Address: {orderDetails?.branch?.address}
                  </div>
                </div>
              </div>
              <div className="col-sm-1">
                <div className="row mt-2">
                  <div className="col-md-12">
                    <Link href={`/public/six-three/${orderDetails?.sales_no}`}>
                      <QRCode
                        value={`http://vat.fairgroupbd.com/public/six-three/${orderDetails?.sales_no}`}
                        style={{ height: "50px", width: "50px" }}
                        className="float-end"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ margin: "1px" }} />
            <div className="row justify-content-between mt-1">
              <div className="col-8">
                <b>Name of Purchaser: </b>
                {orderDetails.customer_name}
              </div>
              <div className="col-4">
                <b>Challan No: </b>
                {orderDetails.sales_no}
              </div>
            </div>
            <div className="row justify-content-between mt-1">
              <div className="col-8">
                <b>BIN of Purchaser (Where applicable): </b>
                {orderDetails.customer ? orderDetails.customer.bin : ""}
              </div>
              <div className="col-4">
                <b>Reference No: </b>
                {orderDetails.reference_no}
              </div>
            </div>
            <div className="row justify-content-between mt-1">
              <div className="col-8">
                <b>Address of Purchaser: </b>
                {orderDetails.customer_address}
              </div>
              <div className="col-4">
                <b>Date of Issue: </b>
                {moment(orderDetails.challan_date).format("DD MMMM, YYYY")}
              </div>
            </div>
            <div className="row justify-content-between mt-1">
              <div className="col-8">
                <b>Destination of Supply: </b>
                {orderDetails.shipping_address}
              </div>
              <div className="col-4">
                <b>Time of Issue: </b>
                {moment(orderDetails.created_at).format("hh:mm A")}
              </div>
            </div>
            <div className="row justify-content-between mt-1">
              <div className="col-8">
                <b>Vehicle Type and Number: </b>
                {orderDetails.vehicle_no}
              </div>
            </div>

            {/* TABLE */}
            <div className="mt-1">
              <table
                className="table table-hover table-bordered table-crammed"
                style={{ border: "1px solid black" }}
              >
                <thead>
                  <tr>
                    <th className="text-center align-middle">
                      S/L
                      <br />
                      NO
                    </th>
                    <th className="text-center align-middle">
                      Good/Service Description (Incases with Brand Name)
                    </th>
                    <th className="text-center align-middle">
                      Unit
                      <br />
                      of
                      <br />
                      Supply
                    </th>
                    <th className="text-center align-middle">Qty</th>
                    <th className="text-center align-middle">
                      Unit Value <sup>1</sup>
                      <br />
                      (TAKA)
                    </th>
                    <th className="text-center align-middle">
                      Total Value <sup>1</sup>
                      <br />
                      (TAKA)
                    </th>
                    <th
                      className="text-center align-middle"
                      style={{ width: "5px", overflowWrap: "break-word" }}
                    >
                      SD Rate
                    </th>
                    <th
                      className="text-center align-middle"
                      style={{ width: "5px", overflowWrap: "break-word" }}
                    >
                      SD Amo
                      <br />
                      unt
                    </th>
                    <th
                      className="text-center align-middle"
                      style={{ width: "10px" }}
                    >
                      VAT Rate/ Specific Tax
                    </th>
                    <th className="text-center align-middle">
                      VAT /Specific Tax
                      <br />
                      Amount (TAKA)
                    </th>
                    <th className="text-center align-middle">
                      Value Including
                      <br />
                      all types of
                      <br />
                      Duty & Tax (TAKA)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="text-center align-middle">1</th>
                    <th className="text-center align-middle">2</th>
                    <th className="text-center align-middle">3</th>
                    <th className="text-center align-middle">4</th>
                    <th className="text-center align-middle">5</th>

                    <th className="text-center align-middle">6</th>
                    <th className="text-center align-middle">7</th>
                    <th className="text-center align-middle">8</th>
                    <th className="text-center align-middle">9</th>
                    <th className="text-center align-middle">10</th>
                    <th className="text-center align-middle">11</th>
                  </tr>
                  {orderDetails?.sales_items?.map((item, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>
                        {item.item_info.title} - {item.item_info.sku}
                      </td>
                      <td>{item.item_info.unit_type}</td>
                      <td className="text-center">{item.qty}</td>
                      <td className="text-end">
                        {Intl.NumberFormat().format(item.price.toFixed(2))}
                      </td>
                      <td className="text-end">
                        {Intl.NumberFormat().format(
                          item.total_price.toFixed(2)
                        )}
                      </td>
                      <td className="text-end"></td>
                      <td className="text-end"></td>
                      <td className="text-center">{item.vat_rate} %</td>
                      <td className="text-end">
                        {Intl.NumberFormat().format(item.vat_amount.toFixed(2))}
                      </td>
                      <td className="text-end">
                        {Intl.NumberFormat().format(
                          (item.total_price + item.vat_amount).toFixed(2)
                        )}
                      </td>
                    </tr>
                  ))}

                  <tr>
                    <td colSpan={5} className="text-end">
                      <b>Total</b>
                    </td>
                    <td className="text-end">
                      {Intl.NumberFormat().format(calculate())}
                    </td>
                    <td colSpan={3}></td>
                    <td className="text-end">
                      {Intl.NumberFormat().format(calculateVat())}
                    </td>
                    <td className="text-end">
                      {Intl.NumberFormat().format(Math.round(calculateTotal()))}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <div className="row">
                <div className="col-md-12 capital">
                  <b>Quantity in Words:</b> {converter.toWords(calculateQty())}{" "}
                  Piece(s) Only
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 capital">
                  <b>Amount in Words:</b> {converter.toWords(calculateTotal())}{" "}
                  Taka Only
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-12">
                  <b>Name of Authorized Person of Organaization:</b>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <b>Designation:</b>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-8">
                  <b>Signature:</b>
                </div>
                <div className="col-md-4">
                  <b>Seal:</b>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-12">
                  <b>1.</b> Value excluding all types of taxes.
                </div>
              </div>
            </div>
            <div className="print-footer print-only">
              <p>
                Printed on:{" "}
                {moment(currentDateTime).format("DD MMM, YYYY - hh:mm a")}
              </p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

OrderVat.getInitialProps = async ({ query }) => {
  return {
    query,
  };
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

export default connect(mapStateToProps)(OrderVat);
