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
import { FiEdit2, FiTrash2 } from "react-icons/fi";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { MdDone } from "react-icons/md";
import OTAttendanceDetails from "../../modalForms_evan/AttendaceField/Attendances/OTAttendanceDetails";
import OTAttendancesEdit from "../../modalForms_evan/AttendaceField/Attendances/OTAttendancesEdit";
import WarningComponent from "../../modalForms_evan/Warning Component/WarningComponent";

const styles = {
  tableCell: {
    padding: "12px 16px",
    whiteSpace: "nowrap",
    verticalAlign: "middle",
    textAlign: "center",
  },
  pageWrapper: {
    minWidth: "1024px",
    maxWidth: "100%",
    padding: "20px",
    flex: 1,
  },
};

const OTAttendances = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const [selectedRowData, setSelectedRowData] = useState(null);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);

  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [updateData, setUpdateData] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

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

  const otData = [
    {
      id: 1,
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
      workType: "Overtime",
      minHour: "08:15",
      atWork: "120:22",
      pendingHour: "00:00",
      overTime: "04:00",
    },
    {
      id: 2,
      employee: {
        name: "Adam Luis",
        code: "(#PEP48)",
      },
      date: "Aug. 21, 2024",
      day: "Wednesday",
      checkIn: "03:48 PM",
      InDate: "Aug. 21, 2024",
      checkOut: "03:10 PM",
      OutDate: "Aug. 26, 2024",
      Shift: "Regular Shift",
      workType: "Overtime",
      minHour: "08:15",
      atWork: "120:22",
      pendingHour: "00:00",
      overTime: "04:00",
    },
  ];

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalPages = Math.ceil(otData.length / employeesPerPage);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = otData.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(otData.map((item) => item.id));
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
    } else if (direction === "next" && selectedRowData < otData.length - 1) {
      setSelectedRowData(selectedRowData + 1);
    }
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

  return (
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
                      backgroundColor: "#43c655",
                      color: "#fff",
                      border: "none",
                      borderRadius: "4px",
                      padding: "5px 40px",
                      fontSize: "14px",
                      fontWeight: "500",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#32783c";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#43c655";
                    }}
                  >
                    <MdDone size={16} />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <div className="d-flex justify-content-end mt-3">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>

      {/* Details Modal */}
      {isDetailsModalOpen && (
        <OTAttendanceDetails
          isOpen={isDetailsModalOpen}
          toggle={toggleDetailsModal}
          data={otData[selectedRowData]}
          onNavigate={handleNavigateAsset}
          hasPrevious={selectedRowData > 0}
          hasNext={selectedRowData < otData.length - 1}
        />
      )}

      {/* Update form */}
      {isUpdateModalOpen && (
        <OTAttendancesEdit
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
        message="Are you sure you want to remove this OT Attendance?"
        confirmText="Confirm"
        cancelText="Cancel"
      />
    </div>
  );
};

export default OTAttendances;
