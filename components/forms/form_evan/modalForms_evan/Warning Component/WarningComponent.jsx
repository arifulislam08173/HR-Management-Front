import React from "react";
import { Dialog, DialogContent, Typography, Box } from "@mui/material";
import { FaRegQuestionCircle } from "react-icons/fa";

const WarningComponent = ({ 
  open, 
  onClose, 
  onConfirm, 
  message = "Are you sure you want to proceed?", 
  confirmText = "Confirm", 
  cancelText = "Cancel" 
}) => {
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
    <Dialog open={open} onClose={onClose} sx={styles.confirmDialog}>
      <DialogContent sx={styles.dialogContent}>
        <Box>
          <FaRegQuestionCircle size={80} />
        </Box>
        <Typography sx={styles.confirmText}>{message}</Typography>
        <Box sx={styles.buttonContainer}>
          <button
            onClick={onClose}
            style={styles.cancelButton}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#8B0000")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#DC3545")
            }
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            style={styles.confirmButton}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#006400")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#008000")
            }
          >
            {confirmText}
          </button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default WarningComponent;
