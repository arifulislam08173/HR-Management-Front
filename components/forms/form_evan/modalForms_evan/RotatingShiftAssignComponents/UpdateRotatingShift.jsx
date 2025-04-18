import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Switch,
} from "@mui/material";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { FiX } from "react-icons/fi";

const UpdateRotatingShift = ({ isOpen, toggle, data }) => {
  const [formData, setFormData] = useState({
    employee: "",
    title: "",
    startDate: "",
    basedOn: "",
    rotateEveryday: "1",
  });

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
        employee: data.employee.name,
        title: data.title,
        startDate: data.startDate ? formatDate(data.startDate) : "",
        basedOn: data.basedOn,
        rotateEveryday: data.rotateEveryday,
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

  const handleSwitchChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      isPermanent: e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Data:", formData);
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
  };

  return (
    <Dialog open={isOpen} onClose={toggle} sx={styles.dialog}>
      <DialogTitle sx={{ position: "relative" }}>
        <span style={styles.title}>Rotating Shift Assign Update</span>
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
                  Employee
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="text"
                  name="employee"
                  value={formData.employee}
                  style={styles.input}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={{ fontWeight: "bold" }}>
                  Rotating Shift
                  <span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                </Label>
                <Input
                  type="select"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value={formData.title} disabled>
                    {formData.title}
                  </option>
                  {/* Render other options */}
                  {["Morning to Night", "Night to Morning"]
                    .filter((option) => option !== formData.title)
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
                  value={formData.startDate || ""}
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
                  {/* Render other options */}
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
            <Label style={{ fontWeight: "bold" }}>Rotate Everyday</Label>
            <Input
              type="select"
              name="rotateEveryday"
              value={formData.rotateEveryday}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">{formData.rotateEveryday}</option>
              <option value="">------</option>

              {[...Array(31).keys()].map((num) => (
                <option key={num + 1} value={num + 1}>
                  {num + 1}
                </option>
              ))}
              <option value="Last day">Last day</option>
            </Input>
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
  );
};

export default UpdateRotatingShift;
