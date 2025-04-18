import React, { useState } from "react";
import { Container, Card, Typography } from "@mui/material";
import TopBarLeaveTypesComponent from "../../modalForms_evan/TopComponent/TopBarLeaveTypesComponent";
import LeaveTypesDetailsView from "../../modalForms_evan/LeaveField/LeaveTypes/LeaveTypesDetailsView";
import CreateLeaveType from "../../modalForms_evan/LeaveField/LeaveTypes/CreateLeaveType";

const styles = {
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "20px",
    marginBottom: "30px",
    justifyContent: "flex-start",
  },
  leaveCard: {
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    display: "flex",
    flex: "0 0 30%",
    cursor: "pointer",
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
    marginRight: "20px",
  },
  maternityLeaveCircle: {
    backgroundColor: "#D1C4E9",
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
};

const LeaveTypes = () => {
  const [selectedLeaveIndex, setSelectedLeaveIndex] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const leaveData = [
    {
      id: 1,
      type: "Maternity Leave",
      typeShort: "ML",
      availableDays: 10,
      carryForwardDays: 0,
      totalDays: 90,
      totalTaken: 0,
      payment: "Unpaid",
      periodIn: "Day",
      reset: "No",
      requireAttachment: "Yes",
      excludeCompanyLeaves: "Yes",
      excludeHolidays: "Yes",
      isEncashable: "No",
    },
    {
      id: 2,
      type: "Sick Leave",
      typeShort: "SL",
      availableDays: 10,
      carryForwardDays: 0,
      totalDays: 10,
      totalTaken: 1,
      payment: "Paid",
      periodIn: "Day",
      reset: "Yes",
      requireAttachment: "No",
      excludeCompanyLeaves: "No",
      excludeHolidays: "No",
      isEncashable: "Yes",
    },
    {
      id: 3,
      type: "Casual Leave",
      typeShort: "CL",
      availableDays: 10,
      carryForwardDays: 0,
      totalDays: 10,
      totalTaken: 1,
      payment: "Paid",
      periodIn: "Day",
      reset: "Yes",
      requireAttachment: "No",
      excludeCompanyLeaves: "No",
      excludeHolidays: "No",
      isEncashable: "Yes",
    },
  ];

  // Function to toggle modal visibility
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const toggleCreateModal = () => {
    setCreateModalOpen(!isCreateModalOpen);
  };


  const handleCardClick = (index) => {
    setSelectedLeaveIndex(index);
    setIsDetailsModalOpen(true);
  };

  const toggleDetailsModal = () => {
    setIsDetailsModalOpen(!isDetailsModalOpen);
  };

  const handleNavigateAsset = (direction) => {
    if (direction === "previous" && selectedLeaveIndex > 0) {
      setSelectedLeaveIndex(selectedLeaveIndex - 1);
    } else if (direction === "next" && selectedLeaveIndex < leaveData.length - 1) {
      setSelectedLeaveIndex(selectedLeaveIndex + 1);
    }
  };

  return (
    <Container fluid className="p-3" style={{ width: "1200px" }}>
      <TopBarLeaveTypesComponent headerName="Leave Types"
        onCreateClick={toggleCreateModal}
       />
       <CreateLeaveType
        isOpen={isCreateModalOpen}
        toggle={toggleCreateModal}
      />

<div className="d-flex justify-content-end mb-3">
        <div className="d-flex gap-3">
          <div className="d-flex align-items-center">
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "#f2b718",
                marginRight: 8,
              }}
            ></div>
            <span>Unpaid</span>
          </div>
          <div className="d-flex align-items-center">
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "green",
                marginRight: 8,
              }}
            ></div>
            <span>Paid</span>
          </div>
        </div>
      </div>


      <div style={styles.cardContainer}>
        {leaveData.map((item, index) => (
          <Card
            key={item.id}
            style={styles.leaveCard}
            onClick={() => handleCardClick(index)}
          >
            <div
              style={{
                ...styles.circle,
                ...(item.type === "Maternity Leave"
                  ? styles.maternityLeaveCircle
                  : item.type === "Sick Leave"
                  ? styles.sickLeaveCircle
                  : styles.casualLeaveCircle),
              }}
            >
              <Typography
                variant="h4"
                style={{ color: "#333", fontWeight: "500" }}
              >
                {item.typeShort}
              </Typography>
            </div>
            <div style={styles.leaveInfo}>
              <Typography variant="h4" style={styles.leaveTitle}>
                {item.type}
              </Typography>
              <Typography style={styles.leaveText}>
                <strong>Payment:</strong> {item.payment}
              </Typography>
              <Typography style={styles.leaveText}>
                <strong>Total Days: </strong>
                {item.totalDays}
              </Typography>
            </div>
          </Card>
        ))}
      </div>

      <LeaveTypesDetailsView
        isOpen={isDetailsModalOpen}
        toggle={toggleDetailsModal}
        data={leaveData[selectedLeaveIndex]}
        onNavigate={handleNavigateAsset}
        hasPrevious={selectedLeaveIndex > 0}
        hasNext={selectedLeaveIndex < leaveData.length - 1}
      />
    </Container>
  );
};

export default LeaveTypes;