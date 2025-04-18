import React, { useState } from "react";
import { Container, Card, Typography, Avatar } from "@mui/material";
import TopBarAllowanceComponent from "../../modalForms_evan/TopComponent/TopBarAllowanceComponent";
import AllowancesDetailsView from "../../modalForms_evan/AllowancesField/AllowancesDetailsView";
import CreateAllowance from "../../modalForms_evan/AllowancesField/CreateAllowance";

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
    flexDirection: "row",
    alignItems: "center",
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

const Allowances = () => {
  const [selectedLeaveIndex, setSelectedLeaveIndex] = useState(null);
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  const leaveData = [
    {
      id: 1,
      type: "Travel Allowance",
      typeShort: "TA",
      amount: 200.0,
      taxable: "Yes",
      oneTimeAllowance: "No",
      conditionBased:"No",
      hasMaxlimt:"No",
      allowanceEligibility:"If Basic Pay Greater Than (>) 0.0",
      employee: { name: "Sofia Howard", code: "(#PEP75)" },
    },
    {
      id: 2,
      type: "House Rent Allowance",
      typeShort: "HA",
      amount: 1000.0,
      taxable: "Yes",
      oneTimeAllowance: "No",
      conditionBased:"No",
      hasMaxlimt:"No",
      allowanceEligibility:"If Basic Pay Greater Than (>) 0.0",
      employee: { name: "Levi Sanders", code: "(#PEP48)" },
    },
  ];

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

  // Generate initials from the name
    const getInitials = (name) => {
        const words = name.split(" ");
        if (words.length === 0) return "";
    
        // Get the first and last word's initials
        const firstInitial = words[0][0].toUpperCase();
        const lastInitial = words[words.length - 1][0].toUpperCase();
        
        return firstInitial + lastInitial;
    };

  
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
      <TopBarAllowanceComponent headerName="Allowances" 
        onCreateClick={toggleCreateModal}
        />
        <CreateAllowance
        isOpen={isCreateModalOpen}
        toggle={toggleCreateModal}
      />

      <div style={styles.cardContainer}>
        {leaveData.map((item, index) => (
          <Card
            key={item.id}
            style={styles.leaveCard}
            onClick={() => handleCardClick(index)}
          >
            <Avatar
              sx={{
                bgcolor: stringToColor(item.type),
                width: 60,
                height: 60,
                marginRight: "10px",
              }}
            >
              {getInitials(item.type)}
            </Avatar>
            <div style={styles.leaveInfo}>
              <Typography variant="h5" style={styles.leaveTitle}>
                {item.type}
              </Typography>
              <Typography style={styles.leaveText}>
                <strong>Amount:</strong> {item.amount}
              </Typography>
              <Typography style={styles.leaveText}>
                <strong>One Time Allowance:</strong> {item.oneTimeAllowance}
              </Typography>
              <Typography style={styles.leaveText}>
                <strong>Taxable:</strong> {item.taxable}
              </Typography>
            </div>
          </Card>
        ))}
      </div>

      <AllowancesDetailsView
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

export default Allowances;