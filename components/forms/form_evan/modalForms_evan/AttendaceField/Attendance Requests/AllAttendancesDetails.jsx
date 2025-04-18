import React, { useState } from "react";
import { Dialog, DialogContent, Typography, Box, Button } from "@mui/material";
import { FiX } from "react-icons/fi";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import Avatar from "@mui/material/Avatar";
import EditAllAttendances from "./EditAllAttendances";

const AllAttendancesDetails = ({
    isOpen,
    toggle,
    data,
    onNavigate,
    hasPrevious,
    hasNext,
  }) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    if (!data) return null;
  
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
      header: {
        display: "flex",
        alignItems: "center",
        marginBottom: "24px",
      },
      // avatar: {
      //   width: "50px",
      //   height: "50px",
      //   borderRadius: "50%",
      //   backgroundColor: "#4CAF50",
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      //   color: "white",
      //   fontSize: "20px",
      //   marginRight: "16px",
      // },
      employeeInfo: {
        flex: 1,
      },
      employeeName: {
        fontSize: "18px",
        fontWeight: "600",
        color: "#333",
      },
      department: {
        fontSize: "14px",
        color: "#666",
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
      navigationButton: {
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        border: "1px solid #e0e0e0",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 1000,
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#f5f5f5",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        },
      },
      prevButton: {
        left: -50,
      },
      nextButton: {
        right: -50,
      },
      buttonGroup: {
        display: "flex",
        gap: "5px",
        marginTop: "24px",
      },
      iconButton: {
        flex: "1",
        height: "40px",
        borderRadius: "4px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontSize: "20px",
        border: "none",
        color: "#fff",
      },
    };
  
    // Generate color based on string
    const stringToColor = (string) => {
      let hash = 0;
      for (let i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
      }
      let color = "#";
      for (let i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
      }
      return color;
    };
  
    const getInitials = (name) => {
      return name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase();
    };
  
    //   Edit Click
    const handleEditClick = () => {
      setIsEditModalOpen(true);
    };
  
    const handleCloseEditModal = () => {
      setIsEditModalOpen(false);
    };
  
    // Delete click
    const [isWarningOpen, setIsWarningOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);
  
    const handleDeleteClick = (id) => {
      setDeleteId(id);
      setIsWarningOpen(true);
    };
  
    const handleCloseWarning = () => {
      setIsWarningOpen(false);
    };
  
    const handleConfirmDelete = () => {
      console.log("Deleted item with ID:", deleteId);
      setIsWarningOpen(false);
    };
  
    return (
      <>
        <Dialog open={isOpen} onClose={toggle} sx={styles.dialog}>
          <button onClick={toggle} style={styles.closeButton} aria-label="Close">
            <FiX size={20} />
          </button>
          {hasPrevious && (
            <button
              style={{ ...styles.navigationButton, ...styles.prevButton }}
              onClick={() => onNavigate("previous")}
              aria-label="Previous"
            >
              <ChevronLeftIcon sx={{ fontSize: 20 }} />
            </button>
          )}
  
          {hasNext && (
            <button
              style={{ ...styles.navigationButton, ...styles.nextButton }}
              onClick={() => onNavigate("next")}
              aria-label="Next"
            >
              <ChevronRightIcon sx={{ fontSize: 20 }} />
            </button>
          )}
  
          <DialogContent sx={styles.content}>
            <Typography sx={styles.title}>All Attendance Details</Typography>
  
            <Box sx={styles.header}>
              <Avatar
                sx={{
                  bgcolor: stringToColor(data.employee.name),
                  width: 50,
                  height: 50,
                  marginRight: "10px",
                }}
              >
                {getInitials(data.employee.name)}
              </Avatar>
              {/* <div style={styles.avatar}>
                {data?.employee?.name?.substring(0, 2)?.toUpperCase()}
              </div> */}
              <div style={styles.employeeInfo}>
                <Typography style={styles.employeeName}>
                  {data?.employee?.name}
                </Typography>
                <Typography style={styles.department}>S/W Dept / None</Typography>
              </div>
            </Box>
  
            <Box sx={styles.detailsSection}>
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Date</Typography>
                <Typography sx={styles.value}>{data?.date}</Typography>
              </Box>
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Day</Typography>
                <Typography sx={styles.value}>{data?.day}</Typography>
              </Box>
  
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Check In</Typography>
                <Typography sx={styles.value}>{data?.checkIn}</Typography>
              </Box>
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Check In Date</Typography>
                <Typography sx={styles.value}>{data?.InDate}</Typography>
              </Box>
  
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Check Out</Typography>
                <Typography sx={styles.value}>{data?.checkOut}</Typography>
              </Box>
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Check Out Date</Typography>
                <Typography sx={styles.value}>{data?.OutDate}</Typography>
              </Box>
  
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Shift</Typography>
                <Typography sx={styles.value}>{data?.Shift}</Typography>
              </Box>
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Work Type</Typography>
                <Typography sx={styles.value}>{data?.workType}</Typography>
              </Box>
  
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Min Hour</Typography>
                <Typography sx={styles.value}>{data?.minHour}</Typography>
              </Box>
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>At Work</Typography>
                <Typography sx={styles.value}>{data?.atWork}</Typography>
              </Box>
  
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Overtime</Typography>
                <Typography sx={styles.value}>{data?.overTime}</Typography>
              </Box>
              <Box sx={styles.detailItem}>
                <Typography sx={styles.label}>Activities</Typography>
                <Typography sx={styles.value}>2 Activity</Typography>
              </Box>
            </Box>
  
            <div style={styles.buttonGroup}>
              <button
                style={{
                  ...styles.iconButton,
                  backgroundColor: "#3498db",
                }}
                onClick={handleEditClick}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#2980b9")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#3498db")
                }
              >
                <EditIcon />
              </button>
            </div>
          </DialogContent>
        </Dialog>

        {isEditModalOpen && (
          <EditAllAttendances
            isOpen={isEditModalOpen}
            toggle={handleCloseEditModal}
            data={data}
          />
        )}

      </>
  )
}

export default AllAttendancesDetails
