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

import TopBarAssignComponent from "../../modalForms_evan/TopComponent/TopBarAssignComponent";
import AssignLeavesForm from "../../modalForms_evan/LeaveField/Assigend Leave/AssignLeavesForm";
import UpdateAvailableLeave from "../../modalForms_evan/LeaveField/Assigend Leave/UpdateAvailableLeave";
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

    leaveTypeTab: {
      display: 'flex',
      alignItems: 'center',
      padding: '10px 20px',
      cursor: 'pointer',
      border: 'none',
      background: 'none',
      gap: '8px',
    },
    leaveCount: {
      backgroundColor: '#FF6B6B',
      color: 'white',
      borderRadius: '50%',
      padding: '2px 8px',
      fontSize: '14px',
    },
    activeLeaveTab: {
      borderBottom: '2px solid #FF6B6B',
      fontWeight: '500',
    }
  };


const AssignedLeave = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [activeTab, setActiveTab] = useState('sick'); // 'sick' or 'casual'

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
  
    const leaveData = {
    sick: [
      {
        id: 1,
        employee: {
          name: "Zoey Watson",
          code: "(#PEP55)",
        },
        type: "Sick Leave",
        availableDays: 10.0,
        carryForwardDays: 0.0,
        totalDays: 10.0,
        totalTaken: 0,
        assignedDate: "May. 22, 2024"
      },
      {
        id: 2,
        employee: {
          name: "Wyatt Ramirez",
          code: "(#PEP44)",
        },
        type: "Sick Leave",
        availableDays: 10.0,
        carryForwardDays: 0.0,
        totalDays: 10.0,
        totalTaken: 0,
        assignedDate: "May. 22, 2024"
      },
      {
        id: 3,
        employee: {
          name: "William Hughes",
          code: "(#PEP32)",
        },
        type: "Sick Leave",
        availableDays: 10.0,
        carryForwardDays: 0.0,
        totalDays: 10.0,
        totalTaken: 0,
        assignedDate: "May. 22, 2024"
      }
    ],
    casual: [
      {
        id: 4,
        employee: {
          name: "Sofia Howard",
          code: "(#PEP75)",
        },
        type: "Casual Leave",
        availableDays: 10.0,
        carryForwardDays: 0.0,
        totalDays: 10.0,
        totalTaken: 0,
        assignedDate: "May. 22, 2024"
      }
    ]
  };

  const getCurrentData = () => {
    return leaveData[activeTab] || [];
  };
  
    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 5;
  
    const handlePageChange = (event, value) => {
      setCurrentPage(value);
    };
  
    // Calculate total pages
    const getCurrentPageData = () => {
      const currentData = getCurrentData();
      const indexOfLastEmployee = currentPage * employeesPerPage;
      const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
      return currentData.slice(indexOfFirstEmployee, indexOfLastEmployee);
    };
    const totalPages = Math.ceil(getCurrentData().length / employeesPerPage);
  
    const handleSelectAll = () => {
      const currentData = getCurrentData();
      if (selectAll) {
        setSelectedRows([]);
      } else {
        setSelectedRows(currentData.map((item) => item.id));
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

    const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  
    const toggleCreateModal = () => {
      setCreateModalOpen(!isCreateModalOpen);
    };

    const LeaveTypeTab = ({ type, count, isActive, onClick }) => (
      <div
        onClick={onClick}
        style={{
          ...styles.leaveTypeTab,
          ...(isActive ? styles.activeLeaveTab : {})
        }}
      >
        <span>{type}</span>
        <span style={styles.leaveCount}>{count}</span>
      </div>
    );

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
          >
            <Icon size={16} />
          </button>
          <UncontrolledTooltip placement="top" target={id}>
            {tooltip}
          </UncontrolledTooltip>
        </>
      );
    };
  
    const renderLeaveTable = () => (
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
                  onChange={() => setSelectAll(!selectAll)}
                />
              </th>
              <th style={styles.tableCell}>Employee</th>
              <th style={styles.tableCell}>Leave Type</th>
              <th style={styles.tableCell}>Available Days</th>
              <th style={styles.tableCell}>Carryforward Days</th>
              <th style={styles.tableCell}>Total Leave Days</th>
              <th style={styles.tableCell}>Used Leave Days</th>
              <th style={styles.tableCell}>Assigned Date</th>
              <th style={styles.tableCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {getCurrentPageData().map((item, index) => (
              <tr key={item.id}onClick={() => handleRowClick(item, index)}
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
                    onChange={() => {}}
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
                      <div style={{ fontWeight: "500" }}>{item.employee.name}</div>
                      <small style={{ color: "#666" }}>{item.employee.code}</small>
                    </div>
                  </div>
                </td>
                <td style={styles.tableCell}>{item.type}</td>
                <td style={styles.tableCell}>{item.availableDays}</td>
                <td style={styles.tableCell}>{item.carryForwardDays}</td>
                <td style={styles.tableCell}>{item.totalDays}</td>
                <td style={styles.tableCell}>{item.totalTaken}</td>
                <td style={styles.tableCell}>{item.assignedDate}</td>
                <td>
                  <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <ActionButton
                      id={`edit-${item.id}`}
                      color="#435ebe"
                      bgColor="#eef2ff"
                      icon={FiEdit2}
                      tooltip="Edit"
                      onClick={(e) => {
                        handleEditClick(item);
                      }}
                    />
                    <ActionButton
                      id={`delete-${item.id}`}
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
          Select All Leaves
        </Button>
        {selectedRows.length > 0 && (
          <>
            <Button
              style={styles.unselectButton}
              onClick={() => setSelectedRows([])}
            >
              Unselect All Leaves
            </Button>
            <Button style={styles.exportButton}>Export Leaves</Button>
            <span style={styles.selectedCount}>
              {selectedRows.length} - Selected
            </span>
          </>
        )}
      </div>
    );
  
    return (
      <Container fluid className="p-3" style={{ width: "1200px" }}>
        <TopBarAssignComponent headerName="Assign Leave" 
         onCreateClick={toggleCreateModal}
         />
        <AssignLeavesForm
        isOpen={isCreateModalOpen}
        toggle={toggleCreateModal}
      />

        <div>
          <TopButtons />
        </div>
        
        <Card className="mt-3">
          <CardBody>
            <div style={{ display: 'flex', borderBottom: '1px solid #dee2e6', marginBottom: '20px' }}>
              <LeaveTypeTab
                type="Sick Leave"
                count={leaveData.sick.length}
                isActive={activeTab === 'sick'}
                onClick={() => setActiveTab('sick')}
              />
              <LeaveTypeTab
                type="Casual Leave"
                count={leaveData.casual.length}
                isActive={activeTab === 'casual'}
                onClick={() => setActiveTab('casual')}
              />
            </div>
            
            {renderLeaveTable()}

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

        {/* Update form */}
        {isUpdateModalOpen && (
          <UpdateAvailableLeave
            isOpen={isUpdateModalOpen}
            toggle={toggleUpdateModal}
            // leaveType={selectedLeaveType}
            data={updateData}
          />
        )}

        {/* For remove */}
        <WarningComponent
          open={isWarningOpen}
          onClose={handleCloseWarning}
          onConfirm={handleConfirmDelete}
          message="Are you sure you want to delete this?"
          confirmText="Confirm"
          cancelText="Cancel"
        />

      </Container>
  )
}

export default AssignedLeave