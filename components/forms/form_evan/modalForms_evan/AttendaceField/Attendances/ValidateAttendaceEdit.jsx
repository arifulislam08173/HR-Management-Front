import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Switch,
} from "@mui/material";
import { FiX } from "react-icons/fi";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";

const styles = {
  dialog: {
    "& .MuiDialog-paper": {
      padding: "20px",
      width: "90%",
      maxWidth: "800px",
      borderRadius: "10px",
    },
  },
  closeButton: {
    position: "absolute",
    right: 8,
    top: 8,
  },
  title: {
    fontSize: "1.25rem",
    fontWeight: "500",
    color: "#333",
  },
  form: {
    marginTop: "5px",
  },
  input: {
    borderRadius: "4px",
    border: "1px solid #ced4da",
    padding: "0.375rem 0.75rem",
  },
  button: {
    backgroundColor: "#e54f37",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "400",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#c44232",
  },
};

const ValidateAttendaceEdit = ({ isOpen, toggle, data }) => {
  const [formData, setFormData] = useState({
    employee: "",
    date: "",
    day: data.day,
    checkIn: "",
    checkOut: "",
    inDate: "",
    outDate: "",
    shift: "",
    workType: "",
    minHour: "",
    atWork: "",
    pendingHour: "",
    overTime: "",
    approveOvertime: false,
    attendanceValidated: false,
  });

  const formatTime = (timeString) => {
    if (!timeString) return "";
    const date = new Date(timeString);
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (data) {
      setFormData({
        // id: data.id,
        // employee: `${data.employee.name} ${data.employee.code}`,
        employee: data.employee.name,
        date: data.date ? formatDate(data.date) : "",
        day: data.day,
        checkIn: formatTime(data.checkIn),
        checkOut: formatTime(data.checkOut),
        inDate: data.InDate ? formatDate(data.InDate) : "",
        outDate: data.OutDate ? formatDate(data.OutDate) : "",
        shift: data.Shift,
        workType: data.workType,
        minHour: data.minHour,
        atWork: data.atWork,
        pendingHour: data.pendingHour,
        overTime: data.overTime,
        approveOvertime: data.approveOvertime || false,
        attendanceValidated: data.attendanceValidated || false,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwitchChange = (e, fieldName) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Attendance Data:", formData);
    toggle();
  };

  return (
    <Dialog open={isOpen} onClose={toggle} sx={styles.dialog}>
      <DialogTitle sx={{ position: "relative" }}>
        <span style={styles.title}>Edit Validate Attendance</span>
        <IconButton aria-label="close" onClick={toggle} sx={styles.closeButton}>
          <FiX />
        </IconButton>
        <hr />
      </DialogTitle>

      <DialogContent>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Employee{" "}
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="select"
                  value={formData.employee || ""}
                  name="employee"
                  onChange={handleChange}
                >
                  <option value={formData.employee}>{formData.employee}</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Attendance Date
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="date"
                  value={formData.date || ""}
                  name="date"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Shift
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="select"
                  value={formData.shift || ""}
                  name="shift"
                  onChange={handleChange}
                  >
                  <option value="">---Choose Work Type---</option>
                  <option value="Regular Shift">Regular Shift</option>
                  <option value="Night Shift">Night Shift</option>
                  <option value="Morning Shift">Morning Shift</option>
                  </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>Work Type</Label>
                <Input
                  type="select"
                  name="workType"
                  value={formData.workType || ""}
                  onChange={handleChange}
                >
                  <option value="">---Choose Work Type---</option>
                  <option value="None">None</option>
                  <option value="Regular">Regular</option>
                  <option value="Overtime">Overtime</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Check-In Date
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="date"
                  value={formData.inDate || ""}
                  name="inDate"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Check-In
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="time"
                  name="checkIn"
                  value={formData.checkIn || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Check-Out Date
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="date"
                  value={formData.outDate}
                  name="outDate"
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Check-Out
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="time"
                  name="checkOut"
                  value={formData.checkOut || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Worked Hours
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="atWork"
                  value={formData.atWork || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Minimum Hours
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="minHour"
                  value={formData.minHour || ""}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold", display: "block" }}>
                  Approve overtime?
                </Label>
                <Switch
                  checked={formData.approveOvertime || false}
                  onChange={(e) => handleSwitchChange(e, "approveOvertime")}
                  color="secondary"
                  inputProps={{ "aria-label": "approve-overtime-switch" }}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold", display: "block" }}>
                  Validate Attendance?
                </Label>
                <Switch
                  checked={formData.attendanceValidated || false}
                  onChange={(e) => handleSwitchChange(e, "attendanceValidated")}
                  color="secondary"
                  inputProps={{ "aria-label": "attendance-validated-switch" }}
                />
              </FormGroup>
            </Col>
          </Row>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={styles.button}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.button.backgroundColor)
              }
              type="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ValidateAttendaceEdit;
