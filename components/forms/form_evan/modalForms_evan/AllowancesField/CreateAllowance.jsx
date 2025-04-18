import React, { useState } from "react";
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
import Switch from "@mui/material/Switch";
import Select from "react-select";
import { FiX } from "react-icons/fi";

const CreateAllowance = ({ isOpen, toggle }) => {
  const [formData, setFormData] = useState({
    title: "",
    oneTimeDate: "",
    includeAllEmployees: false,
    specificEmployees: [],
    isTaxable: false,
    isConditionBased: false,
    isFixed: false,
    rate: "",
    basedOn: "",
    hasMaxLimit: false,
    ifChoice: "",
    ifCondition: "",
    ifAmount: "0.0",
  });

  // Sample employee options for multi-select
  const employeeOptions = [
    { value: "emp1", label: "John Doe" },
    { value: "emp2", label: "Jane Smith" },
    { value: "emp3", label: "Mike Johnson" },
    // Add more employees as needed
  ];

  const basedOnOptions = [
    { value: "basicPay", label: "Basic Pay" },
    { value: "grossPay", label: "Gross Pay" },
    // Add more options as needed
  ];

  const conditionOptions = [
    { value: "greaterThan", label: "Greater Than (>)" },
    { value: "lessThan", label: "Less Than (<)" },
    { value: "equalTo", label: "Equal To (=)" },
    // Add more conditions as needed
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSwitchChange = (name) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [name]: event.target.checked,
    }));
  };

  const handleMultiSelectChange = (selectedOptions) => {
    setFormData((prev) => ({
      ...prev,
      specificEmployees: selectedOptions,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const styles = {
    modalContent: {
      padding: "0",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "10px",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "500",
      margin: "0",
      color: "#333",
    },
    closeButton: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "5px",
      color: "#666",
    },
    container: {
      padding: "0 20px 20px",
    },
    formGroup: {
      marginBottom: "20px",
    },
    label: {
      fontWeight: "500",
      fontSize: "0.9rem",
      marginBottom: "8px",
      display: "block",
      color: "#555",
    },
    input: {
      width: "100%",
      padding: "8px 12px",
      borderRadius: "4px",
      border: "1px solid #ced4da",
      fontSize: "0.9rem",
    },
    switchContainer: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    button: {
      backgroundColor: "#e54f37",
      color: "white",
      border: "none",
      padding: "10px 20px",
      borderRadius: "4px",
      cursor: "pointer",
      float: "right",
    },
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalBody style={styles.modalContent}>
        <Container fluid>
          <div style={styles.header}>
            <h5 style={styles.title}>Create Allowance</h5>
            <button
              onClick={toggle}
              style={styles.closeButton}
              aria-label="Close"
            >
              <FiX size={24} />
            </button>
          </div>
          <hr />

          <div style={styles.container}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Title <span style={{ color: "red" }}>*</span>
                    </Label>
                    <Input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      style={styles.input}
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>One time date</Label>
                    <Input
                      type="date"
                      name="oneTimeDate"
                      value={formData.oneTimeDate}
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
                      Include all active employees
                    </Label>
                    <div style={styles.switchContainer}>
                      <Switch
                        checked={formData.includeAllEmployees}
                        onChange={handleSwitchChange("includeAllEmployees")}
                        color="secondary"
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Specific Employees <span style={{ color: "red" }}>*</span>
                    </Label>
                    <Select
                      isMulti
                      name="specificEmployees"
                      options={employeeOptions}
                      value={formData.specificEmployees}
                      onChange={handleMultiSelectChange}
                      isDisabled={formData.includeAllEmployees}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>Is taxable</Label>
                    <div style={styles.switchContainer}>
                      <Switch
                        checked={formData.isTaxable}
                        onChange={handleSwitchChange("isTaxable")}
                        color="secondary"
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>Is condition based</Label>
                    <div style={styles.switchContainer}>
                      <Switch
                        checked={formData.isConditionBased}
                        onChange={handleSwitchChange("isConditionBased")}
                        color="secondary"
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>Is fixed</Label>
                    <div style={styles.switchContainer}>
                      <Switch
                        checked={formData.isFixed}
                        onChange={handleSwitchChange("isFixed")}
                        color="secondary"
                      />
                    </div>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>Based on</Label>
                    <Select
                      name="basedOn"
                      options={basedOnOptions}
                      value={basedOnOptions.find(
                        (option) => option.value === formData.basedOn
                      )}
                      onChange={(option) =>
                        handleChange({
                          target: { name: "basedOn", value: option.value },
                        })
                      }
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>Rate</Label>
                    <Input
                      type="number"
                      name="rate"
                      value={formData.rate}
                      onChange={handleChange}
                      style={styles.input}
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup style={styles.formGroup}>
                    <Label style={styles.label}>
                      Has max limit for allowance
                    </Label>
                    <div style={styles.switchContainer}>
                      <Switch
                        checked={formData.hasMaxLimit}
                        onChange={handleSwitchChange("hasMaxLimit")}
                        color="secondary"
                      />
                    </div>
                  </FormGroup>
                </Col>
              </Row>

              {/* {formData.isConditionBased && (
                <> */}
                  <Row>
                    <Col md={6}>
                      <FormGroup style={styles.formGroup}>
                        <Label style={styles.label}>
                          If choice <span style={{ color: "red" }}>*</span>
                        </Label>
                        <Select
                          name="ifChoice"
                          options={basedOnOptions}
                          value={basedOnOptions.find(
                            (option) => option.value === formData.ifChoice
                          )}
                          onChange={(option) =>
                            handleChange({
                              target: { name: "ifChoice", value: option.value },
                            })
                          }
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup style={styles.formGroup}>
                        <Label style={styles.label}>
                          If condition <span style={{ color: "red" }}>*</span>
                        </Label>
                        <Select
                          name="ifCondition"
                          options={conditionOptions}
                          value={conditionOptions.find(
                            (option) => option.value === formData.ifCondition
                          )}
                          onChange={(option) =>
                            handleChange({
                              target: {
                                name: "ifCondition",
                                value: option.value,
                              },
                            })
                          }
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup style={styles.formGroup}>
                        <Label style={styles.label}>
                          If amount <span style={{ color: "red" }}>*</span>
                        </Label>
                        <Input
                          type="number"
                          name="ifAmount"
                          value={formData.ifAmount}
                          onChange={handleChange}
                          style={styles.input}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                {/* </>
              )} */}

              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="submit"
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
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default CreateAllowance;
