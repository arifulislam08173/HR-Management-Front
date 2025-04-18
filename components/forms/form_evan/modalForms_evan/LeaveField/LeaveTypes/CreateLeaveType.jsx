import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Tooltip,
  Container,
} from "reactstrap";
// import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import Switch from "@mui/material/Switch";
import { FiInfo } from "react-icons/fi";

const CreateLeaveType = ({ isOpen, toggle }) => {
  const [tooltipOpen, setTooltipOpen] = useState({});
  const [isPaid, setIsPaid] = useState(false);
  const [limitLeaveDays, setLimitLeaveDays] = useState(false);
  const [reset, setReset] = useState(false);
  const [requireApproval, setRequireApproval] = useState(false);
  const [requireAttachment, setRequireAttachment] = useState(false);
  const [excludeCompanyHolidays, setExcludeCompanyHolidays] = useState(false);
  const [excludeHolidays, setExcludeHolidays] = useState(false);
  const [isEncashable, setIsEncashable] = useState(false);
  const [assignedEmployees, setAssignedEmployees] = useState([]);

  const employeeOptions = [
    { value: "Adam Luis", label: "Adam Luis" },
    { value: "K.R. Rakshan", label: "K.R. Rakshan" },
    { value: "Others", label: "Others" },
  ];

  const toggleTooltip = (tooltipId) => {
    setTooltipOpen((prevState) => ({
      ...prevState,
      [tooltipId]: !prevState[tooltipId],
    }));
  };

  const handleSave = () => {
    console.log({
      isPaid,
      limitLeaveDays,
      requireApproval,
      requireAttachment,
      excludeCompanyHolidays,
      excludeHolidays,
      isEncashable,
      assignedEmployees: assignedEmployees.map((employee) => employee.value),
    });
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} centered size="lg">
      <ModalHeader toggle={toggle}>Create Leave Type</ModalHeader>
      <ModalBody>
        <Form>
          <Container>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="name" style={{ fontWeight: "bold" }}>
                    Name
                  </Label>
                  <Input type="text" id="name" placeholder="Name" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="icon" style={{ fontWeight: "bold" }}>
                    Icon
                  </Label>
                  <Input type="file" id="icon" />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="color" style={{ fontWeight: "bold" }}>
                    Color
                  </Label>
                  <Input type="color" id="color" />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label for="isPaid" style={{ fontWeight: "bold" }}>
                    Is Paid
                  </Label>
                  <Input
                    type="select"
                    id="isPaid"
                    onChange={(e) => setIsPaid(e.target.value === "Paid")}
                  >
                    <option>Unpaid</option>
                    <option>Paid</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            {/* Switch Fields */}
            <Row className="align-items-center">
              <Col md={6}>
                <FormGroup row>
                  <Col xs={8}>
                    <Label style={{ fontWeight: "bold" }} for="limitLeaveDays">
                      Limit Leave Days
                      <FiInfo
                        id="limitLeaveDaysTooltip"
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                      />
                      <Tooltip
                        placement="top"
                        isOpen={tooltipOpen.limitLeaveDaysTooltip}
                        target="limitLeaveDaysTooltip"
                        toggle={() => toggleTooltip("limitLeaveDaysTooltip")}
                      >
                        Set a limit on the number of leave days.
                      </Tooltip>
                    </Label>
                  </Col>
                  <Col xs={4}>
                    <Switch
                      checked={limitLeaveDays}
                      onChange={() => setLimitLeaveDays(!limitLeaveDays)}
                      color="secondary"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label style={{ fontWeight: "bold" }} for="totalDays">
                    Total Days
                  </Label>
                  <Input type="number" id="totalDays" placeholder="1" />
                </FormGroup>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col md={6}>
                <FormGroup row>
                  <Col xs={8}>
                    <Label style={{ fontWeight: "bold" }} for="reset">
                      Reset
                      <FiInfo
                        id="reset"
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                      />
                      <Tooltip
                        placement="top"
                        isOpen={tooltipOpen.reset}
                        target="reset"
                        toggle={() => toggleTooltip("reset")}
                      >
                        Do you need to reset based on leave conditions?
                      </Tooltip>
                    </Label>
                  </Col>
                  <Col xs={4}>
                    <Switch
                      checked={reset}
                      onChange={() => setReset(!reset)}
                      color="secondary"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Row className="align-items-center">
              <Col md={6}>
                <FormGroup row>
                  <Col xs={8}>
                    <Label style={{ fontWeight: "bold" }} for="requireApproval">
                      Require Approval
                      <FiInfo
                        id="requireApprovalTooltip"
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                      />
                      <Tooltip
                        placement="top"
                        isOpen={tooltipOpen.requireApprovalTooltip}
                        target="requireApprovalTooltip"
                        toggle={() => toggleTooltip("requireApprovalTooltip")}
                      >
                        Requires manager approval for this leave type.
                      </Tooltip>
                    </Label>
                  </Col>
                  <Col xs={4}>
                    <Switch
                      checked={requireApproval}
                      onChange={() => setRequireApproval(!requireApproval)}
                      color="secondary"
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup row>
                  <Col xs={8}>
                    <Label
                      style={{ fontWeight: "bold" }}
                      for="requireAttachment"
                    >
                      Require Attachment
                      <FiInfo
                        id="requireAttachmentTooltip"
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                      />
                      <Tooltip
                        placement="top"
                        isOpen={tooltipOpen.requireAttachmentTooltip}
                        target="requireAttachmentTooltip"
                        toggle={() => toggleTooltip("requireAttachmentTooltip")}
                      >
                        Requires an attachment for this leave type.
                      </Tooltip>
                    </Label>
                  </Col>
                  <Col xs={4}>
                    <Switch
                      checked={requireAttachment}
                      onChange={() => setRequireAttachment(!requireAttachment)}
                      color="secondary"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup row>
                  <Col xs={8}>
                    <Label
                      style={{ fontWeight: "bold" }}
                      for="excludeCompanyHolidays"
                    >
                      Exclude Company Holidays
                      <FiInfo
                        id="excludeCompanyHolidaysTooltip"
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                      />
                      <Tooltip
                        placement="top"
                        isOpen={tooltipOpen.excludeCompanyHolidaysTooltip}
                        target="excludeCompanyHolidaysTooltip"
                        toggle={() =>
                          toggleTooltip("excludeCompanyHolidaysTooltip")
                        }
                      >
                        Excludes company holidays from leave days.
                      </Tooltip>
                    </Label>
                  </Col>
                  <Col xs={4}>
                    <Switch
                      checked={excludeCompanyHolidays}
                      onChange={() =>
                        setExcludeCompanyHolidays(!excludeCompanyHolidays)
                      }
                      color="secondary"
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup row>
                  <Col xs={8}>
                    <Label style={{ fontWeight: "bold" }} for="excludeHolidays">
                      Exclude Holidays
                      <FiInfo
                        id="excludeHolidaysTooltip"
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                      />
                      <Tooltip
                        placement="top"
                        isOpen={tooltipOpen.excludeHolidaysTooltip}
                        target="excludeHolidaysTooltip"
                        toggle={() => toggleTooltip("excludeHolidaysTooltip")}
                      >
                        Excludes holidays from leave days.
                      </Tooltip>
                    </Label>
                  </Col>
                  <Col xs={4}>
                    <Switch
                      checked={excludeHolidays}
                      onChange={() => setExcludeHolidays(!excludeHolidays)}
                      color="secondary"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup row>
                  <Col xs={8}>
                    <Label style={{ fontWeight: "bold" }} for="isEncashable">
                      Is Encashable
                      <FiInfo
                        id="isEncashableTooltip"
                        style={{ cursor: "pointer", marginLeft: "5px" }}
                      />
                      <Tooltip
                        placement="top"
                        isOpen={tooltipOpen.isEncashableTooltip}
                        target="isEncashableTooltip"
                        toggle={() => toggleTooltip("isEncashableTooltip")}
                      >
                        Allows leave days to be encashed.
                      </Tooltip>
                    </Label>
                  </Col>
                  <Col xs={4}>
                    <Switch
                      checked={isEncashable}
                      onChange={() => setIsEncashable(!isEncashable)}
                      color="secondary"
                    />
                  </Col>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <FormGroup>
                  <Label style={{ fontWeight: "bold" }} for="assignedEmployees">
                    Assign to Employees
                    <FiInfo
                      id="assigntoEmployeeTooltip"
                      style={{ cursor: "pointer", marginLeft: "5px" }}
                    />
                    <Tooltip
                      placement="top"
                      isOpen={tooltipOpen.assigntoEmployeeTooltip}
                      target="assigntoEmployeeTooltip"
                      toggle={() => toggleTooltip("assigntoEmployeeTooltip")}
                    >
                      Assign this leave type to specific employees.
                    </Tooltip>
                  </Label>
                  {/* <Select
                    isMulti
                    options={employeeOptions}
                    value={assignedEmployees}
                    onChange={(selected) => setAssignedEmployees(selected)}
                    placeholder="Select Employees"
                  /> */}
                  <MultiSelect
                    options={employeeOptions}
                    value={assignedEmployees}
                    onChange={(selected) => setAssignedEmployees(selected)}
                    // onChange={setSelectedEmployees}
                    labelledBy="Select employees"
                  />
                </FormGroup>
              </Col>
            </Row>
          </Container>
        </Form>
      </ModalBody>
      <ModalFooter>
        {/* <Button color="secondary" onClick={toggle}>
          Cancel
        </Button> */}
        <Button
          onClick={handleSave}
          style={{
            backgroundColor: "#e54f37",
            border: "#e54f37",
            padding: "10px 20px",
            borderRadius: "5px",
            fontWeight: "400",
            marginTop: "20px",
            transition: "background-color 0.3s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#c44232")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#e54f37")}
        >
          Create
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateLeaveType;
