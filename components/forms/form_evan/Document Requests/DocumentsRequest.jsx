import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Card,
  CardBody,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "reactstrap";
import { FiPlus, FiMinus } from "react-icons/fi";
import { IoFilterSharp } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { FaPlus } from "react-icons/fa6";

import { MdDone, MdDelete } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import Uploadfile from "../modalForms_evan/DocumentsRequest/Uploadfile";
import DocumentRequestForm from "../modalForms_evan/DocumentsRequest/DocumentRequestForm";

const DocumentRequests = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [expandedDocs, setExpandedDocs] = useState({});
  const [tooltipOpen, setTooltipOpen] = useState({});
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isDocumentRequestModalOpen, setIsDocumentRequestModalOpen] =
    useState(false);
  const [isEditDocumentRequestModal, setEditIsDocumentRequestModal] =
    useState(false);

  const toggleUploadModal = () => setIsUploadModalOpen(!isUploadModalOpen);

  const toggleDocumentRequestModal = () =>
    setIsDocumentRequestModalOpen(!isDocumentRequestModalOpen);

  const toggleEditDocumentRequestModal = () =>
    setEditIsDocumentRequestModal(!isEditDocumentRequestModal);

  const documents = [
    {
      type: "Passport",
      completed: 0,
      total: 9,
      requests: [
        { name: "Abigail Roberts", status: "pending" },
        { name: "Alexander Smith", status: "pending" },
        { name: "Amelia Cooper", status: "pending" },
        { name: "Benjamin Parker", status: "pending" },
        { name: "Ella Jackson", status: "pending" },
        { name: "Ellie Rogers", status: "pending" },
        { name: "George Wilson", status: "pending" },
        { name: "Henry Davis", status: "pending" },
        { name: "Isabella Moore", status: "pending" },
      ],
    },
    {
      type: "NID card",
      completed: 3,
      total: 6,
      requests: [
        { name: "Abigail Roberts", status: "completed" },
        { name: "Alexander Smith", status: "pending" },
        { name: "Amelia Cooper", status: "completed" },
        { name: "Benjamin Parker", status: "pending" },
        { name: "Ella Jackson", status: "completed" },
        { name: "Ellie Rogers", status: "pending" },
      ],
    },
  ];

  const [page, setPage] = useState(1);

  const documentsPerPage = 5;
  const totalPages = Math.ceil(documents.length / documentsPerPage);
  const indexOfLastDocuments = page * documentsPerPage;
  const indexOfFirstDocuments = indexOfLastDocuments - documentsPerPage;
  const currentDocuments = documents.slice(
    indexOfFirstDocuments,
    indexOfLastDocuments
  );

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const toggleDocExpansion = (docType) => {
    setExpandedDocs((prev) => ({
      ...prev,
      [docType]: !prev[docType],
    }));
  };

  //   const getInitials = (name) => {
  //     return name
  //       .split(' ')
  //       .map(word => word[0])
  //       .join('')
  //       .toUpperCase();
  //   };

  const toggleTooltip = (id) =>
    setTooltipOpen((prev) => ({ ...prev, [id]: !prev[id] }));
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <Container fluid>
      <Row className="mb-4 align-items-center">
        <Col>
          <h3>Document Requests</h3>
        </Col>
        <Col md="8" className="d-flex justify-content-end align-items-center">
          <Input
            type="text"
            placeholder="Search"
            style={{
              marginRight: "10px",
              borderRadius: "8px",
              borderColor: "#ccc",
              padding: "8px 10px",
              width: "250px",
            }}
          />
          <Button
            outline
            color="secondary"
            style={{ marginRight: "5px", width: "120px" }}
          >
            <IoFilterSharp /> Filter
          </Button>
          <Button
            outline
            color="secondary"
            style={{ marginRight: "5px", width: "120px" }}
          >
            Actions
          </Button>
          <Button
            color="danger"
            style={{ width: "120px" }}
            onClick={toggleDocumentRequestModal}
          >
            <FiPlus /> Create
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          {currentDocuments.map((doc, index) => (
            <div key={index}>
              <Card
                className="mb-2"
                style={{ borderRadius: "8px", border: "1px solid #eee" }}
              >
                <CardBody className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <Button
                      color="link"
                      className="p-0 me-2"
                      style={{ color: "#000", textDecoration: "none" }}
                      onClick={() => toggleDocExpansion(doc.type)}
                    >
                      {expandedDocs[doc.type] ? <FiMinus /> : <FiPlus />}
                    </Button>
                    <input type="checkbox" className="me-3" />
                    <span style={{ fontSize: "16px" }}>{doc.type}</span>
                    <span
                      style={{
                        marginLeft: "15px",
                        padding: "2px 8px",
                        borderRadius: "12px",
                        backgroundColor: "#f8f9fa",
                        fontSize: "14px",
                        color: "#666",
                      }}
                    >
                      {doc.completed} / {doc.total}
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <Dropdown
                      isOpen={dropdownOpen === index}
                      toggle={() => toggleDropdown(index)}
                    >
                      <DropdownToggle tag="span" style={{ cursor: "pointer" }}>
                        <Button color="light" style={{ border: "none" }}>
                          Actions <BsChevronDown />
                        </Button>
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={toggleEditDocumentRequestModal}>
                          Edit
                        </DropdownItem>
                        <DropdownItem>Delete</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </CardBody>
              </Card>

              {/* Expanded Details */}
              {expandedDocs[doc.type] && (
                <div
                  style={{
                    maxHeight: "400px",
                    overflowY: "auto",
                    marginBottom: "20px",
                    marginLeft: "40px",
                    backgroundColor: "#fff",
                    border: "1px solid #eee",
                    borderRadius: "8px",
                  }}
                >
                  {doc.requests.map((request, reqIndex) => (
                    <div
                      key={reqIndex}
                      style={{
                        padding: "15px",
                        borderBottom: "1px solid #eee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <input type="checkbox" />
                        <Button
                          color="danger"
                          className="rounded-circle"
                          style={{
                            width: "40px",
                            height: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          onClick={toggleUploadModal}
                          id={`tooltip-add-${reqIndex}`}
                        >
                          <FaPlus size={20} color="white" />
                        </Button>
                        <Tooltip
                          key={`tooltip-add-${reqIndex}`}
                          isOpen={tooltipOpen[`tooltip-add-${reqIndex}`]}
                          target={`tooltip-add-${reqIndex}`}
                          toggle={() =>
                            toggleTooltip(`tooltip-add-${reqIndex}`)
                          }
                          placement="bottom"
                        >
                          Upload
                        </Tooltip>

                        <div>
                          <div style={{ fontSize: "14px" }}>
                            Upload {doc.type} -- {request.name}
                          </div>
                          <div style={{ fontSize: "12px", color: "#666" }}>
                            please upload {doc.type.toLowerCase()}...
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: "10px" }}>
                        <Button
                          color="success"
                          size="sm"
                          id={`tooltip-done-${reqIndex}`}
                        >
                          <MdDone size={16} />
                        </Button>
                        <Tooltip
                          isOpen={tooltipOpen[`tooltip-done-${reqIndex}`]}
                          target={`tooltip-done-${reqIndex}`}
                          toggle={() =>
                            toggleTooltip(`tooltip-done-${reqIndex}`)
                          }
                        >
                          Approve
                        </Tooltip>

                        <Button
                          color="danger"
                          size="sm"
                          id={`tooltip-delete-outline-${reqIndex}`}
                        >
                          <TiDeleteOutline size={16} />
                        </Button>
                        <Tooltip
                          isOpen={
                            tooltipOpen[`tooltip-delete-outline-${reqIndex}`]
                          }
                          target={`tooltip-delete-outline-${reqIndex}`}
                          toggle={() =>
                            toggleTooltip(`tooltip-delete-outline-${reqIndex}`)
                          }
                        >
                          Reject
                        </Tooltip>

                        <Button
                          color="secondary"
                          size="sm"
                          id={`tooltip-delete-${reqIndex}`}
                        >
                          <MdDelete size={16} />
                        </Button>
                        <Tooltip
                          isOpen={tooltipOpen[`tooltip-delete-${reqIndex}`]}
                          target={`tooltip-delete-${reqIndex}`}
                          toggle={() =>
                            toggleTooltip(`tooltip-delete-${reqIndex}`)
                          }
                        >
                          Delete
                        </Tooltip>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </Col>
      </Row>

      {/* Pagination */}
      <Row className="mt-3">
        <Col className="d-flex justify-content-between align-items-center">
          <div>
            Page {page} of {totalPages}
          </div>
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Col>
      </Row>

      {/*upload file component click on upload */}
      <Uploadfile isOpen={isUploadModalOpen} toggle={toggleUploadModal} />

      {/* Documet Request componet click on create */}
      <DocumentRequestForm
        isOpen={isDocumentRequestModalOpen}
        toggle={toggleDocumentRequestModal}
      />

      <DocumentRequestForm
        isOpen={isEditDocumentRequestModal}
        toggle={toggleEditDocumentRequestModal}
      />
    </Container>
  );
};

export default DocumentRequests;
