import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import Switch from "@mui/material/Switch";
import { FiX, FiInfo  } from "react-icons/fi";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

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
    marginTop: "5px",
  },
  input: {
    borderRadius: "4px",
    border: "1px solid #ced4da",
    padding: "0.375rem 0.75rem",
  },
  button: {
    backgroundColor: "#e54f37",
    border: "none",
    width: "100%",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "400",
    marginTop: "20px",
    color: "white",
    transition: "background-color 0.3s ease",
  },
  label: {
    fontWeight: "500",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    gap: "5px",
  },
  infoIcon: {
    fontSize: "16px",
    color: "#6c757d",
    cursor: "help",
  },
  tooltipContainer: {
    position: "relative",
  },
  switchLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
};

const UpdateLeaveType = ({ isOpen, toggle, data }) => {
  const [formData, setFormData] = useState({
    name: "",
    icon: null,
    color: "",
    isPaid: "Unpaid",
    totalDays: "90.0",
    carryforwardType: "No Carry Forward",
  });

  const [limitLeaveDays, setLimitLeaveDays] = useState(true);
  const [reset, setReset] = useState(false);
  const [requireApproval, setRequireApproval] = useState(true);
  const [requireAttachment, setRequireAttachment] = useState(true);
  const [excludeCompanyHolidays, setExcludeCompanyHolidays] = useState(false);
  const [excludeHolidays, setExcludeHolidays] = useState(false);
  const [isEncashable, setIsEncashable] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData({
        name: data.type || "",
        icon: data.icon || null,
        color: data.color || "",
        isPaid: data.payment || "",
        totalDays: data.totalDays || "",
        carryforwardType: data.carryforwardType || "No Carry Forward",
      });
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Leave Type Data:", {
      ...formData,
      limitLeaveDays,
      reset,
      requireApproval,
      requireAttachment,
      excludeCompanyHolidays,
      excludeHolidays,
      isEncashable,
    });
    toggle();
  };

  return (
    <Dialog open={isOpen} onClose={toggle} sx={styles.dialog}>
      <DialogTitle sx={{ position: "relative" }}>
        <span style={styles.title}>Update Leave Type</span>
        <IconButton aria-label="close" onClick={toggle} sx={styles.closeButton}>
          <FiX />
        </IconButton>
      <hr />
      </DialogTitle>

      <DialogContent>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <FormGroup>
            <Label style={styles.label}>Name</Label>
            <Input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={styles.input}
            />
          </FormGroup>

          <Row className="mt-3">
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>Icon</Label>
                <Input type="file" style={styles.input} />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label style={styles.label}>Color</Label>
                <Input
                  type="color"
                  value={formData.color}
                  onChange={(e) =>
                    setFormData({ ...formData, color: e.target.value })
                  }
                  style={{ ...styles.input, height: "38px" }}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="mt-3">
            <Label style={styles.label}>Is Paid</Label>
            <Input
              type="select"
              value={formData.isPaid}
              onChange={(e) =>
                setFormData({ ...formData, isPaid: e.target.value })
              }
              style={styles.input}
            >
              <option>Unpaid</option>
              <option>Paid</option>
            </Input>
          </FormGroup>

          <Row className="mt-3">
          <Col md={6}>
          <FormGroup row>
            <Col xs={8}>
              <Label style={styles.label}>Limit Leave Days</Label>
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

          <FormGroup className="mt-3">
            <Label style={styles.label}>Total Days</Label>
            <Input
              type="number"
              value={formData.totalDays}
              onChange={(e) =>
                setFormData({ ...formData, totalDays: e.target.value })
              }
              style={styles.input}
            />
          </FormGroup>

          <Row className="mt-3">
          <Col md={6}>
          <FormGroup row>
            <Col xs={8}>
              <Label style={styles.label}>Reset</Label>
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

          <FormGroup className="mt-3">
            <Label style={styles.label}>Carryforward Type</Label>
            <Input
              type="select"
              value={formData.carryforwardType}
              onChange={(e) =>
                setFormData({ ...formData, carryforwardType: e.target.value })
              }
              style={styles.input}
            >
              <option>No Carry Forward</option>
              <option>Carry Forward</option>
            </Input>
          </FormGroup>

          <Row className="mt-3">
            <Col md={6}>
              <Row>
                <Col xs={8}>
                  <Label style={styles.label}>Require Approval</Label>
                </Col>
                <Col xs={4}>
                  <Switch
                    checked={requireApproval}
                    onChange={() => setRequireApproval(!requireApproval)}
                    color="secondary"
                  />
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col xs={8}>
                  <Label style={styles.label}>Require Attachment</Label>
                </Col>
                <Col xs={4}>
                  <Switch
                    checked={requireAttachment}
                    onChange={() => setRequireAttachment(!requireAttachment)}
                    color="secondary"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col md={6}>
              <Row>
                <Col xs={8}>
                  <Label style={styles.label}>Exclude Company Holidays</Label>
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
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Col xs={8}>
                  <Label style={styles.label}>Exclude Holidays</Label>
                </Col>
                <Col xs={4}>
                  <Switch
                    checked={excludeHolidays}
                    onChange={() => setExcludeHolidays(!excludeHolidays)}
                    color="secondary"
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-3">
          <Col md={6}>
          <FormGroup row>
            <Col xs={8}>
              <Label style={styles.label}>Is Encashable</Label>
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

          <Button style={styles.button}
           onMouseEnter={(e) => (e.target.style.backgroundColor = "#c44232")}
           onMouseLeave={(e) => (e.target.style.backgroundColor = "#e54f37")}
           >Update</Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateLeaveType;