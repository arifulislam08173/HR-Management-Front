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
import Switch from "@mui/material/Switch";

const CreateContract = ({ isOpen, toggle }) => {
  const today = new Date().toISOString().split("T")[0];
  const [formData, setFormData] = useState({
    contract: "",
    employee: "Adam Luis",
    contractStartDate: today,
    contractEndDate: today,
    wageType: "Monthly",
    payFrequency: "Monthly",
    basicSalary: "0",
    filingStatus: "",
    department: "",
    jobPosition: "",
    jobRole: "",
    shift: "",
    workType: "",
    noticePeriod: "30",
    contractDocument: null,
    calculateDailyLeaveAmount: false,
    deductFromBasicPay: false,
    note: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSwitchChange = (name) => (e) => {
    setFormData((prev) => ({
      ...prev,
      [name]: e.target.checked,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      contractDocument: e.target.files[0],
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
        <div style={styles.header}>
          <h5 style={styles.title}>Contract</h5>
          <button onClick={toggle} style={styles.closeButton} aria-label="Close">
            <FiX size={24} />
          </button>
        </div>
        <hr />

        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>
                  Contract<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="text"
                  name="contract"
                  value={formData.contract}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>
                  Employee<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="select"
                  name="employee"
                  value={formData.employee}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option>Adam Luis</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>
                  Contract start date<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="date"
                  name="contractStartDate"
                  value={formData.contractStartDate}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>Contract end date</Label>
                <Input
                  type="date"
                  name="contractEndDate"
                  value={formData.contractEndDate}
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
                  Wage Type<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="select"
                  name="wageType"
                  value={formData.wageType}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option>Monthly</option>
                  <option>Daily</option>
                  <option>Hourly</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>
                  Pay Frequency<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="select"
                  name="payFrequency"
                  value={formData.payFrequency}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option>Monthly</option>
                  <option>Weekly</option>
                  <option>Semi-Monthly</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>
                  Basic Salary<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="number"
                  name="basicSalary"
                  value={formData.basicSalary}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>Filing Status</Label>
                <Input
                  type="select"
                  name="filingStatus"
                  value={formData.filingStatus}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">---------</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>Department</Label>
                <Input
                  type="select"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">---------</option>
                  <option value="S/W Dept">S/W Dept</option>
                  <option value="Sales Dept">Sales Dept</option>
                  <option value="Marketing Dept">Marketing Dept</option>
                  <option value="Hr Dept">Hr Dept</option>
                  <option value="Finance Dept">Finance Dept</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>Job Position</Label>
                <Input
                  type="select"
                  name="jobPosition"
                  value={formData.jobPosition}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">---------</option>
                  <option value="Odoo Dev">Odoo Dev</option>
                  <option value="Django Dev">Django Dev</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>Job Role</Label>
                <Input
                  type="select"
                  name="jobRole"
                  value={formData.jobRole}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">---------</option>
                  <option value="Junior Dev">Junior Dev</option>
                  <option value="Intern">Intern</option>
                  <option value="Senior Dev">Senior Dev</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>Shift</Label>
                <Input
                  type="select"
                  name="shift"
                  value={formData.shift}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">---------</option>
                  <option value="Regular Shift">Regular Shift</option>
                  <option value="Night Shift">Night Shift</option>
                  <option value="Morning Shift">Morning Shift</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>Work Type</Label>
                <Input
                  type="select"
                  name="workType"
                  value={formData.workType}
                  onChange={handleChange}
                  style={styles.input}
                >
                  <option value="">---------</option>
                  <option value="Work Form Home">Work Form Home</option>
                  <option value="Work Form Office">Work Form Office</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Remote">Remote</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup style={styles.formGroup}>
                <Label style={styles.label}>
                  Notice Period<span style={styles.required}>*</span>
                </Label>
                <Input
                  type="number"
                  name="noticePeriod"
                  value={formData.noticePeriod}
                  onChange={handleChange}
                  style={styles.input}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
            <FormGroup style={styles.formGroup}>
            <Label style={styles.label}>Contract document</Label>
            <Input
              type="file"
              name="contractDocument"
              onChange={handleFileChange}
              style={styles.input}
            />
          </FormGroup>
            </Col>

            <Col md={6}>
            <FormGroup style={styles.formGroup}>
            <Label style={styles.label}>Deduct From Basic Pay</Label>
            <Switch
              checked={formData.deductFromBasicPay}
              onChange={handleSwitchChange("deductFromBasicPay")}
              color="secondary"
            />
          </FormGroup>
            </Col>

          </Row>

          <FormGroup style={styles.formGroup}>
            <Label style={styles.label}>Calculate Daily Leave Amount</Label>
            <Switch
              checked={formData.calculateDailyLeaveAmount}
              onChange={handleSwitchChange("calculateDailyLeaveAmount")}
              color="secondary"
            />
          </FormGroup>
          
          <FormGroup style={styles.formGroup}>
            <Label style={styles.label}>Note</Label>
            <Input
              type="textarea"
              name="note"
              value={formData.note}
              onChange={handleChange}
              style={{ ...styles.input, minHeight: "100px" }}
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
      </ModalBody>
    </Modal>
  );
};

export default CreateContract;