import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { FiX } from "react-icons/fi";
import { MultiSelect } from "react-multi-select-component";


const DuplicateWorkTypeAssign = ({ isOpen, toggle, data }) => {
  const [formData, setFormData] = useState({
    selectedEmployees: [],
    rotatingWorktype: "",
    startDate: "",
    basedOn: "",
    rotateAfterDay: "3",
  });

  const [employees, setEmployees] = useState([
    { label: "Charlotte White (#PEP19)", value: "PEP19" },
    // Add more default employees here if needed
  ]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (data) {
      // Create an option for the current employee
      const currentEmployee = {
        label: `${data.employee.name}`,
        value: data.employee.id || data.employee.name
      };

      // Set the form data with the current employee pre-selected
      setFormData({
        selectedEmployees: [currentEmployee],
        rotatingWorktype: data.title || "WFH to WFO",
        startDate: data.startDate ? formatDate(data.startDate) : "",
        basedOn: data.basedOn || "Monthly",
        rotateAfterDay: data.rotateAfterDay || "1",
      });

      // Update employees list to include current employee if not already present
      setEmployees(prevEmployees => {
        const employeeExists = prevEmployees.some(emp => emp.value === currentEmployee.value);
        if (!employeeExists) {
          return [currentEmployee, ...prevEmployees];
        }
        return prevEmployees;
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

  const handleEmployeeChange = (selected) => {
    setFormData(prev => ({
      ...prev,
      selectedEmployees: selected
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedEmployeeNames = formData.selectedEmployees.map(emp => emp.label);
    console.log("Selected Employees:", selectedEmployeeNames);
    console.log("Complete Form Data:", formData);
    toggle();
  };

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
    multiSelect: {
      control: (provided) => ({
        ...provided,
        borderRadius: "4px",
        border: "1px solid #ced4da",
        minHeight: "38px",
      }),
    },
  };

  return (
    <Dialog open={isOpen} onClose={toggle} sx={styles.dialog}>
      <DialogTitle sx={{ position: "relative" }}>
        <span style={styles.title}>Rotating Shift Assign</span>
        <IconButton aria-label="close" onClick={toggle} sx={styles.closeButton}>
          <FiX />
        </IconButton>
        <hr />
      </DialogTitle>

      <DialogContent>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Employees
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <MultiSelect
                  options={employees}
                  value={formData.selectedEmployees}
                  onChange={handleEmployeeChange}
                  labelledBy="Select employees"
                  styles={styles.multiSelect}
                  hasSelectAll={true}
                  isCreatable={true}
                  closeOnSelect={false}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Rotating Work Type
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="select"
                  name="rotatingWorktype"
                  value={formData.rotatingWorktype}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value={formData.rotatingWorktype} disabled>
                    {formData.rotatingWorktype}
                  </option>
                  {["WFO to WFH", "WFH to WFO"]
                    .filter((option) => option !== formData.rotatingWorktype)
                    .map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Start Date
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Based On
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="select"
                  name="basedOn"
                  value={formData.basedOn}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value={formData.basedOn} disabled>
                    {formData.basedOn}
                  </option>
                  {["After", "Weekend", "Monthly"]
                    .filter((option) => option !== formData.basedOn)
                    .map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <FormGroup>
            <Label style={{ fontWeight: "bold" }}>Rotate after day</Label>
            <Input
                  type="number"
                  name="rotateAfterDay"
                  value={formData.rotateAfterDay}
                  onChange={handleChange}
                  placeholder="Enter number of days"
                  style={styles.input}
                />
            {/* <Input
              type="select"
              name="rotateEvery"
              value={formData.rotateEvery}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">{formData.rotateEvery}</option>
              <option value="">------</option>
              {[...Array(31).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
              <option value="Last day">Last day</option>
            </Input> */}
          </FormGroup>

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
  )
}

export default DuplicateWorkTypeAssign
