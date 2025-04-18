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

const UpdateAvailableLeave = ({ isOpen, toggle, data }) => {
    const [formData, setFormData] = useState({
        availableDays: "",
        carryForwardDays: "",

    });
  
    useEffect(() => {
      if (data) {
        setFormData({
          availableDays: data.availableDays,
          carryForwardDays:  data.carryForwardDays,
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
                <Col md={12}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Available Days
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="number"
                      name="availableDays"
                      value={formData.availableDays}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </FormGroup>
                </Col>
              </Row>
  
              <Row>
                <Col md={12}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Carryforward Days
                      <span style={styles.required}>*</span>
                    </Label>
                    <Input
                      type="number"
                      name="carryForwardDays"
                      value={formData.carryForwardDays}
                      onChange={handleChange}
                      style={styles.input}
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

export default UpdateAvailableLeave