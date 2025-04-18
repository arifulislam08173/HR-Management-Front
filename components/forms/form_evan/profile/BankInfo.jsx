import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
const BankInfo = () => {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={12}>
          <div
            style={{
              padding: "20px",
              border: "1px solid #ced4da",
              borderRadius: "8px",
              marginTop: "20px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#fff",
            }}
          >
            {/* <h3
          style={{
            fontWeight: "bold",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Bank Info
        </h3> */}
            <Form>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="bankName" style={{ fontWeight: "bolder" }}>
                      Bank Name
                    </Label>
                    <Input type="text" id="bankName" placeholder="Bank name" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="accountNumber" style={{ fontWeight: "bolder" }}>
                      Account Number
                    </Label>
                    <Input
                      type="number"
                      id="accountNumber"
                      placeholder="Account No."
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="branch" style={{ fontWeight: "bolder" }}>
                      Branch
                    </Label>
                    <Input type="text" id="branch" placeholder="Branch" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="bankCode1" style={{ fontWeight: "bolder" }}>
                      Bank Code #1
                    </Label>
                    <Input
                      type="number"
                      id="bankCode1"
                      placeholder="Bank Code #1"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={12}>
                  <FormGroup>
                    <Label for="bankAddress" style={{ fontWeight: "bolder" }}>
                      Bank Address
                    </Label>
                    <Input
                      type="textarea"
                      id="bankAddress"
                      placeholder="Bank address"
                      style={{ height: "80px" }}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="country" style={{ fontWeight: "bolder" }}>
                      Country
                    </Label>
                    <Input type="select" id="country">
                      <option>India</option>
                      <option>USA</option>
                      <option>Canada</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="state" style={{ fontWeight: "bolder" }}>
                      State
                    </Label>
                    <Input type="select" id="state">
                      <option>Tamil Nadu</option>
                      <option>Karnataka</option>
                      <option>Maharashtra</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <FormGroup>
                    <Label for="city" style={{ fontWeight: "bolder" }}>
                      City
                    </Label>
                    <Input type="text" id="city" placeholder="City" />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="bankCode2" style={{ fontWeight: "bolder" }}>
                      Bank Code #2
                    </Label>
                    <Input
                      type="number"
                      id="bankCode2"
                      placeholder="Bank Code #2"
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
        </Col>
      </Row>
    </Container>
  );
};

export default BankInfo;
