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
} from "reactstrap";
import { FiX } from "react-icons/fi";

const RedeemBonusPoint = ({isOpen, toggle}) => {
    const [formData, setFormData] = useState({
        point: "25",
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
        toggle(); // Close modal after submit
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
          fontWeight: "600",
          fontSize: "1rem",
          marginBottom: "8px",
          display: "block",
        },
        input: {
          borderRadius: "4px",
          border: "1px solid #ced4da",
          padding: "0.4rem 0.8rem",
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

        <h5 style={modalStyles.title}>Redeem Bonus Points</h5>
        <hr />

        <Form onSubmit={handleSubmit} className="mt-4">
          <Row>
            <Col md={12}>
              <FormGroup>
                <Label style={modalStyles.label}>
                  Points
                </Label>
                <Input
                  type="number"
                  name="point"
                  value={formData.point}
                  onChange={handleChange}
                  style={modalStyles.input}
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
      </div>
    </Modal>
  )
}

export default RedeemBonusPoint
