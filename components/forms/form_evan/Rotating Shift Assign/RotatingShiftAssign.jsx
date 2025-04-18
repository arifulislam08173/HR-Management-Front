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
import { IoArchive } from "react-icons/io5";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import TopBarAssignComponent from "../modalForms_evan/TopComponent/TopBarAssignComponent";
import CreateRotatingShiftAssign from "../modalForms_evan/RotatingShiftAssignComponents/CreateRotatingShiftAssign";
import RotatingShiftDetails from "../modalForms_evan/RotatingShiftAssignComponents/RotatingShiftDetails";
import UpdateRotatingShift from "../modalForms_evan/RotatingShiftAssignComponents/UpdateRotatingShift";
import DuplicateRotatingShift from "../modalForms_evan/RotatingShiftAssignComponents/DuplicateRotatingShift";
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
};

const RotatingShiftAssign = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const [isDuplicateModalOpen, setDuplicateModalOpen] = useState(false);
  const [duplicateData, setduplicateData] = useState(null);

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
        name: "Jacob Walker",
        code: "(#PEP18)",
      },
      title: "Morning to Night",
      basedOn: "Weekend",
      rotate: "Weekly every Monday",
      startDate: "Aug. 5, 2024",
      currentShift: "Regular Shift",
      nextSwitch: "sep. 1, 2024",
      nextShift: "Morning Shift",
    },
    {
      id: 2,
      employee: {
        name: "Sofia Howard",
        code: "(#PEP75)",
      },
      title: "Morning to Night",
      basedOn: "Weekend",
      rotate: "Weekly every Monday",
      startDate: "Aug. 5, 2024",
      currentShift: "Regular Shift",
      nextSwitch: "sep. 1, 2024",
      nextShift: "Morning Shift",
    },
    {
      id: 3,
      employee: {
        name: "Rober Howard",
        code: "(#PEP85)",
      },
      title: "Night to Morning",
      basedOn: "Monthly",
      rotate: "Weekly every Monday",
      startDate: "Aug. 5, 2024",
      currentShift: "Regular Shift",
      nextSwitch: "sep. 1, 2024",
      nextShift: "Morning Shift",
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

  // Duplicate Clcick
  const handleDuplicateClick = (data) => {
    setduplicateData(data);
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

  // Archive clcik
  const [isWarningOpened, setIsWarningOpened] = useState(false);
  const [archiveId, setarchiveId] = useState(null);

  const handleArchiveClick = (id) => {
    setarchiveId(id);
    setIsWarningOpened(true);
  };

  const handleArchiveCloseWarning = () => {
    setIsWarningOpened(false);
  };

  const handleArchiveConfirm = () => {
    console.log("Archive item with ID:", archiveId);
    setIsWarningOpened(false);
  };

  //   const [isCommentsOpen, setCommentsOpen] = useState(false);
  //   const [selectedRowIndex, setSelectedRowIndex] = useState(-1);

  //   const handleViewComments = (index) => {
  //     setSelectedRowIndex(index);
  //     setCommentsOpen(true);
  //   };

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
            <th style={styles.tableCell}>Title</th>
            <th style={styles.tableCell}>Based On</th>
            <th style={styles.tableCell}>Rotate</th>
            <th style={styles.tableCell}>Start Date</th>
            <th style={styles.tableCell}>Current Shift</th>
            <th style={styles.tableCell}>Next Switch</th>
            <th style={styles.tableCell}>Next Shift</th>
            <th style={styles.tableCell}>Actions</th>
            {/* <th style={styles.tableCell}>Confirmation</th> */}
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
              <td style={styles.tableCell}>{item.title}</td>
              <td style={styles.tableCell}>{item.basedOn}</td>
              <td style={styles.tableCell}>{item.rotate}</td>
              <td style={styles.tableCell}>{item.startDate}</td>
              <td style={styles.tableCell}>{item.currentShift}</td>
              <td style={styles.tableCell}>{item.nextSwitch}</td>
              <td style={styles.tableCell}>{item.nextShift}</td>

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
                    id={`archive-${item.id}`}
                    color="#dc3545"
                    bgColor="#FFE6F2"
                    icon={IoArchive}
                    tooltip="Archive"
                    onClick={() => handleArchiveClick(item.id)}
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
        Select All Shifts
      </Button>
      {selectedRows.length > 0 && (
        <>
          <Button
            style={styles.unselectButton}
            onClick={() => setSelectedRows([])}
          >
            Unselect All Shifts
          </Button>
          <Button style={styles.exportButton}>Export Shifts</Button>
          <span style={styles.selectedCount}>
            {selectedRows.length} - Selected
          </span>
        </>
      )}
    </div>
  );

  return (
    <Container fluid className="p-3" style={{ width: "1200px" }}>
      <TopBarAssignComponent
        headerName="Rotating Shift Assign"
        onCreateClick={toggleCreateModal}
      />
      <CreateRotatingShiftAssign
        isOpen={isCreateModalOpen}
        toggle={toggleCreateModal}
      />
      <div>
        <TopButtons />
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
        <RotatingShiftDetails
          isOpen={isDetailsModalOpen}
          toggle={toggleDetailsModal}
          data={shiftData[selectedRowData]}
          onNavigate={handleNavigateAsset}
          hasPrevious={selectedRowData > 0}
          hasNext={selectedRowData < shiftData.length - 1}
        />
      )}

      {/* Update Rotating */}
      {isUpdateModalOpen && (
        <UpdateRotatingShift
          isOpen={isUpdateModalOpen}
          toggle={toggleUpdateModal}
          data={updateData}
        />
      )}

      {/* Duplicate rotating */}
      <DuplicateRotatingShift
        isOpen={isDuplicateModalOpen}
        toggle={toggleDuplicateModal}
        //   rowIndex={selectedRowIndex}
        data={duplicateData}
      />

      {/* For remove */}
      <WarningComponent
        open={isWarningOpen}
        onClose={handleCloseWarning}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to remove this shift rotating?"
        confirmText="Confirm"
        cancelText="Cancel"
      />

      {/* For archive */}
      <WarningComponent
        open={isWarningOpened}
        onClose={handleArchiveCloseWarning}
        onConfirm={handleArchiveConfirm}
        message="Are you sure you want to archive this request?"
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </Container>
  );
};

export default RotatingShiftAssign;
