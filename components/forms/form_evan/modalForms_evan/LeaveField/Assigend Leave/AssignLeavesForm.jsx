import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
  Container,
} from "reactstrap";
// import { MultiSelect } from "react-multi-select-component";
import Select from 'react-select';
import Switch from "@mui/material/Switch";
import { FiInfo } from "react-icons/fi";
import { FiX } from "react-icons/fi";


const AssignLeavesForm = ({ isOpen, toggle }) => {
    const [formData, setFormData] = useState({
      leaveType: "",
      employee: "",
    });

const [assignedEmployees, setAssignedEmployees] = useState([]);
const [leaveTypes, setLeaveTypess] = useState([]);


    

    const employeeOptions = [
        { value: "Adam Luis", label: "Adam Luis" },
        { value: "K.R. Rakshan", label: "K.R. Rakshan" },
        { value: "Others", label: "Others" },
      ];

      const leaveOptions = [
        { value: "Sick Leave", label: "Sick Leave" },
        { value: "Casual Leave", label: "Casual Leave" },
        { value: "Maternity Leave", label: "Maternity Leave" },
        { value: "Compensatory Leave Type", label: "Compensatory Leave Type" },
      ];

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
  
    const styles = {
      modalContent: {
        padding: "20px",
      },
      header: {
        position: "relative",
        marginBottom: "20px",
      },
      closeButton: {
        position: "absolute",
        right: "0",
        top: "0",
        background: "none",
        border: "none",
        cursor: "pointer",
      },
      title: {
        fontSize: "1.25rem",
        fontWeight: "500",
        color: "#333",
        marginBottom: "20px",
      },
      formGroup: {
        marginBottom: "20px",
      },
      label: {
        fontWeight: "500",
        fontSize: "0.9rem",
        marginBottom: "8px",
        display: "block",
      },
      required: {
        color: "#dc3545",
        marginLeft: "4px",
      },
      input: {
        width: "100%",
        padding: "0.5rem",
        borderRadius: "4px",
        border: "1px solid #ced4da",
        fontSize: "0.9rem",
      },
      fileInput: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
      },
      chooseFileBtn: {
        padding: "6px 12px",
        backgroundColor: "#fff",
        border: "1px solid #ced4da",
        borderRadius: "4px",
        cursor: "pointer",
        fontSize: "0.9rem",
      },
      textarea: {
        minHeight: "100px",
        resize: "vertical",
      },
    };
  
    return (
      <Modal isOpen={isOpen} toggle={toggle} size="lg">
        <ModalBody style={styles.modalContent}>
          <Container fluid>
            <div style={styles.header}>
              <h5 style={styles.title}>Assign Leaves</h5>
              <button
                onClick={() => toggle()}
                style={styles.closeButton}
                aria-label="Close"
              >
                <FiX size={24} />
              </button>
            </div>
            <hr />
  
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={12}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Leave Type
                    </Label>
                    <Select
                    isMulti
                    options={leaveOptions}
                    value={leaveTypes}
                    onChange={(selected) => setLeaveTypess(selected)}
                    placeholder="Select Leave Type"
                  />
                  </FormGroup>
                </Col>
              </Row>
  
              <Row>
                <Col md={12}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Employee
                    </Label>
                    <Select
                    isMulti
                    options={employeeOptions}
                    value={assignedEmployees}
                    onChange={(selected) => setAssignedEmployees(selected)}
                    placeholder="Select Employees"
                  />
                  </FormGroup>
                </Col>
              </Row>
  
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
          </Container>
        </ModalBody>
      </Modal>
  )
}

export default AssignLeavesForm