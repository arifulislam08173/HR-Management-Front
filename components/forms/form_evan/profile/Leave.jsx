import React, { useState } from "react";
import {
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Paper,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import LeaveRequest from "../modalForms_evan/Leave/LeaveRequest";
import LeaveDetailsView from "../modalForms_evan/Leave/LeaveDetailsView";

const Leave = () => {
  const styles = {
    container: {
      padding: "20px",
    },
    cardContainer: {
      display: "flex",
      gap: "20px",
      marginBottom: "30px",
    },
    leaveCard: {
      padding: "20px",
      display: "flex",
      alignItems: "center",
      gap: "20px",
      flex: 1,
      borderRadius: "10px",
    },
    circle: {
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "24px",
      fontWeight: "bold",
    },
    sickLeaveCircle: {
      backgroundColor: "#E8F94A",
    },
    casualLeaveCircle: {
      backgroundColor: "#E0E0E0",
    },
    leaveInfo: {
      flex: 1,
    },
    leaveTitle: {
      fontWeight: "bold",
      marginBottom: "8px",
    },
    leaveText: {
      color: "#666",
      margin: "4px 0",
    },
    table: {
      backgroundColor: "white",
      borderRadius: "8px",
    },
    tableHeader: {
      backgroundColor: "#f5f5f5",
    },
    tableCell: {
      padding: "16px",
      textAlign: "center",
      fontSize: "14px",
    },
    typeCell: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    typeCircle: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#E0E0E0",
      fontSize: "14px",
    },
    actionButtons: {
      display: "flex",
      justifyContent: "center",
      gap: "8px",
    },
    approveButton: {
      color: "#4CAF50",
      "&:hover": {
        color: "#45a049",
      },
    },
    rejectButton: {
      color: "#f44336",
      "&:hover": {
        color: "#e53935",
      },
    },
  };

  const leaveData = [
    {
      type: "Casual Leave",
      typeShort: "CL",
      startDate: "May. 25, 2024",
      endDate: "May. 25, 2024",
      requestedDays: "0.0",
      status: "Requested",
    },
    {
      type: "Sick Leave",
      typeShort: "SL",
      startDate: "May. 27, 2024",
      endDate: "May. 27, 2024",
      requestedDays: "0.0",
      status: "Requested",
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = useState("");
  //   const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleModal = (leaveType = "") => {
    setSelectedLeaveType(leaveType);
    setIsModalOpen(!isModalOpen);
  };

  const [isDetailsViewOpen, setIsDetailsViewOpen] = useState(false);
  const [selectedLeaveIndex, setSelectedLeaveIndex] = useState(0);

  const handleRowClick = (index) => {
    setSelectedLeaveIndex(index);
    setIsDetailsViewOpen(true);
  };

  return (
    <div style={styles.container}>
      <div style={styles.cardContainer}>
        {/* Sick Leave Card */}
        <Card
          style={styles.leaveCard}
          onClick={() => toggleModal("Sick Leave")}
          sx={{ cursor: "pointer" }}
        >
          <div style={{ ...styles.circle, ...styles.sickLeaveCircle }}>SL</div>
          <div style={styles.leaveInfo}>
            <Typography variant="h6" style={styles.leaveTitle}>
              Sick Leave
            </Typography>
            <Typography style={styles.leaveText}>
              Available Leave Days : 10.0
            </Typography>
            <Typography style={styles.leaveText}>
              Carryforward Leave Days : 0.0
            </Typography>
            <Typography style={styles.leaveText}>
              Total Leave Days : 10.0
            </Typography>
            <Typography style={styles.leaveText}>
              Total Leave taken :0
            </Typography>
          </div>
        </Card>

        {/* Casual Leave Card */}
        <Card
          style={styles.leaveCard}
          onClick={() => toggleModal("Casual Leave")}
          sx={{ cursor: "pointer" }}
        >
          <div style={{ ...styles.circle, ...styles.casualLeaveCircle }}>
            CL
          </div>
          <div style={styles.leaveInfo}>
            <Typography variant="h6" style={styles.leaveTitle}>
              Casual Leave
            </Typography>
            <Typography style={styles.leaveText}>
              Available Leave Days : 1.0
            </Typography>
            <Typography style={styles.leaveText}>
              Carryforward Leave Days : 0.0
            </Typography>
            <Typography style={styles.leaveText}>
              Total Leave Days : 1.0
            </Typography>
            <Typography style={styles.leaveText}>
              Total Leave taken :0
            </Typography>
          </div>
        </Card>
      </div>

      {/* Leave Table */}
      <TableContainer component={Paper} style={styles.table}>
        <Table>
          <TableHead>
            <TableRow style={styles.tableHeader}>
              <TableCell style={styles.tableCell}>Leave Type</TableCell>
              <TableCell style={styles.tableCell}>Start Date</TableCell>
              <TableCell style={styles.tableCell}>End Date</TableCell>
              <TableCell style={styles.tableCell}>Requested days</TableCell>
              <TableCell style={styles.tableCell}>Status</TableCell>
              <TableCell style={styles.tableCell} align="right">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaveData.map((row, index) => (
              <TableRow
                key={index}
                hover
                onClick={() => handleRowClick(index)}
                sx={{ cursor: "pointer" }}
              >
                <TableCell style={styles.tableCell}>
                  <div style={styles.typeCell}>
                    <div style={styles.typeCircle}>{row.typeShort}</div>
                    {row.type}
                  </div>
                </TableCell>
                <TableCell style={styles.tableCell}>{row.startDate}</TableCell>
                <TableCell style={styles.tableCell}>{row.endDate}</TableCell>
                <TableCell style={styles.tableCell}>
                  {row.requestedDays}
                </TableCell>
                <TableCell style={styles.tableCell}>{row.status}</TableCell>
                <TableCell style={styles.tableCell} align="right">
                  <div style={styles.actionButtons}>
                    <Tooltip title="Approve">
                      <IconButton style={styles.approveButton}>
                        <CheckCircleIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Reject">
                      <IconButton style={styles.rejectButton}>
                        <CancelIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <LeaveRequest isOpen={isModalOpen} toggle={toggleModal} /> */}
      <LeaveRequest
        isOpen={isModalOpen}
        toggle={toggleModal}
        leaveType={selectedLeaveType}
      />

      <LeaveDetailsView
        open={isDetailsViewOpen}
        onClose={() => setIsDetailsViewOpen(false)}
        selectedLeave={leaveData[selectedLeaveIndex]}
        leaveData={leaveData}
        currentIndex={selectedLeaveIndex}
      />
    </div>
  );
};

export default Leave;
