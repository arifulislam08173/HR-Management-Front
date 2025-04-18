import React, { useState } from "react";
import { Container, Table, Button } from "reactstrap";
import AssetsRequest from "../modalForms_evan/Assets/AssetsRequest";
import AssetsInformation from "../modalForms_evan/Assets/AssetsInformation";
// import { Dialog, DialogContent, Typography, Box } from "@mui/material";
// import { FaRegQuestionCircle  } from "react-icons/fa";
import WarningComponent from "../modalForms_evan/Warning Component/WarningComponent";

const Assets = () => {
  const [modalType, setModalType] = useState(null);
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const toggleModal = (type = null) => {
    setModalType(type);
  };
  const assetsData = [
    {
      id: 1,
      name: "BMW",
      initials: "BM",
      status: "In use",
      assignedDate: "May. 24, 2024",
      trackingId: "CRT0004",
      batchNo: "CRB001",
      category: "Car",
      assignedBy: "Adam Luis",
      description: "None",
    },
    {
      id: 2,
      name: "Tesla",
      initials: "TS",
      status: "Available",
      assignedDate: "Jun. 10, 2024",
      trackingId: "CRT0005",
      batchNo: "CRB002",
      category: "Electric Car",
      assignedBy: "Elon Musk",
      description: "Electric vehicle",
    },
  ];

  const handleRowClick = (index) => {
    setSelectedAssetIndex(index);
    setModalType("information");
  };

  const handleNavigateAsset = (direction) => {
    if (direction === "previous" && selectedAssetIndex > 0) {
      setSelectedAssetIndex(selectedAssetIndex - 1);
    } else if (
      direction === "next" &&
      selectedAssetIndex < assetsData.length - 1
    ) {
      setSelectedAssetIndex(selectedAssetIndex + 1);
    }
  };

  const handleReturnRequest = (e, index) => {
    e.stopPropagation();
    setSelectedAssetIndex(index);
    setShowConfirmDialog(true);
  };

  const handleConfirmReturn = () => {
    setShowConfirmDialog(false); // normally set close form
  };

  const styles = {
    confirmDialog: {
      "& .MuiDialog-paper": {
        width: "400px",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      },
    },
    dialogContent: {
      padding: "40px 20px",
      textAlign: "center",
    },
    questionIcon: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      backgroundColor: "#f02c2c",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 20px",
      fontSize: "40px",
      color: "#A0A0A0",
    },
    confirmText: {
      fontSize: "20px",
      color: "#333",
      marginBottom: "30px",
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
    },
    cancelButton: {
      padding: "8px 24px",
      backgroundColor: "#DC3545",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
    confirmButton: {
      padding: "8px 24px",
      backgroundColor: "#008000",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "16px",
    },
  };



  return (
    <Container fluid className="p-4">
      <div className="d-flex justify-content-end mb-3">
        <Button
          color="danger"
          className="px-4"
          style={{ backgroundColor: "#DC3545" }}
          onClick={() => toggleModal("AssetsRequest")}
        >
          <span className="me-2">+</span>
          Create
        </Button>
      </div>

      <Table bordered hover responsive>
        <thead>
          <tr>
            <th>Asset</th>
            <th>Status</th>
            <th>Assigned Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {assetsData.map((asset, index) => (
            <tr
              key={asset.id}
              onClick={() => handleRowClick(index)}
              style={{ cursor: "pointer" }}
            >
              <td>
                <div className="d-flex align-items-center">
                  <div
                    style={{
                      width: "35px",
                      height: "35px",
                      backgroundColor: "#4CAF50",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      marginRight: "10px",
                      fontSize: "14px",
                    }}
                  >
                    {asset.initials}
                  </div>
                  {asset.name}
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#FFA500",
                      marginRight: "8px",
                    }}
                  />
                  {asset.status}
                </div>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#4CAF50",
                      marginRight: "8px",
                    }}
                  />
                  {asset.assignedDate}
                </div>
              </td>
              <td>
                <Button
                  color="danger"
                  style={{
                    backgroundColor: "#DC3545",
                    border: "none",
                  }}
                  onClick={(e) => handleReturnRequest(e, index)}
                >
                  ↵ Return Request
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


       {/* When Row Return Click this Dialog box open */}
       <WarningComponent
        open={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        onConfirm={handleConfirmReturn}
        message="Are you sure you want to return this asset?"
      />

       {/* <Dialog
        open={showConfirmDialog}
        onClose={() => setShowConfirmDialog(false)}
        sx={styles.confirmDialog}
      >
        <DialogContent sx={styles.dialogContent}>
          <Box> <FaRegQuestionCircle  size={80} /></Box>
          <Typography sx={styles.confirmText}>
            Are you sure you want to return this asset?
          </Typography>
          <Box sx={styles.buttonContainer}>
            <button
              onClick={() => setShowConfirmDialog(false)}
              style={styles.cancelButton}

              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#8B0000")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#DC3545")
              }
            >
              Cancel
            </button>
            <button
              onClick={handleConfirmReturn}
              style={styles.confirmButton}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#006400")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#008000")
              }
            >
              Confirm
            </button>
          </Box>
        </DialogContent>
      </Dialog> */}



      {modalType === "AssetsRequest" && (
        <AssetsRequest
          isOpen={modalType === "AssetsRequest"}
          toggle={() => toggleModal(null)}
        />
      )}

      {modalType === "information" && selectedAssetIndex !== null && (
        <AssetsInformation
          open={true}
          onClose={() => toggleModal(null)}
          assetData={assetsData[selectedAssetIndex]}
          currentIndex={selectedAssetIndex}
          onNavigate={handleNavigateAsset}
          hasPrevious={selectedAssetIndex > 0}
          hasNext={selectedAssetIndex < assetsData.length - 1}
        />
      )}
      
    </Container>
  );
};

export default Assets;
