import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Form, FormGroup, Label, Input, Button, Row, Col } from "reactstrap";
import { FiX } from "react-icons/fi";

const AssetReturnForm = ({ open, onClose }) => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    returnStatus: "",
    returnDate: today,
    returnCondition: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      images: Array.from(e.target.files),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose();
  };

  const styles = {
    dialog: {
      "& .MuiDialog-paper": {
        width: "90%",
        maxWidth: "800px",
        margin: "20px",
      },
    },
    form: {
      padding: "20px",
    },
    textarea: {
      width: "100%",
      minHeight: "100px",
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      resize: "vertical",
    },
    buttonContainer: {
      display: "flex",
      gap: "10px",
      marginTop: "20px",
    },
    button: {
      flex: 1,
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontWeight: "500",
    },
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      sx={styles.dialog}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Asset Return Form
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}
        >
          <FiX />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label>Return Status</Label>
                <Input
                  type="select"
                  name="returnStatus"
                  value={formData.returnStatus}
                  onChange={handleChange}
                >
                  <option value="">-----------</option>
                  <option value="healthy">Healthy</option>
                  <option value="majorDamaged">Major Damaged</option>
                  <option value="minorDamaged">Minor Damaged</option>
                  <option value="Needs Repair">Needs Repair</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label>Return Date</Label>
                <Input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="mt-3">
            <Label>Return Condition</Label>
            <Input
              type="textarea"
              name="returnCondition"
              value={formData.returnCondition}
              onChange={handleChange}
              style={styles.textarea}
              placeholder="Enter return condition details..."
            />
          </FormGroup>

          <FormGroup className="mt-3">
            <Label>Return Condition Images</Label>
            <Input
              type="file"
              multiple
              accept="image/*"
              onChange={handleFileChange}
            />
          </FormGroup>

          <div style={styles.buttonContainer}>
            <Button
              type="button"
              color="primary"
              style={styles.button}
            >
              Add Report
            </Button>
            <Button
              type="button"
              color="secondary"
              style={styles.button}
            >
              Add Fine
            </Button>
            <Button
              type="submit"
              color="danger"
              style={styles.button}
            >
              Save
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AssetReturnForm;