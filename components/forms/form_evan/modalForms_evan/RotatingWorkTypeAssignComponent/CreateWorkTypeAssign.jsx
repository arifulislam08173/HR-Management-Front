import React, { useState } from "react";
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import { FiX } from "react-icons/fi";
import { MultiSelect } from "react-multi-select-component";

const CreateWorkTypeAssign = ({ isOpen, toggle }) => {
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [rotateAfterDay, setRotateAfterDay] = useState("");

  // Sample employee data
  const employeeOptions = [
    { label: "Abigail Roberts (#PEP15)", value: "pep15" },
    { label: "Aiden Murphy (#PEP40)", value: "pep40" },
    { label: "Alice Foster (#PEP69)", value: "pep69" },
  ];

  const modalStyles = {
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
      fontWeight: "600",
      fontSize: "0.95rem",
      marginBottom: "8px",
      display: "block",
    },
    required: {
      color: "#dc3545",
      marginLeft: "4px",
    },
    input: {
      borderRadius: "4px",
      border: "1px solid #ced4da",
      padding: "0.375rem 0.75rem",
    },
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <div style={modalStyles.form}>
        <button
          onClick={toggle}
          style={modalStyles.closeButton}
          aria-label="Close"
        >
          <FiX size={24} />
        </button>
        <h5 style={modalStyles.title}>Rotating Work Type Assign</h5>
        <hr />

        <Form className="mt-4">
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={modalStyles.label}>
                  Employees
                  <span style={modalStyles.required}>*</span>
                </Label>
                <MultiSelect
                  options={employeeOptions}
                  value={selectedEmployees}
                  onChange={setSelectedEmployees}
                  labelledBy="Select employees"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={modalStyles.label}>
                  Rotating Work Type
                  <span style={modalStyles.required}>*</span>
                </Label>
                <Input type="select" style={modalStyles.input}>
                  <option value="">---------</option>
                  <option value="wfh">WFH to WFO</option>
                  <option value="wfo">WFO to WFH</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={modalStyles.label}>
                  Start Date
                  <span style={modalStyles.required}>*</span>
                </Label>
                <Input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  style={modalStyles.input}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={modalStyles.label}>
                  Based on
                  <span style={modalStyles.required}>*</span>
                </Label>
                <Input type="select" style={modalStyles.input}>
                  <option value="after">After</option>
                  <option value="weekend">Weekend</option>
                  <option value="monthly">Monthly</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={modalStyles.label}>
                  Rotate After Day
                  <span style={modalStyles.required}>*</span>
                </Label>
                <Input
                  type="number"
                  value={rotateAfterDay}
                  onChange={(e) => setRotateAfterDay(e.target.value)}
                  placeholder="Enter number of days"
                  style={modalStyles.input}
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
      </div>
    </Modal>
  )
}

export default CreateWorkTypeAssign
