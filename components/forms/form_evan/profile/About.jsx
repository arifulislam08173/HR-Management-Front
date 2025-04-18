import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import {
  FiMail,
  FiPhone,
  FiCalendar,
  FiUser,
  FiMapPin,
  FiFlag,
  FiFileText,
  FiBriefcase,
  FiHome,
  FiCreditCard,
  FiDatabase,
  FiUsers,
  FiClock,
  FiDollarSign,
  FiEdit,
  FiTrash2,
  FiPlus,
} from "react-icons/fi";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PaymentIcon from '@mui/icons-material/Payment';

import Router from "next/router";
import WorkTypeShift from "./WorkTypeShift";
import Attendance from "./Attendance";
import Leave from "./Leave";
import Payroll from "./Payroll";
import AllowanceDeduction from "./AllowanceDeduction";
import PenaltyAccount from "./PenaltyAccount";
import Documents from "./Documents";
import Assets from "./Assets";
import BonusPoints from "./BonusPoints";
import ScheduledInterview from "./ScheduledInterview";
import Performance from "./Performance";

const About = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [activeSection, setActiveSection] = useState("workInfo");

  const speedDialActions = [
    { icon: <PersonAddIcon />, name: 'Add Employee' },
    { icon: <WorkIcon />, name: 'Add Work Type' },
    { icon: <EventIcon />, name: 'Add Shift' },
    { icon: <AssignmentIcon />, name: 'Add Document' },
    { icon: <PaymentIcon />, name: 'Add Payroll' },
  ];

  const handleSpeedDialAction = () => {

  };

  const navItems = [
    "About",
    "Work Type & Shift",
    "Attendance",
    "Leave",
    "Payroll",
    "Allowance & Deduction",
    "Penalty Account",
    "Assets",
    "Performance",
    "Documents",
    "Bonus Points",
    "Scheduled Interview",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Work Type & Shift":
        return <WorkTypeShift />;
      case "Attendance":
        return <Attendance />;
      case "Leave":
        return <Leave />;
      case "Payroll":
        return <Payroll />;
      case "Allowance & Deduction":
        return <AllowanceDeduction />
      case "Penalty Account":
        return <PenaltyAccount />
      case "Assets":
        return <Assets />
      case "Performance":
        return <Performance />
      case "Documents":
        return <Documents />
      case "Bonus Points":
        return <BonusPoints />
      case "Scheduled Interview":
        return <ScheduledInterview />

      default:
        return (
          <div>
            <Row>
              {/* Personal Information */}
              <Col md={4}>
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Personal Information</h5>
                    <div style={{ lineHeight: "2.5" }}>
                      <p>
                        <FiCalendar className="me-2" /> Date of Birth: None
                      </p>
                      <p>
                        <FiUser className="me-2" /> Gender: Male
                      </p>
                      <p>
                        <FiMapPin className="me-2" /> Address: None
                      </p>
                      <p>
                        <FiFlag className="me-2" /> Country: None
                      </p>
                      <p>
                        <FiMapPin className="me-2" /> State: None
                      </p>
                      <p>
                        <FiMapPin className="me-2" /> City: None
                      </p>
                      <p>
                        <FiFileText className="me-2" /> Qualification: None
                      </p>
                      <p>
                        <FiBriefcase className="me-2" /> Experience: None
                      </p>
                      <p>
                        <FiUser className="me-2" /> Marital Status: Single
                      </p>
                      <p>
                        <FiUsers className="me-2" /> Children: None
                      </p>
                      <p>
                        <FiPhone className="me-2" /> Emergency Contact: None
                      </p>
                      <p>
                        <FiUser className="me-2" /> Emergency Contact Name: None
                      </p>
                      <p>
                        <FiUsers className="me-2" /> Emergency Contact Relation:
                        None
                      </p>
                    </div>
                  </div>
                </div>
              </Col>

              {/* Work Information and Contract Information */}
              <Col md={8}>
                <div className="card shadow-sm mb-4">
                  <div className="card-body">
                    <div className="d-flex mb-4">
                      <div
                        className={`me-4 ${
                          activeSection === "workInfo" ? "text-danger" : ""
                        }`}
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveSection("workInfo")}
                      >
                        <FiFileText className="me-2" /> Work Information
                      </div>
                      <div
                        className={
                          activeSection === "contractDetails"
                            ? "text-danger"
                            : ""
                        }
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveSection("contractDetails")}
                      >
                        <FiFileText className="me-2" /> Contract Details
                      </div>
                    </div>

                    {activeSection === "workInfo" ? (
                      <Row>
                        <Col md={6}>
                          <div style={{ lineHeight: "2.5" }}>
                            <p>
                              <FiBriefcase className="me-2" /> Department: S/W
                              Dept
                            </p>
                            <p>
                              <FiClock className="me-2" /> Shift Information:
                              Regular Shift
                            </p>
                            <p>
                              <FiUser className="me-2" /> Employee Type: None
                            </p>
                            <p>
                              <FiUser className="me-2" /> Reporting Manager:
                              None
                            </p>
                            <p>
                              <FiMapPin className="me-2" /> Work Location: None
                            </p>
                            <p>
                              <FiCalendar className="me-2" /> End Date: May. 22,
                              2024
                            </p>
                          </div>
                        </Col>
                        <Col md={6}>
                          <div style={{ lineHeight: "2.5" }}>
                            <p>
                              <FiBriefcase className="me-2" /> Job Position:
                              None
                            </p>
                            <p>
                              <FiFileText className="me-2" /> Work Type: None
                            </p>
                            <p>
                              <FiDollarSign className="me-2" /> Salary: None
                            </p>
                            <p>
                              <FiHome className="me-2" /> Company: Horilla
                            </p>
                            <p>
                              <FiCalendar className="me-2" /> Joining Date: May.
                              22, 2024
                            </p>
                            <p>
                              <FiFileText className="me-2" /> Tags: None
                            </p>
                          </div>
                        </Col>
                      </Row>
                    ) : (
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Contract</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Wage Type</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Adam Luis's Contract</td>
                            <td>May. 22, 2024</td>
                            <td>None</td>
                            <td>Monthly</td>
                            <td>
                              <FiEdit
                                className="me-2"
                                style={{ cursor: "pointer" }}
                              />
                              <FiTrash2
                                style={{ cursor: "pointer", color: "#dc3545" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>

                {/* Bank Information */}
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title mb-4">Bank Information</h5>
                    <Row>
                      <Col md={6}>
                        <div style={{ lineHeight: "2.5" }}>
                          <p>
                            <FiHome className="me-2" /> Bank Name: None
                          </p>
                          <p>
                            <FiMapPin className="me-2" /> Branch: None
                          </p>
                          <p>
                            <FiMapPin className="me-2" /> Bank Address: None
                          </p>
                          <p>
                            <FiDatabase className="me-2" /> Bank Code #1: None
                          </p>
                        </div>
                      </Col>
                      <Col md={6}>
                        <div style={{ lineHeight: "2.5" }}>
                          <p>
                            <FiCreditCard className="me-2" /> Account Number:
                            None
                          </p>
                          <p>
                            <FiDatabase className="me-2" /> Bank Code #2: None
                          </p>
                          <p>
                            <FiFlag className="me-2" /> Country: None
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        );
    }
  };

  return (
    <Container className="p-0 w-0 m-0">
      {/* First Row */}
      <Row className="mb-4 align-items-start position-relative">
        <Col md={4}>
          <div className="d-flex align-items-center">
            <div
              style={{
                width: "80px",
                height: "80px",
                backgroundColor: "#f0f0d8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "8px",
                marginRight: "15px",
              }}
            >
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>AL</span>
            </div>
            <h4 className="mb-0">Adam Luis</h4>
          </div>
        </Col>
        <Col md={8}>
          <div style={{ lineHeight: "2" }}>
            <p className="mb-2">
              <FiMail className="me-2" /> Work Email: None
            </p>
            <p className="mb-2">
              <FiMail className="me-2" /> Email: adam.luis@horilla.com
            </p>
            <p className="mb-2">
              <FiPhone className="me-2" /> Work Phone: None
            </p>
            <p className="mb-2">
              <FiPhone className="me-2" /> Phone: 9876542001
            </p>
          </div>
        </Col>
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "1100px",
            cursor: "pointer",
            color: "#435ebe",
          }}
          onClick={() => Router.push("create")}
        >
          <FiEdit size={20} />
        </div>
      </Row>

      {/* Second Row */}
      <div className="mb-0 border-bottom" style={{ overflowX: "auto" }}>
        <div className="d-flex" style={{ minWidth: "max-content" }}>
          {navItems.map((item, index) => (
            <div
              key={index}
              className="px-2 py-2"
              style={{
                cursor: "pointer",
                borderBottom: activeTab === item ? "2px solid #d9534f" : "none",
                color: activeTab === item ? "#d9534f" : "#666",
                whiteSpace: "nowrap",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.borderBottom = "2px solid #d9534f")
              }
              onMouseOut={(e) => {
                if (activeTab !== item) {
                  e.currentTarget.style.borderBottom = "none";
                }
              }}
              onClick={() => setActiveTab(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <hr />

      {/* Floating Button */}
        <SpeedDial
          ariaLabel="Employee actions speed dial"
          sx={{
            position: 'fixed',
            bottom: 30,
            right: 30,
            zIndex: 10,
            '& .MuiSpeedDial-fab': {
              bgcolor: '#dc3545',
              '&:hover': {
                bgcolor: '#bb2d3b', 
              }
            }
          }}
          icon={<SpeedDialIcon />}
        >
          {speedDialActions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleSpeedDialAction(action.name)}
            />
          ))}
        </SpeedDial>

      {/* <Button
        color="danger"
        style={{
          position: "fixed",
          bottom: "30px",
          right: "30px",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          zIndex: "9999",
          pointerEvents: "auto",
        }}
      >
        <FiPlus size={24} />
      </Button> */}

      {renderContent()}
    </Container>
  );
};

export default About;
