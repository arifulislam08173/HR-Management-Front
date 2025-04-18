import React, { useState } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
} from "reactstrap";

const WorkInfo = () => {
  const [formData, setFormData] = useState({
    department: '',
    jobPosition: '',
    jobRole: '',
    shiftInformation: '',
    workType: '',
    employeeType: '',
    reportingManager: '',
    company: '',
    workLocation: '',
    workEmail: '',
    workPhone: '',
    joiningDate: ' ',
    contractEndDate: '',
    employeeTag: '',
    basicSalary: '0',
    salaryPerHour: '0'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <Form>
      <Row>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="department">
              Department
            </Label>
            <Input
              type="select"
              name="department"
              id="department"
              value={formData.department}
              onChange={handleInputChange}
            >
              <option>Sales Dept</option>
            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="jobPosition">
              Job Position
            </Label>
            <Input
              type="select"
              name="jobPosition"
              id="jobPosition"
              value={formData.jobPosition}
              onChange={handleInputChange}
            >
              <option>Sales Man</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="jobRole">
              Job Role
            </Label>
            <Input
              type="select"
              name="jobRole"
              id="jobRole"
              value={formData.jobRole}
              onChange={handleInputChange}
            >
              <option>Intern</option>

            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="shiftInformation">
              Shift Information
            </Label>
            <Input
              type="select"
              name="shiftInformation"
              id="shiftInformation"
              value={formData.shiftInformation}
              onChange={handleInputChange}
            >
              <option>Regular Shift</option>

            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="workType">
              Work Type
            </Label>
            <Input
              type="select"
              name="workType"
              id="workType"
              value={formData.workType}
              onChange={handleInputChange}
            >
              <option>---Choose Work Type---</option>

            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="employeeType">
              Employee Type
            </Label>
            <Input
              type="select"
              name="employeeType"
              id="employeeType"
              value={formData.employeeType}
              onChange={handleInputChange}
            >
              <option>Trainee</option>

            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="reportingManager">
              Reporting Manager
            </Label>
            <Input
              type="select"
              name="reportingManager"
              id="reportingManager"
              value={formData.reportingManager}
              onChange={handleInputChange}
            >
              <option>Emily Clark (#PEP03)</option>

            </Input>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="company">
              Company
            </Label>
            <Input
              type="select"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleInputChange}
            >
              <option>---Choose Company---</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="workLocation">
              Work Location
            </Label>
            <Input
              type="text"
              name="workLocation"
              id="workLocation"
              value={formData.workLocation}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="workEmail">
              Work Email
            </Label>
            <Input
              type="email"
              name="workEmail"
              id="workEmail"
              value={formData.workEmail}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="workPhone">
              Work Phone
            </Label>
            <Input
              type="text"
              name="workPhone"
              id="workPhone"
              placeholder="Mobile"
              value={formData.workPhone}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="joiningDate">
              Joining Date
            </Label>
            <Input
              type="date"
              name="joiningDate"
              id="joiningDate"
              value={formData.joiningDate}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="contractEndDate">
              Contract End Date
            </Label>
            <Input
              type="date"
              name="contractEndDate"
              id="contractEndDate"
              value={formData.contractEndDate}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="employeeTag">
              Employee Tag
            </Label>
            <Input
              type="select"
              name="employeeTag"
              id="employeeTag"
              value={formData.employeeTag}
              onChange={handleInputChange}
            >
              <option value="">Select Employee Tag</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>

      <Row>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="basicSalary">
              Basic Salary
            </Label>
            <Input
              type="number"
              name="basicSalary"
              id="basicSalary"
              value={formData.basicSalary}
              onChange={handleInputChange}
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label style={{ fontWeight: "bolder" }} for="salaryPerHour">
              Salary Per Hour
            </Label>
            <Input
              type="number"
              name="salaryPerHour"
              id="salaryPerHour"
              value={formData.salaryPerHour}
              onChange={handleInputChange}
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
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#c44232")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#e54f37")}
        >
          Save
        </Button>
      </div>
    </Form>
  );
};

export default WorkInfo;