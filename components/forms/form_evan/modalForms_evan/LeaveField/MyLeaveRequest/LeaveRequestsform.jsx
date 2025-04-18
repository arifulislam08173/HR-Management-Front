import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { FiX } from "react-icons/fi";

const LeaveRequestsform = ({ isOpen, toggle, leaveType, data }) => {
    const today = new Date().toISOString().split("T")[0];
    const [formData, setFormData] = useState({
      leaveType: leaveType || "",
      startDate: today,
      startDateBreakdown: "",
      endDate: today,
      endDateBreakdown: "",
      attachment: "",
      description: "",
    });
  
    useEffect(() => {
      if (data) {
        setFormData({
          leaveType: data.leaveType || "",
          startDate: data.startDate || today,
          startDateBreakdown: data.startDateBreakdown || "",
          endDate: data.endDate || today,
          endDateBreakdown: data.endDateBreakdown || "",
          attachment: data.attachment || "",
          description: data.description || "",
        });
      } else if (leaveType) {
        setFormData((prevData) => ({ ...prevData, leaveType }));
      }
    }, [data, leaveType]);
  
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
              <h5 style={styles.title}>Leave Request</h5>
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
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Leave Type
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="select"
                      name="leaveType"
                      value={formData.leaveType}
                      onChange={handleChange}
                      style={styles.input}
                    >
                      <option value={leaveType}>{leaveType}</option>
  
                      {/* {leaveType && <option value={leaveType}>{leaveType}</option>} */}
                      {/* <option value="">Select Leave Type</option>
                      <option value="Sick Leave">Sick Leave</option>
                      <option value="Casual Leave">Casual Leave</option> */}
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
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
  
              <Row>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Start Date Breakdown
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="select"
                      name="startDateBreakdown"
                      value={formData.startDateBreakdown}
                      onChange={handleChange}
                      style={styles.input}
                    >
                      <option value="fullDay">Full Day</option>
                      <option value="firsthalfDay">First Half</option>
                      <option value="secondhalfDay">Second Half</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      End date
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="date"
                      name="endDate"
                      value={formData.endDate}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </FormGroup>
                </Col>
              </Row>
  
              <Row>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      End Date Breakdown
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="select"
                      name="endDateBreakdown"
                      value={formData.endDateBreakdown}
                      onChange={handleChange}
                      style={styles.input}
                    >
                      <option value="fullDay">Full Day</option>
                      <option value="firsthalfDay">First Half</option>
                      <option value="secondhalfDay">Second Half</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>Attachment</Label>
                    <div style={styles.fileInput}>
                      <Input
                        type="file"
                        name="attachment"
                        id="attachment"
                        onChange={handleChange}
                        hidden
                      />
                      <Label for="attachment" style={styles.chooseFileBtn}>
                        Choose File
                      </Label>
                      <span>No file chosen</span>
                    </div>
                  </FormGroup>
                </Col>
              </Row>
  
              <Row>
                <Col xs={12}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Description
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="textarea"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      style={{ ...styles.input, ...styles.textarea }}
                      placeholder="Description"
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

export default LeaveRequestsform
