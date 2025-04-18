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
import { Typography } from "@mui/material";
import { IoFilterSharp } from "react-icons/io5";
import { FiEdit2, FiCopy, FiTrash2, FiFileText } from "react-icons/fi";
import Pagination from "@mui/material/Pagination";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import LeaveRequestDetails from "../../modalForms_evan/LeaveField/MyLeaveRequest/LeaveRequestDetails";
import CreateLeaveRequest from "../../modalForms_evan/LeaveField/MyLeaveRequest/CreateLeaveRequest";
import TopBarComponet from "../../modalForms_evan/TopComponent/TopBarComponet";
import LeaveRequestsform from "../../modalForms_evan/LeaveField/MyLeaveRequest/LeaveRequestsform";
import CommentView from "../../modalForms_evan/LeaveField/MyLeaveRequest/CommentView";
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
    marginBottom: "10px",
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
    // alignItems: "center",
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

const MyLeaveRequests = () => {
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
        name: "Adam Luis",
        code: "(#PEP63)",
      },
      type: "Sick Leave",
      typeShort: "SL",
      startDate: "May. 27, 2024",
      endDate: "May. 27, 2024",
      requestedDays: "0.0",
      status: "Requested",
      description: "caught fever and cold",
      availableDays: 9.0,
      carryForwardDays: 0.0,
      totalDays: 9.0,
      totalTaken: 0,
    },
    {
      id: 2,
      employee: {
        name: "Adam Luis",
        code: "(#PEP64)",
      },
      type: "Casual Leave",
      typeShort: "CL",
      startDate: "May. 25, 2024",
      endDate: "May. 25, 2024",
      requestedDays: "0.0",
      status: "Requested",
      description: "on a trip",
      availableDays: 0.0,
      carryForwardDays: 0.0,
      totalDays: 0.0,
      totalTaken: 0,
    },
  ];

  //   Leave Card
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLeaveType, setSelectedLeaveType] = useState("");

  const toggleModal = () => setModalOpen(!isModalOpen);

  const handleCardClick = (leaveType) => {
    setSelectedLeaveType(leaveType);
    toggleModal();
  };

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

  // View Comments
  const [isCommentsOpen, setCommentsOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  const handleViewComments = (index) => {
    setSelectedRowIndex(index);
    setCommentsOpen(true);
  };

  // Edit click
  const handleEditClick = (data) => {
    setUpdateData(data);
    setSelectedLeaveType(data.type);
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
            <th style={styles.tableCell}>Leave Type</th>
            <th style={styles.tableCell}>Start Date</th>
            <th style={styles.tableCell}>End Date</th>
            <th style={styles.tableCell}>Requested Days</th>
            <th style={styles.tableCell}>Status</th>
            <th style={styles.tableCell}>Comment</th>
            <th style={styles.tableCell}>Confirmation</th>
            <th style={styles.tableCell}>Actions</th>
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
                    style={{
                      ...styles.circle,
                      ...(item.type === "Sick Leave"
                        ? styles.sickLeaveCircle
                        : styles.casualLeaveCircle),
                      width: 30,
                      height: 30,
                      marginRight: "10px",
                      fontSize: "12px",
                      color: "#333",
                    }}
                  >
                    {getInitials(item.type)}
                  </Avatar>
                  <div>
                    <div style={{ fontWeight: "500" }}>{item.type}</div>
                  </div>
                </div>
              </td>
              {/* <td style={styles.tableCell}>{item.type}</td> */}
              <td style={styles.tableCell}>{item.startDate}</td>
              <td style={styles.tableCell}>{item.endDate}</td>
              <td style={styles.tableCell}>{item.requestedDays}</td>
              <td style={styles.tableCell}>{item.status}</td>
              <td style={styles.tableCell}>
                <Button
                  color="link"
                  className="p-0"
                  id={`viewComments-${item.id}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewComments(index);
                  }}
                >
                  <FiFileText />
                </Button>
                <UncontrolledTooltip
                  placement="top"
                  target={`viewComments-${item.id}`}
                >
                  View Comments
                </UncontrolledTooltip>
              </td>

              <td style={styles.tableCell}>
                <div>
                  <Button
                    style={{
                      backgroundColor: "#838687",
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
                      e.currentTarget.style.backgroundColor = "#616464";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#838687";
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </td>

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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );

  const TopButtons = () => (
    <div style={styles.topButtons}>
      <Button style={styles.selectButton} onClick={handleSelectAll}>
        Select All Requests
      </Button>
      {selectedRows.length > 0 && (
        <>
          <Button
            style={styles.unselectButton}
            onClick={() => setSelectedRows([])}
          >
            Unselect All Requests
          </Button>
          {/* <Button style={styles.exportButton}>Export Shifts</Button> */}
          <span style={styles.selectedCount}>
            {selectedRows.length} - Selected
          </span>
        </>
      )}
    </div>
  );

  return (
    <Container fluid className="p-3" style={{ width: "1200px" }}>
      <TopBarComponet
        headerName="My Leave Requests"
        onCreateClick={toggleCreateModal}
      />
      <CreateLeaveRequest
        isOpen={isCreateModalOpen}
        toggle={toggleCreateModal}
      />

      <div style={styles.cardContainer}>
        {shiftData.map((item) => (
          <Card
            key={item.id}
            style={styles.leaveCard}
            onClick={() => handleCardClick(item.type)}
          >
            <div
              style={{
                ...styles.circle,
                ...(item.type === "Sick Leave"
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
              <Typography variant="h6" style={styles.leaveTitle}>
                {item.type}
              </Typography>
              <Typography style={styles.leaveText}>
                Available Leave Days : {item.availableDays}
              </Typography>
              <Typography style={styles.leaveText}>
                Carryforward Leave Days : {item.carryForwardDays}
              </Typography>
              <Typography style={styles.leaveText}>
                Total Leave Days : {item.totalDays}
              </Typography>
              <Typography style={styles.leaveText}>
                Total Leave taken : {item.totalTaken}
              </Typography>
            </div>
          </Card>
        ))}
      </div>

      <div>
        <TopButtons />
      </div>

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
            <span>Requested</span>
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
            <span>Approved</span>
          </div>
          <div className="d-flex align-items-center">
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "gray",
                marginRight: 8,
              }}
            ></div>
            <span>Cancelled</span>
          </div>
          <div className="d-flex align-items-center">
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: "red",
                marginRight: 8,
              }}
            ></div>
            <span>Rejected</span>
          </div>
        </div>
      </div>

      <Card>
        <CardBody>
          {renderShiftRequestsTable()}

          {/* Pagination */}
          <Row className="mt-3">
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
          </Row>
        </CardBody>
      </Card>

      {/* Leave Requests Form Modal */}
      <LeaveRequestsform
        isOpen={isModalOpen}
        toggle={toggleModal}
        leaveType={selectedLeaveType}
      />

      {/* Details Modal */}
      {isDetailsModalOpen && (
        <LeaveRequestDetails
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
        <LeaveRequestsform
          isOpen={isUpdateModalOpen}
          toggle={toggleUpdateModal}
          leaveType={selectedLeaveType}
          data={updateData}
        />
      )}

      {/* View comments */}
      <CommentView
        isOpen={isCommentsOpen}
        onClose={() => setCommentsOpen(false)}
        rowIndex={selectedRowIndex}
        data={shiftData}
      />

      {/* For remove */}
      <WarningComponent
        open={isWarningOpen}
        onClose={handleCloseWarning}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this Leave request?"
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </Container>
  );
};

export default MyLeaveRequests;
