import React, { useState } from "react";
import {
  Modal,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
import { FiX } from "react-icons/fi";
import Switch from "@mui/material/Switch";
import { MultiSelect } from "react-multi-select-component";


const AddAttendanceComponent = ({ isOpen, toggle }) => {
  const [selectedEmployees, setSelectedEmployees] = useState([]);


  const employees = [
    { label: "Abigail Roberts (#PEP15)", value: "pep15" },
    { label: "Aiden Murphy (#PEP40)", value: "pep40" },
    { label: "Alice Foster (#PEP69)", value: "pep69" },
  ];

  const [formData, setFormData] = useState({
    employees: [],
    attendanceDate: "",
    shift: "",
    workType: "",
    checkInDate: "",
    checkIn: "",
    checkOutDate: "",
    checkOut: "",
    workedHours: "00:00",
    minimumHour: "00:00",
    attendanceValidated: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggle();
  };

  const handleSwitchChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      attendanceValidated: e.target.checked,
    }));
  };

  const styles = {
    modal: {
      maxWidth: "800px",
      margin: "auto",
    },
    header: {
      borderBottom: "none",
      paddingBottom: "0",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "500",
      color: "#333",
      marginBottom: "20px",
    },
    closeButton: {
      background: "none",
      border: "none",
      padding: "0",
      position: "absolute",
      right: "20px",
      top: "20px",
      cursor: "pointer",
    },
    form: {
      padding: "20px",
    },
    label: {
      fontWeight: "500",
      fontSize: "0.9rem",
      marginBottom: "8px",
      display: "block",
    },
    input: {
      border: "1px solid #ced4da",
      borderRadius: "4px",
      padding: "6px 12px",
      width: "100%",
    },
    required: {
      color: "red",
      marginLeft: "3px",
    },
    saveButton: {
      backgroundColor: "#e54f37",
      border: "none",
      borderRadius: "4px",
      padding: "8px 16px",
    },
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <div style={styles.form}>
        <button onClick={toggle} style={styles.closeButton}>
          <FiX size={20} />
        </button>
        <h5 style={styles.title}>Add Attendances</h5>
        <hr />

        <Form onSubmit={handleSubmit} style={styles.form}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Employees <span style={styles.required}>*</span>
                </Label>
                <MultiSelect
                  options={employees}
                  value={selectedEmployees}
                  onChange={setSelectedEmployees}
                  labelledBy="Select employees"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Attendance date <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="date"
                  name="attendanceDate"
                  value={formData.attendanceDate}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Shift <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="select"
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">---Choose Shift---</option>
                  <option value="morning">Morning Shift</option>
                  <option value="evening">Evening Shift</option>
                  <option value="night">Night Shift</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>Work Type</Label>
                <Input
                  type="select"
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">---Choose Work Type---</option>
                  <option value="regular">Regular</option>
                  <option value="overtime">Overtime</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Check-In Date <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="date"
                  name="checkInDate"
                  value={formData.checkInDate}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Check-In <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="time"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Check-Out Date <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="date"
                  name="checkOutDate"
                  value={formData.checkOutDate}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Check-Out <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="time"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Worked Hours <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="text"
                  name="workedHours"
                  value={formData.workedHours}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Minimum hour <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="text"
                  name="minimumHour"
                  value={formData.minimumHour}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="mt-3">
            <Label style={{ ...styles.label, display: "block" }}>
              Attendance validated
            </Label>
            <Switch
              checked={formData.attendanceValidated}
              onChange={handleSwitchChange}
              color="secondary"
              inputProps={{ "aria-label": "secondary switch" }}
            />
          </FormGroup>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{
                backgroundColor: "#e54f37",
                border: "#e54f37",
                padding: "10px 20px",
                borderRadius: "5px",
                fontWeight: "400",
                marginTop: "20px",
                transition: "background-color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#c44232")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#e54f37")
              }
            >
              Save
            </Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
};

export default AddAttendanceComponent;
