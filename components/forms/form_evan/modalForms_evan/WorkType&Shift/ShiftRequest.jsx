import React, { useState } from "react";
import {
  Modal,
  ModalHeader,
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

const ShiftRequest = ({ isOpen, toggle }) => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    employee: "Adam Luis",
    requestingShift: "",
    requestedDate: today,
    requestedTill: today,
    reallocateEmployee: "",
    description: "",
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

  const modalStyles = {
    header: {
      borderBottom: "none",
      paddingBottom: "0",
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
    title: {
      fontSize: "1.25rem",
      fontWeight: "500",
      color: "#333",
      marginBottom: "20px",
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

        <h5 style={modalStyles.title}>Shift Request</h5>
        <hr />

        <Form onSubmit={handleSubmit} className="mt-4">
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={modalStyles.label}>
                  Employee
                  <span style={modalStyles.required}>*</span>
                </Label>
                <Input
                  type="select"
                  name="employee"
                  value={formData.employee}
                  onChange={handleChange}
                  style={modalStyles.input}
                >
                  <option>Adam Luis</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={modalStyles.label}>
                  Requesting Shift
                  <span style={modalStyles.required}>*</span>
                </Label>
                <Input
                  type="select"
                  name="requestingShift"
                  value={formData.requestingShift}
                  onChange={handleChange}
                  style={modalStyles.input}
                >
                  <option value="">---Choose Requesting shift---</option>
                  <option value="regular">Regular Shift</option>
                  <option value="night">Night Shift</option>
                  <option value="morning">Morning Shift</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <FormGroup>
                <Label style={modalStyles.label}>
                  Requested Date
                  <span style={modalStyles.required}>*</span>
                </Label>
                <Input
                  type="date"
                  name="requestedDate"
                  value={formData.requestedDate}
                  onChange={handleChange}
                  style={modalStyles.input}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={modalStyles.label}>
                Reallocate Employee
                  <span style={modalStyles.required}>*</span>
                </Label>
                <Input
                  type="select"
                  name="reallocateEmployee"
                  value={formData.reallocateEmployee}
                  onChange={handleChange}
                  style={modalStyles.input}
                >
                  <option value="">---Choose Reallocate Employee---</option>
                  <option value="regular">Adam Luis</option>
                </Input>
              </FormGroup>
            </Col>

          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label style={modalStyles.label}>Requested Till</Label>
                <Input
                  type="date"
                  name="requestedTill"
                  value={formData.requestedTill}
                  onChange={handleChange}
                  style={modalStyles.input}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="mt-3">
            <Label style={modalStyles.label}>
              Description
              <span style={modalStyles.required}>*</span>
            </Label>
            <Input
              type="textarea"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows="4"
              style={modalStyles.input}
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

export default ShiftRequest;
