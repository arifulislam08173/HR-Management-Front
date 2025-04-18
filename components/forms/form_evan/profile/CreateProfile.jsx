import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Container,
} from "reactstrap";
// import SwitchTogglebtn from "../../../ToggleButton/SwitchTogglebtn";
import Switch from "@mui/material/Switch";
import BankInfo from "./BankInfo";

const CreateProfile = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState("Personal Info");

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  const navItems = ["Personal Info", "Bank Info"];

  return (
    <Container>
      <Row className="justify-content-center">
        <div>
          <h3
            style={{
              marginBottom: "10px",
              textAlign: "left",
              fontWeight: "600",
            }}
          >
            Edit Profile
          </h3>
        </div>
        <div className="mb-0 border-bottom" style={{ overflowX: "auto" }}>
          <div className="d-flex justify-content-end" style={{ minWidth: "max-content" }}>
            {navItems.map((item, index) => (
              <div
                key={index}
                className="px-3 py-2"
                style={{
                  cursor: "pointer",
                  borderBottom:
                    activeTab === item ? "2px solid #d9534f" : "none",
                  color: activeTab === item ? "#d9534f" : "#666",
                  whiteSpace: "nowrap",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.borderBottom = "2px solid #d9534f")
                }
                onMouseOut={(e) => {
                  if (activeTab !== item) {
                    e.currentTarget.style.borderBottom = "none";
                  }
                }}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <Col md={12}>
          <div
            style={{
              padding: "20px",
              border: "1px solid #ced4da",
              borderRadius: "8px",
              marginTop: "20px",
              marginBottom: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            {/* <h3
                style={{
                  marginBottom: "30px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Edit Profile
              </h3> */}

            {/* Rendered Form based on Active Tab */}
            {activeTab === "Personal Info" ? (
              <>
                <div style={{ textAlign: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "50%",
                      backgroundColor: "#007bff",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    AL
                  </div>
                </div>

                <Form>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="firstName">
                          First Name
                        </Label>
                        <Input
                          type="text"
                          id="firstName"
                          placeholder="First Name"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="lastName">
                          Last Name
                        </Label>
                        <Input
                          type="text"
                          id="lastName"
                          placeholder="Last Name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="email">
                          Email
                        </Label>
                        <Input type="email" id="email" placeholder="Email" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="phone">
                          Phone
                        </Label>
                        <Input
                          type="tel"
                          id="phone"
                          placeholder="Phone"
                          pattern="[0-9]*"
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="dob">
                          Date of Birth
                        </Label>
                        <Input type="date" id="dob" value="dob" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="gender">
                          Gender
                        </Label>
                        <Input type="select" id="gender">
                          <option>Male</option>
                          <option>Female</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label
                          style={{ fontWeight: "bolder" }}
                          for="qualification"
                        >
                          Qualification
                        </Label>
                        <Input
                          type="text"
                          id="qualification"
                          placeholder="Qualification"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label
                          style={{ fontWeight: "bolder" }}
                          for="experience"
                        >
                          Experience
                        </Label>
                        <Input
                          type="number"
                          id="experience"
                          placeholder="Experience"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <FormGroup>
                    <Label style={{ fontWeight: "bolder" }} for="address">
                      Address
                    </Label>
                    <Input type="textarea" id="address" placeholder="Address" />
                  </FormGroup>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="country">
                          Country
                        </Label>
                        <Input type="select" id="country">
                          <option>Select</option>
                          <option>Bangladesh</option>
                          <option>India</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="state">
                          State
                        </Label>
                        <Input type="select" id="state">
                          <option>Select</option>
                          <option>Karnataka</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="city">
                          City
                        </Label>
                        <Input type="text" id="city" placeholder="City" />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="zip">
                          Zip Code
                        </Label>
                        <Input type="number" id="zip" placeholder="Zip Code" />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label
                          style={{ fontWeight: "bolder" }}
                          for="emergencyContact"
                        >
                          Emergency Contact
                        </Label>
                        <Input
                          type="tel"
                          id="emergencyContact"
                          placeholder="Emergency Contact"
                          pattern="[0-9]*"
                          onInput={(e) => {
                            e.target.value = e.target.value.replace(
                              /[^0-9]/g,
                              ""
                            );
                          }}
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label
                          style={{ fontWeight: "bolder" }}
                          for="contactName"
                        >
                          Contact Name
                        </Label>
                        <Input
                          type="text"
                          id="contactName"
                          placeholder="Contact Name"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label
                          style={{ fontWeight: "bolder" }}
                          for="emergencyRelation"
                        >
                          Emergency Contact Relation
                        </Label>
                        <Input
                          type="text"
                          id="emergencyRelation"
                          placeholder="Relation"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label
                          style={{ fontWeight: "bolder" }}
                          for="maritalStatus"
                        >
                          Marital Status
                        </Label>
                        <Input type="select" id="maritalStatus">
                          <option>Select</option>
                          <option>Single</option>
                          <option>Married</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Label style={{ fontWeight: "bolder" }} for="children">
                          Children
                        </Label>
                        <Input
                          type="number"
                          id="children"
                          placeholder="Children"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup style={{ fontWeight: "bolder" }}>
                        <Col>
                          <Label
                            for="isActive"
                            style={{ display: "block", textAlign: "left" }}
                          >
                            Is Active?
                          </Label>
                          <div
                            style={{ display: "flex", justifyContent: "flex-start" }}
                          >
                            <Switch
                              checked={isActive}
                              onChange={toggleActive}
                              color="secondary"
                              inputProps={{ "aria-label": "secondary switch" }}
                            />
                          </div>
                        </Col>
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
              </>
            ) : (
              // BankInfo Component when "Bank Info" is selected
              <BankInfo />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CreateProfile;
