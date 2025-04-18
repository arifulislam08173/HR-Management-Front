import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";
import { FiX } from "react-icons/fi";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AssetReturnForm from "./AssetReturnForm";

const AssetsInformation = ({
  open,
  onClose,
  assetData,
  currentIndex,
  onNavigate,
  hasPrevious,
  hasNext,
}) => {
  const [currentAssetIndex, setCurrentAssetIndex] = useState(currentIndex);

  const [showReturnForm, setShowReturnForm] = useState(false);

  const handleReturnClick = () => {
    setShowReturnForm(true);
    // onClose();
  };

  useEffect(() => {
    setCurrentAssetIndex(currentIndex);
  }, [currentIndex]);

  const styles = {
    dialog: {
      "& .MuiDialog-paper": {
        margin: "20px",
        borderRadius: "8px",
        maxWidth: "450px",
        width: "100%",
        position: "relative",
        overflow: "visible",
      },
    },
    closeButton: {
      background: "none",
      border: "none",
      padding: "0",
      position: "absolute",
      right: "16px",
      top: "16px",
      cursor: "pointer",
      zIndex: 1,
    },
    content: {
      padding: "20px 24px",
      position: "relative",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#333",
      marginBottom: "20px",
    },
    detailsSection: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "24px",
      marginBottom: "16px",
    },
    detailItem: {
      display: "flex",
      flexDirection: "column",
      gap: "4px",
    },
    label: {
      color: "#666",
      fontSize: "14px",
      fontWeight: "bold",
    },
    value: {
      fontSize: "15px",
      fontWeight: "500",
      color: "#333",
    },
    navigationButton: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: "32px",
      height: "32px",
      backgroundColor: "white",
      border: "none",
      borderRadius: "50%",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      zIndex: 1,
    },
    prevButton: {
      left: "-50px",
    },
    nextButton: {
      right: "-50px",
    },
    returnButton: {
      width: "100%",
      marginTop: "24px",
      backgroundColor: "#e74c3c",
      color: "white",
      fontWeight: "bold",
      "&:hover": {
        backgroundColor: "#c0392b",
      },
    },
  };

  return (
    <>
      <Dialog open={open} onClose={onClose} sx={styles.dialog}>
        <button onClick={onClose} style={styles.closeButton} aria-label="Close">
          <FiX size={20} />
        </button>

        {hasPrevious && (
          <button
            style={{ ...styles.navigationButton, ...styles.prevButton }}
            onClick={() => onNavigate("previous")}
          >
            <ChevronLeftIcon sx={{ fontSize: 20 }} />
          </button>
        )}

        {hasNext && (
          <button
            style={{ ...styles.navigationButton, ...styles.nextButton }}
            onClick={() => onNavigate("next")}
          >
            <ChevronRightIcon sx={{ fontSize: 20 }} />
          </button>
        )}

        <DialogContent sx={styles.content}>
          <Typography sx={styles.title}>Asset Information</Typography>

          <Box sx={styles.detailsSection}>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Asset Name</Typography>
              <Typography sx={styles.value}>
                {assetData?.name || "N/A"}
              </Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Description</Typography>
              <Typography sx={styles.value}>
                {assetData?.description || "None"}
              </Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Tracking Id</Typography>
              <Typography sx={styles.value}>
                {assetData?.trackingId || "N/A"}
              </Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Assigned Date</Typography>
              <Typography sx={styles.value}>
                {assetData?.assignedDate || "N/A"}
              </Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Status</Typography>
              <Typography sx={styles.value}>
                {assetData?.status || "N/A"}
              </Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Assigned By</Typography>
              <Typography sx={styles.value}>
                {assetData?.assignedBy || "N/A"}
              </Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Batch No</Typography>
              <Typography sx={styles.value}>
                {assetData?.batchNo || "N/A"}
              </Typography>
            </Box>
            <Box sx={styles.detailItem}>
              <Typography sx={styles.label}>Category</Typography>
              <Typography sx={styles.value}>
                {assetData?.category || "N/A"}
              </Typography>
            </Box>
          </Box>

          <Button sx={styles.returnButton} onClick={handleReturnClick}>
            ← Return
          </Button>
        </DialogContent>
      </Dialog>

      {/* Display the AssetReturnForm modal overlay */}
      {/* {showReturnForm && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
          }}
        >
          <AssetReturnForm
            open={showReturnForm}
            onClose={() => setShowReturnForm(false)}
          />
        </div>
      )} */}

      {showReturnForm && (
        <AssetReturnForm
          open={showReturnForm}
          onClose={() => setShowReturnForm(false)}
        />
      )}
    </>
  );
};

export default AssetsInformation;
