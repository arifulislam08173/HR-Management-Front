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

import TopBarComponet from "../modalForms_evan/TopComponent/TopBarComponet";

import CreateWorkTypeRequest from "../modalForms_evan/WorkTypeRequestComponent/CreateWorkTypeRequest";
import WorkTypeDetails from "../modalForms_evan/WorkTypeRequestComponent/WorkTypeDetails";
import UpdateWorkType from "../modalForms_evan/WorkTypeRequestComponent/UpdateWorkType";
import ViewCommnetsWorkType from "../modalForms_evan/WorkTypeRequestComponent/ViewCommnetsWorkType";
import DuplicateWorkType from "../modalForms_evan/WorkTypeRequestComponent/DuplicateWorkType";
import WarningComponent from "../modalForms_evan/Warning Component/WarningComponent";

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

const WorkTypeRequests = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const [isDuplicateModalOpen, setDuplicateModalOpen] = useState(false);
  const [duplicateData, setDuplicateData] = useState(null);

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
        name: "Sofia Howard",
        code: "(#PEP75)",
      },
      requestedShift: "Regular Shift",
      previousShift: "Morning Shift",
      requestedDate: "May. 1, 2024",
      requestedTill: "May. 31, 2024",
      status: "Approved",
      description: "shift change",
    },
    {
      id: 2,
      employee: {
        name: "Levi Sanders",
        code: "(#PEP48)",
      },
      requestedShift: "Night Shift",
      previousShift: "Regular Shift",
      requestedDate: "Mar. 10, 2024",
      requestedTill: "Mar. 22, 2024",
      status: "Requested",
      description: "remote work type for a month",
    },
    {
      id: 3,
      employee: {
        name: "Sevi Eanders",
        code: "(#PEP48)",
      },
      requestedShift: "Regular Shift",
      previousShift: "Night Shift",
      requestedDate: "Mar. 12, 2024",
      requestedTill: "Mar. 22, 2024",
      status: "Rejected",
      description: "shift change",
    },
    {
      id: 4,
      employee: {
        name: "Stella Bell",
        code: "(#PEP59)",
      },
      requestedShift: "Regular Shift",
      previousShift: "Morning Shift",
      requestedDate: "May. 1, 2024",
      requestedTill: "May. 31, 2024",
      status: "Approved",
      description: "shift change",
    },
    {
      id: 5,
      employee: {
        name: "Etella Saea",
        code: "(#PEP59)",
      },
      requestedShift: "Regular Shift",
      previousShift: "Night Shift",
      requestedDate: "Mar. 12, 2024",
      requestedTill: "Mar. 22, 2024",
      status: "Rejected",
      description: "remote work type for a month",
    },
    {
      id: 6,
      employee: {
        name: "Alison Howard",
        code: "(#PEP75)",
      },
      requestedShift: "Night Shift",
      previousShift: "Regular Shift",
      requestedDate: "Mar. 10, 2024",
      requestedTill: "Mar. 22, 2024",
      status: "Requested",
      description: "shift change",
    },
    {
      id: 7,
      employee: {
        name: "Robert Howard",
        code: "(#PEP75)",
      },
      requestedShift: "Night Shift",
      previousShift: "Regular Shift",
      requestedDate: "Mar. 10, 2024",
      requestedTill: "Mar. 22, 2024",
      status: "Requested",
      description: "shift change",
    },
    {
      id: 8,
      employee: {
        name: "Alexa Robo",
        code: "(#PEP75)",
      },
      requestedShift: "Night Shift",
      previousShift: "Regular Shift",
      requestedDate: "Mar. 10, 2024",
      requestedTill: "Mar. 22, 2024",
      status: "Requested",
      description: "shift change",
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

  // Duplicate click
  const handleDuplicateClick = (data) => {
    setDuplicateData(data);
    setDuplicateModalOpen(true);
  };

  const toggleDuplicateModal = () => {
    setDuplicateModalOpen(!isDuplicateModalOpen);
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

  // Reject clcik
  const [isWarningOpened, setIsWarningOpened] = useState(false);
  const [rejectId, setrejectId] = useState(null);

  const handleRejectClick = (id) => {
    setrejectId(id);
    setIsWarningOpened(true);
  };

  const handleRjectCloseWarning = () => {
    setIsWarningOpened(false);
  };

  const handleRejectConfirm = () => {
    console.log("Deleted item with ID:", deleteId);
    setIsWarningOpened(false);
  };

  // View Comments
  const [isCommentsOpen, setCommentsOpen] = useState(false);
  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  const handleViewComments = (index) => {
    setSelectedRowIndex(index);
    setCommentsOpen(true);
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
            <th style={styles.tableCell}>Requested Shift</th>
            <th style={styles.tableCell}>Previous/Current Shift</th>
            <th style={styles.tableCell}>Requested Date</th>
            <th style={styles.tableCell}>Requested Till</th>
            <th style={styles.tableCell}>Status</th>
            <th style={styles.tableCell}>Description</th>
            <th style={styles.tableCell}>Comment</th>
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
              <td style={styles.tableCell}>{item.requestedShift}</td>
              <td style={styles.tableCell}>{item.previousShift}</td>
              <td style={styles.tableCell}>{item.requestedDate}</td>
              <td style={styles.tableCell}>{item.requestedTill}</td>
              <td style={styles.tableCell}>{item.status}</td>
              <td style={styles.tableCell}>{item.description}</td>
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
                    id={`copyBtn-${item.id}`}
                    color="#198754"
                    bgColor="#e8f5e9"
                    icon={FiCopy}
                    tooltip="Duplicate"
                    onClick={(e) => {
                      handleDuplicateClick(item);
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
                <div style={styles.actionButtons}>
                  <Button
                    id={`approveBtn-${item.id}`}
                    color="success"
                    size="sm"
                  >
                    <MdDone size={16} />
                  </Button>
                  <UncontrolledTooltip
                    placement="top"
                    target={`approveBtn-${item.id}`}
                  >
                    Approve
                  </UncontrolledTooltip>

                  <Button
                    id={`rejectBtn-${item.id}`}
                    color="danger"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRejectClick(item.id);
                    }}
                  >
                    <IoCloseOutline />
                  </Button>
                  <UncontrolledTooltip
                    placement="top"
                    target={`rejectBtn-${item.id}`}
                  >
                    Reject
                  </UncontrolledTooltip>
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
        Select All Worktypes
      </Button>
      {selectedRows.length > 0 && (
        <>
          <Button
            style={styles.unselectButton}
            onClick={() => setSelectedRows([])}
          >
            Unselect All Worktypes
          </Button>
          <Button style={styles.exportButton}>Export Worktypes</Button>
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
        headerName="Work Type Requests"
        onCreateClick={toggleCreateModal}
      />
      <CreateWorkTypeRequest
        isOpen={isCreateModalOpen}
        toggle={toggleCreateModal}
      />
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
                backgroundColor: "#4CAF50",
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
                backgroundColor: "#F44336",
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

      {/* Details Modal */}
      {isDetailsModalOpen && (
        <WorkTypeDetails
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
        <UpdateWorkType
          isOpen={isUpdateModalOpen}
          toggle={toggleUpdateModal}
          data={updateData}
        />
      )}

      {/* Duplicate form */}
      {isDuplicateModalOpen && (
        <DuplicateWorkType
          isOpen={isDuplicateModalOpen}
          toggle={toggleDuplicateModal}
          data={duplicateData}
        />
      )}

      {/* Form remove */}
      <WarningComponent
        open={isWarningOpen}
        onClose={handleCloseWarning}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to remove this Work Type?"
        confirmText="Confirm"
        cancelText="Cancel"
      />

      {/* For reject */}
      <WarningComponent
        open={isWarningOpened}
        onClose={handleRjectCloseWarning}
        onConfirm={handleRejectConfirm}
        message="Are you sure you want to reject this Work Type?"
        confirmText="Confirm"
        cancelText="Cancel"
      />

      {/* View comments */}
      <ViewCommnetsWorkType
        isOpen={isCommentsOpen}
        onClose={() => setCommentsOpen(false)}
        rowIndex={selectedRowIndex}
        data={shiftData}
      />
    </Container>
  );
};

export default WorkTypeRequests;
