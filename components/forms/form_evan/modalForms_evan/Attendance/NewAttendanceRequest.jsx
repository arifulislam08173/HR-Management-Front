import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  InputGroup,
} from "reactstrap";
import Switch from "@mui/material/Switch";

const NewAttendanceRequest = ({ isOpen, toggle }) => {
  const [createBulk, setCreateBulk] = useState(false);

  const toggleBulk = () => {
    setCreateBulk(!createBulk);
    console.log("CreateBulk toggled:", !createBulk);
  };

  const labelStyles = {
    fontWeight: "500",
    fontSize: "0.9rem",
    marginBottom: "8px",
    display: "block",
  };

  const inputStyles = {
    borderRadius: "4px",
    border: "1px solid #ced4da",
    padding: "0.375rem 0.75rem",
  };

  const buttonStyles = {
    backgroundColor: "#e54f37",
    border: "#e54f37",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "400",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle}>New Attendance Request</ModalHeader>
      <ModalBody>
        <Container>
          <Form>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label style={labelStyles} for="employee">
                    Employee <span style={{ color: "#dc3545" }}>*</span>
                  </Label>
                  <Input
                    type="select"
                    id="employee"
                    name="employee"
                    style={inputStyles}
                  >
                    <option>Adam Luis</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label style={{ ...labelStyles }}>Create Bulk</Label>
                  <div style={{ marginTop: "8px" }}>
                    <Switch
                      checked={createBulk}
                      onChange={toggleBulk}
                      color="secondary"
                      inputProps={{ "aria-label": "secondary switch" }}
                    />
                  </div>
                </FormGroup>
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md="6">
                <FormGroup>
                  <Label style={labelStyles} for="date">
                    {createBulk ? "From Date" : "Attendance Date"}{" "}
                    <span style={{ color: "#dc3545" }}>*</span>
                  </Label>
                  <Input
                    type="date"
                    id={createBulk ? "fromDate" : "attendanceDate"}
                    name="date"
                    style={inputStyles}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label style={labelStyles} for="shiftOrToDate">
                    {createBulk ? "To Date" : "Shift"}{" "}
                    <span style={{ color: "#dc3545" }}>*</span>
                  </Label>
                  {createBulk ? (
                    <Input
                      type="date"
                      id="toDate"
                      name="toDate"
                      style={inputStyles}
                    />
                  ) : (
                    <Input
                      type="select"
                      id="shift"
                      name="shift"
                      style={inputStyles}
                    >
                      <option>---Choose Shift---</option>
                      <option>Regular Shift</option>
                    </Input>
                  )}
                </FormGroup>
              </Col>
            </Row>

            {createBulk ? (
              <Row className="mt-3">
                <Col md="6">
                  <FormGroup>
                    <Label style={labelStyles} for="shift">
                      Shift <span style={{ color: "#dc3545" }}>*</span>
                    </Label>
                    <Input
                      type="select"
                      id="shift"
                      name="shift"
                      style={inputStyles}
                    >
                      <option>---Choose Shift---</option>
                      <option>Regular Shift</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label style={labelStyles} for="workType">
                      Work Type
                    </Label>
                    <Input
                      type="select"
                      id="workType"
                      name="workType"
                      style={inputStyles}
                    >
                      <option>---Choose Work Type---</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
            ) : (
              <Row className="mt-3">
                <Col md="6">
                  <FormGroup>
                    <Label style={labelStyles} for="workType">
                      Work Type
                    </Label>
                    <Input
                      type="select"
                      id="workType"
                      name="workType"
                      style={inputStyles}
                    >
                      <option>---Choose Work Type---</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md="6">
                  <FormGroup>
                    <Label style={labelStyles} for="checkInDate">
                      Check-In Date <span style={{ color: "#dc3545" }}>*</span>
                    </Label>
                    <Input
                      type="date"
                      id="checkInDate"
                      name="checkInDate"
                      style={inputStyles}
                    />
                  </FormGroup>
                </Col>
              </Row>
            )}

            <Row className="mt-3">
              <Col md="6">
                <FormGroup>
                  <Label style={labelStyles} for="checkIn">
                    Check-In <span style={{ color: "#dc3545" }}>*</span>
                  </Label>
                  <Input
                    type="time"
                    id="checkIn"
                    name="checkIn"
                    style={inputStyles}
                  />
                </FormGroup>
              </Col>
              {!createBulk ? (
                <Col md="6">
                  <FormGroup>
                    <Label style={labelStyles} for="checkOutDate">
                      Check-Out Date <span style={{ color: "#dc3545" }}>*</span>
                    </Label>
                    <Input
                      type="date"
                      id="checkOutDate"
                      name="checkOutDate"
                      style={inputStyles}
                    />
                  </FormGroup>
                </Col>
              ) : (
                <Col md="6">
                  <FormGroup>
                    <Label style={labelStyles} for="checkOut">
                      Check-Out <span style={{ color: "#dc3545" }}>*</span>
                    </Label>
                    <Input
                      type="time"
                      id="checkOut"
                      name="checkOut"
                      style={inputStyles}
                    />
                  </FormGroup>
                </Col>
              )}
            </Row>

            {!createBulk && (
              <Row className="mt-3">
                <Col md="6">
                  <FormGroup>
                    <Label style={labelStyles} for="checkOut">
                      Check-Out <span style={{ color: "#dc3545" }}>*</span>
                    </Label>
                    <Input
                      type="time"
                      id="checkOut"
                      name="checkOut"
                      style={inputStyles}
                    />
                  </FormGroup>
                </Col>
              </Row>
            )}

            <Row className="mt-3">
              <Col md="6">
                <FormGroup>
                  <Label style={labelStyles} for="minimumHour">
                    Minimum Hour <span style={{ color: "#dc3545" }}>*</span>
                  </Label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Input
                      type="number"
                      id="minimumHours"
                      name="minimumHours"
                      placeholder="HH"
                      min="0"
                      max="23"
                      style={{
                        width: "70px",
                        marginRight: "5px",
                        ...inputStyles,
                      }}
                    />
                    <span>:</span>
                    <Input
                      type="number"
                      id="minimumMinutes"
                      name="minimumMinutes"
                      placeholder="MM"
                      min="0"
                      max="59"
                      style={{
                        width: "70px",
                        marginLeft: "5px",
                        ...inputStyles,
                      }}
                    />
                  </div>
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label style={labelStyles} for="workedHours">
                    Worked Hours <span style={{ color: "#dc3545" }}>*</span>
                  </Label>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Input
                      type="number"
                      id="workedHours"
                      name="workedHours"
                      placeholder="HH"
                      min="0"
                      max="23"
                      style={{
                        width: "70px",
                        marginRight: "5px",
                        ...inputStyles,
                      }}
                    />
                    <span>:</span>
                    <Input
                      type="number"
                      id="workedMinutes"
                      name="workedMinutes"
                      placeholder="MM"
                      min="0"
                      max="59"
                      style={{
                        width: "70px",
                        marginLeft: "5px",
                        ...inputStyles,
                      }}
                    />
                  </div>
                </FormGroup>
              </Col>
            </Row>

            {/* <Row className="mt-3">
              <Col md="6">
                <FormGroup>
                  <Label style={labelStyles} for="minimumHour">
                    Minimum Hour <span style={{ color: "#dc3545" }}>*</span>
                  </Label>
                  <Input
                    type="time"
                    id="minimumHour"
                    name="minimumHour"
                    defaultValue="00:00"
                    style={inputStyles}
                  />
                </FormGroup>
              </Col>
              <Col md="6">
                <FormGroup>
                  <Label style={labelStyles} for="workedHours">
                    Worked Hours <span style={{ color: "#dc3545" }}>*</span>
                  </Label>
                  <Input
                    type="time"
                    id="workedHours"
                    name="workedHours"
                    defaultValue="00:00"
                    style={inputStyles}
                  />
                </FormGroup>
              </Col>
            </Row> */}

            <Row className="mt-3">
              <Col md="12">
                <FormGroup>
                  <Label style={labelStyles} for="description">
                    Request Description{" "}
                    <span style={{ color: "#dc3545" }}>*</span>
                  </Label>
                  <Input
                    type="textarea"
                    id="description"
                    name="description"
                    placeholder="Request Description"
                    rows="4"
                    style={inputStyles}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row className="text-end mt-4">
              <Col>
                <Button
                  style={buttonStyles}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#c44232")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#e54f37")
                  }
                >
                  Request
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </ModalBody>
    </Modal>
  );
};

export default NewAttendanceRequest;
