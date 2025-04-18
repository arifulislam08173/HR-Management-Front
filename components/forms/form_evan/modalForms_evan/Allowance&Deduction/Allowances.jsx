import React, { useState } from 'react'
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


const Allowances = ({ isOpen, toggle}) => {
    // const today = new Date().toISOString().split("T")[0];
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        amount: "",
    })

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
      };


  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalBody style={styles.modalContent}>
        <Container fluid>
          <div style={styles.header}>
            <h5 style={styles.title}>Allowances</h5>
            <button
              onClick={toggle}
              style={styles.closeButton}
              aria-label="Close"
            >
              <FiX size={24} />
            </button>
          </div>
          <hr />

          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={12}>
                <FormGroup style={styles.formGroup}>
                  <Label style={styles.label}>
                    Title
                    {/* <span style={styles.required}>*</span> */}
                  </Label>
                  <Input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    style={styles.input}
                  >
                  </Input>
                </FormGroup>
              </Col>

            

              <Col xs={12}>
                <FormGroup style={styles.formGroup}>
                  <Label style={styles.label}>
                    Date
                    {/* <span style={styles.required}>*</span> */}
                  </Label>
                  <Input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </FormGroup>
              </Col>

              <Col xs={12}>
                <FormGroup style={styles.formGroup}>
                  <Label style={styles.label}>
                    Amount
                    {/* <span style={styles.required}>*</span> */}
                  </Label>
                  <Input
                    type="number"
                    name="amount"
                    placeholder="Amount"
                    value={formData.amount}
                    onChange={handleChange}
                    style={styles.input}
                  >
                  </Input>
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
                Add
              </Button>
            </div>
          </Form>
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default Allowances
