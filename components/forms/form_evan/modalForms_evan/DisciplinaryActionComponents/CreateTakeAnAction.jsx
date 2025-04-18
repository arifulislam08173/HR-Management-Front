import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { FiX } from "react-icons/fi";
import { MultiSelect } from "react-multi-select-component";
import CreateNewActionType from "./CreateNewActionType";

const CreateTakeAnAction = ({ isOpen, toggle }) => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    employees: [],
    action: "",
    description: "",
    startDate: today,
    attachment: null,
  });

  const [employees] = useState([
    { label: "Adam Luis", value: "adam" },
    { label: "John Doe", value: "john" },
    { label: "Robert walker", value: "robert" },
    // Add more employees as needed
  ]);

  const [showNewActionType, setShowNewActionType] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "action" && value === "new") {
      setShowNewActionType(true);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleNewActionTypeClose = () => {
    setShowNewActionType(false);
    setFormData((prev) => ({
      ...prev,
      action: "",
    }));
  };

  const handleEmployeeChange = (selected) => {
    setFormData((prev) => ({
      ...prev,
      employees: selected,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      attachment: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggle();
  };

  const styles = {
    dialog: {
      "& .MuiDialog-paper": {
        width: "90%",
        maxWidth: "800px",
        borderRadius: "10px",
        padding: "20px",
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
      marginTop: "20px",
    },
    label: {
      fontWeight: "500",
      fontSize: "0.9rem",
      marginBottom: "8px",
    },
    input: {
      borderRadius: "4px",
      border: "1px solid #ced4da",
      padding: "0.375rem 0.75rem",
    },
    required: {
      color: "#dc3545",
      marginLeft: "4px",
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
        <span style={styles.title}>Take An Action</span>
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
                <Label style={styles.label}>
                  Employees
                  <span style={styles.required}>*</span>
                </Label>
                <MultiSelect
                  options={employees}
                  value={formData.employees}
                  onChange={handleEmployeeChange}
                  labelledBy="Select employees"
                  styles={styles.multiSelect}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Action
                  <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="select"
                  name="action"
                  value={formData.action}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">---Choose Action---</option>
                  <option value="warning">Warning</option>
                  <option value="new">Create New Action Type</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Description
                  <span style={styles.required}>*</span>
                </Label>
                <Input
                  type="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Description"
                  rows="4"
                  style={styles.input}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>
                  Start date
                  <span style={styles.required}>*</span>
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

          <Row className="mt-3">
            <Col md={12}>
              <FormGroup>
                <Label style={styles.label}>Attachment</Label>
                <Input
                  type="file"
                  name="attachment"
                  onChange={handleFileChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
          </Row>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={styles.button}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#c44232")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#e54f37")
              }
              type="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      </DialogContent>

      {showNewActionType && (
        <CreateNewActionType
          isOpen={showNewActionType}
          toggle={handleNewActionTypeClose}
        />
      )}
    </Dialog>
  );
};

export default CreateTakeAnAction;
