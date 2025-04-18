import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Input,
  Button,
  Badge,
  Card,
  CardBody,
  Tooltip,
  UncontrolledTooltip,
} from "reactstrap";
import {
  IoCheckmarkOutline,
  IoCloseOutline,
  IoEllipsisVertical,
} from "react-icons/io5";
import Pagination from "@mui/material/Pagination";
import { FiEdit2, FiCopy, FiTrash2, FiFileText } from "react-icons/fi";
import { MdDone, MdDelete } from "react-icons/md";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import TopBarComponet from "../../modalForms_evan/TopComponent/TopBarComponet";
import OTAttendances from "./OTAttendances";
import ValidateAttendances from "./ValidateAttendances";
import DetailsAttendances from "../../modalForms_evan/AttendaceField/Attendances/DetailsAttendances";
import AddAttendanceComponent from "../../modalForms_evan/AttendaceField/Attendances/AddAttendanceComponent";
import EditAttendances from "../../modalForms_evan/AttendaceField/Attendances/EditAttendances";
import WarningComponent from "../../modalForms_evan/Warning Component/WarningComponent";

const styles = {
  pageWrapper: {
    minWidth: "1024px",
    maxWidth: "100%",
    padding: "20px",
    flex: 1,
  },
  mainContent: {
    width: "100%",
    minWidth: 0,
  },
  cardWrapper: {
    width: "100%",
    minWidth: 0,
    overflow: "hidden",
  },
  tableWrapper: {
    width: "100%",
    overflowX: "auto",
    marginRight: "0",
    marginLeft: "0",
    "::-webkit-scrollbar": {
      height: "8px",
    },
    "::-webkit-scrollbar-track": {
      background: "#f1f1f1",
    },
    "::-webkit-scrollbar-thumb": {
      background: "#888",
      borderRadius: "4px",
    },
  },
  fixedTable: {
    minWidth: "1500px",
    width: "100%",
    tableLayout: "fixed",
  },
  topButtons: {
    display: "flex",
    gap: "10px",
  },
  selectButton: {
    border: "1px solid #4CAF50",
    color: "#4CAF50",
    background: "white",
    padding: "6px 15px",
    borderRadius: "4px",
    fontWeight: "500",
  },
  unselectButton: {
    border: "1px solid #666",
    color: "#666",
    background: "white",
    padding: "6px 15px",
    borderRadius: "4px",
  },
  exportButton: {
    border: "1px solid #2196F3",
    color: "#2196F3",
    background: "white",
    padding: "6px 15px",
    borderRadius: "4px",
  },
  selectedCount: {
    border: "1px solid #F44336",
    color: "#F44336",
    background: "white",
    padding: "6px 15px",
    borderRadius: "4px",
  },
  tabs: {
    display: "flex",
    borderBottom: "1px solid #dee2e6",
    marginBottom: "20px",
  },
  tab: {
    padding: "10px 20px",
    cursor: "pointer",
    border: "none",
    background: "none",
    position: "relative",
    color: "#666",
    borderBottom: "2px solid transparent",
  },
  activeTab: {
    color: "#d9534f",
    borderBottom: "2px solid #d9534f",
    fontWeight: "500",
    "&:after": {
      content: '""',
      position: "absolute",
      bottom: "-1px",
      left: 0,
      right: 0,
      height: "2px",
      background: "#f44336",
    },
  },
  tableCell: {
    padding: "12px 16px",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
  },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "10px",
    fontSize: "14px",
    color: "#333",
  },
  statusBadge: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: "500",
  },
  actionButtons: {
    display: "flex",
    gap: "8px",
  },
};

const Attendances = () => {
  const [activeView, setActiveView] = useState("requests");
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);

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
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const shiftData = [
    {
      id: 1,
      employee: {
        name: "Adam luis",
        code: "(#PEP48)",
      },
      date: "Aug. 21, 2024",
      day: "Wednesday",
      checkIn: "03:48 PM",
      InDate: "Aug. 21, 2024",
      checkOut: "03:10 PM",
      OutDate: "Aug. 26, 2024",
      Shift: "Regular Shift",
      workType: "None",
      minHour: "08:15",
      atWork: "120:22",
      pendingHour: "00:00",
      overTime: "04:00",
    },
    {
      id: 2,
      employee: {
        name: "Sofia Howard",
        code: "(#PEP75)",
      },
      date: "Aug. 21, 2024",
      day: "Wednesday",
      checkIn: "03:48 PM",
      InDate: "Aug. 21, 2024",
      checkOut: "03:10 PM",
      OutDate: "Aug. 26, 2024",
      Shift: "Regular Shift",
      workType: "None",
      minHour: "08:15",
      atWork: "120:22",
      pendingHour: "00:00",
      overTime: "04:00",
    },

    {
      id: 3,
      employee: {
        name: "Stella Bell",
        code: "(#PEP59)",
      },
      date: "Aug. 21, 2024",
      day: "Wednesday",
      checkIn: "03:48 PM",
      InDate: "Aug. 21, 2024",
      checkOut: "03:10 PM",
      OutDate: "Aug. 26, 2024",
      Shift: "Regular Shift",
      workType: "None",
      minHour: "08:15",
      atWork: "120:22",
      pendingHour: "00:00",
      overTime: "04:00",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  // Calculate total pages and current employees
  const totalPages = Math.ceil(shiftData.length / employeesPerPage);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = shiftData.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(shiftData.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const handleRowSelect = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  // Open the selected row's data
  const handleRowClick = (data, index) => {
    setSelectedRowData(index);
    setDetailsModalOpen(true);
  };

  // Close the modal
  const toggleDetailsModal = () => {
    setDetailsModalOpen(!isDetailsModalOpen);
  };

  const handleNavigateAsset = (direction) => {
    if (direction === "previous" && selectedRowData > 0) {
      setSelectedRowData(selectedRowData - 1);
    } else if (direction === "next" && selectedRowData < shiftData.length - 1) {
      setSelectedRowData(selectedRowData + 1);
    }
  };

  // Function to toggle modal visibility
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const toggleCreateModal = () => {
    setCreateModalOpen(!isCreateModalOpen);
  };

  // Edit click
  const handleEditClick = (data) => {
    setUpdateData(data);
    setUpdateModalOpen(true);
  };

  const toggleUpdateModal = () => {
    setUpdateModalOpen(!isUpdateModalOpen);
  };

  // Delete clcik
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

  const ActionButton = ({
    id,
    color,
    bgColor,
    icon: Icon,
    tooltip,
    onClick,
  }) => {
    return (
      <>
        <button
          id={id}
          className="btn"
          style={{
            color: color,
            backgroundColor: bgColor,
            borderRadius: "4px",
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            padding: "0",
            transition: "all 0.2s ease-in-out",
            marginTop: "10px",
          }}
          onClick={(e) => {
            e.stopPropagation();
            if (onClick) onClick(e);
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.opacity = "0.8";
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.opacity = "1";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          <Icon size={16} />
        </button>
        <UncontrolledTooltip placement="top" target={id}>
          {tooltip}
        </UncontrolledTooltip>
      </>
    );
  };

  const renderShiftRequestsTable = () => (
    <div style={styles.pageWrapper}>
      <Table
        hover
        responsive
        className="mb-0"
        style={{ minWidth: "1500px", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th style={styles.tableCell}>
              <Input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th style={styles.tableCell}>Employee</th>
            <th style={styles.tableCell}>Date</th>
            <th style={styles.tableCell}>Day</th>
            <th style={styles.tableCell}>Check-In</th>
            <th style={styles.tableCell}>In Date</th>
            <th style={styles.tableCell}>Check-Out</th>
            <th style={styles.tableCell}>Out Date</th>
            <th style={styles.tableCell}>Shift</th>
            <th style={styles.tableCell}>Work Type</th>
            <th style={styles.tableCell}>Min Hour</th>
            <th style={styles.tableCell}>At Work</th>
            <th style={styles.tableCell}>Pending Hour</th>
            <th style={styles.tableCell}>Overtime</th>
            <th style={styles.tableCell}>Actions</th>
            <th style={styles.tableCell}>Confirmation</th>
            <th style={styles.tableCell}></th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((item, index) => (
            <tr
              key={item.id}
              onClick={() => handleRowClick(item, index)}
              style={{
                cursor: "pointer",
                backgroundColor: selectedRows.includes(item.id)
                  ? "#FFF3E0"
                  : "white",
              }}
            >
              <td style={styles.tableCell}>
                <Input
                  type="checkbox"
                  checked={selectedRows.includes(item.id)}
                  onChange={() => handleRowSelect(item.id)}
                />
              </td>
              <td style={styles.tableCell}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    sx={{
                      bgcolor: stringToColor(item.employee.name),
                      width: 30,
                      height: 30,
                      marginRight: "10px",
                    }}
                  >
                    {getInitials(item.employee.name)}
                  </Avatar>
                  <div>
                    <div style={{ fontWeight: "500" }}>
                      {item.employee.name}
                    </div>
                    <small style={{ color: "#666" }}>
                      {item.employee.code}
                    </small>
                  </div>
                </div>
              </td>
              <td style={styles.tableCell}>{item.date}</td>
              <td style={styles.tableCell}>{item.day}</td>
              <td style={styles.tableCell}>{item.checkIn}</td>
              <td style={styles.tableCell}>{item.InDate}</td>
              <td style={styles.tableCell}>{item.checkOut}</td>
              <td style={styles.tableCell}>{item.OutDate}</td>
              <td style={styles.tableCell}>{item.Shift}</td>
              <td style={styles.tableCell}>{item.workType}</td>
              <td style={styles.tableCell}>{item.minHour}</td>
              <td style={styles.tableCell}>{item.atWork}</td>
              <td style={styles.tableCell}>{item.pendingHour}</td>
              <td style={styles.tableCell}>{item.overTime}</td>
              <td>
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginLeft: "20px",
                  }}
                >
                  <ActionButton
                    id={`editBtn-${item.id}`}
                    color="#435ebe"
                    bgColor="#eef2ff"
                    icon={FiEdit2}
                    tooltip="Edit"
                    onClick={(e) => {
                      handleEditClick(item);
                    }}
                  />
                  <ActionButton
                    id={`deleteBtn-${item.id}`}
                    color="#dc3545"
                    bgColor="#ffebee"
                    icon={FiTrash2}
                    tooltip="Remove"
                    onClick={() => handleDeleteClick(item.id)}
                  />
                </div>
              </td>

              <td style={styles.tableCell}>
                <div>
                  <Button
                    style={{
                      backgroundColor: "#3498db",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      padding: "8px 16px",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      // if (onClick) onClick(e);
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#2b79a9";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#3498db";
                    }}
                  >
                    Validate
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  const renderContent = () => {
    switch (activeView) {
      case "requests":
        return renderShiftRequestsTable();
      case "allocated":
        return <OTAttendances />;
      case "validated":
        return <ValidateAttendances />;
      default:
        return <div>No content available</div>;
    }
  };

  return (
    <Container fluid className="p-3" style={{ width: "1200px" }}>
      <TopBarComponet
        headerName="Attendances"
        onCreateClick={toggleCreateModal}
      />
      <AddAttendanceComponent
        isOpen={isCreateModalOpen}
        toggle={toggleCreateModal}
      />

      <Card>
        <CardBody>
          <div style={styles.tabs}>
            <button
              style={{
                ...styles.tab,
                ...(activeView === "requests" && styles.activeTab),
              }}
              onClick={() => setActiveView("requests")}
            >
              Attendance to validate
            </button>
            <button
              style={{
                ...styles.tab,
                ...(activeView === "allocated" && styles.activeTab),
              }}
              onClick={() => setActiveView("allocated")}
            >
              OT Attendances
            </button>
            <button
              style={{
                ...styles.tab,
                ...(activeView === "validated" && styles.activeTab),
              }}
              onClick={() => setActiveView("validated")}
            >
              Validate Attendances
            </button>
          </div>

          {renderContent()}

          {/* Pagination */}
          <Row className="mt-3">
            {activeView !== "allocated" && activeView !== "validated" && (
              <Col className="d-flex justify-content-end">
                <Stack spacing={2}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    variant="outlined"
                    shape="rounded"
                  />
                </Stack>
              </Col>
            )}
          </Row>
        </CardBody>
      </Card>

      {/* Details Modal */}
      {isDetailsModalOpen && (
        <DetailsAttendances
          isOpen={isDetailsModalOpen}
          toggle={toggleDetailsModal}
          data={shiftData[selectedRowData]}
          onNavigate={handleNavigateAsset}
          hasPrevious={selectedRowData > 0}
          hasNext={selectedRowData < shiftData.length - 1}
        />
      )}

      {/* Update form */}
      {isUpdateModalOpen && (
        <EditAttendances
          isOpen={isUpdateModalOpen}
          toggle={toggleUpdateModal}
          data={updateData}
        />
      )}

      {/* For remove */}
      <WarningComponent
        open={isWarningOpen}
        onClose={handleCloseWarning}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to remove this Attendance?"
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </Container>
  );
};

export default Attendances;
