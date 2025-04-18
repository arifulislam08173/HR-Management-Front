import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton, Switch } from "@mui/material";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { FiX } from "react-icons/fi";

const DuplicateShiftRequest = ({ isOpen, toggle, data }) => {
    const [formData, setFormData] = useState({
        employee: "",
        requestedShift: "",
        requestedDate: "",
        requestedTill: "",
        description: "",
        isPermanent: false,
      });
    
      useEffect(() => {
        if (data) {
          setFormData({
            employee: data.employee.name,
            requestedShift: data.requestedShift,
            requestedDate: data.requestedDate,
            requestedTill: data.requestedTill || "",
            description: data.description+" (copy)",
            isPermanent: data.isPermanent || false,
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
          marginTop: "20px",
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
            <span style={styles.title}>Duplicate Shift Request</span>
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
                    <Label>
                      Employee<span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
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
                <Col md={6}>
                  <FormGroup>
                    <Label>
                      Requesting Shift<span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                    </Label>
                    <Input
                      type="select"
                      name="requestedShift"
                      value={formData.requestedShift}
                      onChange={handleChange}
                      style={styles.input}
                    >
                      <option value="">---Choose Requesting Shift---</option>
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
                    <Label>
                      Requested Date<span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
                    </Label>
                    <Input
                      type="date"
                      name="requestedDate"
                      value={formData.requestedDate}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </FormGroup>
                </Col>
                {!formData.isPermanent && (
                  <Col md={6}>
                    <FormGroup>
                      <Label>Requested Till</Label>
                      <Input
                        type="date"
                        name="requestedTill"
                        value={formData.requestedTill}
                        onChange={handleChange}
                        style={styles.input}
                      />
                    </FormGroup>
                  </Col>
                )}
              </Row>
    
              <FormGroup className="mt-3">
                <Label>
                  Description<span style={{ color: "#dc3545", marginLeft: "4px" }}>*</span>
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
    
              <FormGroup className="mt-3">
                <Label style={{ marginBottom: "3px" }}>Permanent Request</Label>
                <Switch
                  checked={formData.isPermanent}
                  onChange={handleSwitchChange}
                  color="secondary"
                  inputProps={{ "aria-label": "secondary switch" }}
                />
              </FormGroup>
    
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  style={styles.button}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor)}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = styles.button.backgroundColor)}
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

export default DuplicateShiftRequest
