import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { FiX } from "react-icons/fi";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";

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
    color: "white",
  },
  buttonHover: {
    backgroundColor: "#c44232",
  },
  required: {
    color: "#dc3545",
    marginLeft: "4px",
  }
};

const EditValidateAttendanceRequest = ({ isOpen, toggle, data }) => {
  const [formData, setFormData] = useState({
    attendanceDate: "",
    shift: "",
    workType: "",
    checkInDate: "",
    checkIn: "",
    checkOutDate: "",
    checkOut: "",
    workedHours: "",
    minimumHour: "",
    requestDescription: "",
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
        attendanceDate: data.date ? formatDate(data.date) : "",
        shift: data.Shift,
        workType: data.workType,
        checkInDate: data.InDate ? formatDate(data.InDate) : "",
        checkIn: data.checkIn ? formatTime(data.checkIn) : "",
        checkOutDate: data.OutDate ? formatDate(data.OutDate) : "",
        checkOut: data.checkOut ? formatTime(data.checkOut) : "",
        workedHours: data.atWork,
        minimumHour: data.minHour,
        requestDescription: "kjk",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toggle();
  };

  return (
    <Dialog open={isOpen} onClose={toggle} sx={styles.dialog}>
      <DialogTitle sx={{ position: "relative" }}>
        <span style={styles.title}>Validate Attendances Update Request</span>
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
                  Attendance date<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="date"
                  name="attendanceDate"
                  value={formData.attendanceDate}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Shift<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="select"
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                >
                  <option value="">---Choose Work Type---</option>
                  <option value="Regular Shift">Regular Shift</option>
                  <option value="Night Shift">Night Shift</option>
                  <option value="Morning Shift">Morning Shift</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>Work Type</Label>
                <Input
                  type="select"
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                >
                  <option value="">---Choose Work Type---</option>
                  <option value="None">None</option>
                  <option value="Work Form Home">Work From Home</option>
                  <option value="Work Form Office">Work Form Office</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Check-In Date<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Check-In<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="time"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>Check-Out Date</Label>
                <Input
                  type="date"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>Check-Out</Label>
                <Input
                  type="time"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Worked Hours<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="text"
                  name="workedHours"
                  value={formData.workedHours}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Minimum hour<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="text"
                  name="minimumHour"
                  value={formData.minimumHour}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Request description<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="textarea"
                  name="requestDescription"
                  value={formData.requestDescription}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={styles.button}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
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

export default EditValidateAttendanceRequest;