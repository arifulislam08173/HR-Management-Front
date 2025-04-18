import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { FiX } from "react-icons/fi";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Table,
} from "reactstrap";
import Avatar from "@mui/material/Avatar";

const styles = {
  dialog: {
    "& .MuiDialog-paper": {
      padding: "20px",
      width: "90%",
      maxWidth: "600px",
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
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "400",
    marginTop: "20px",
    transition: "background-color 0.3s ease",
    color: "white",
  },
  buttonHover: {
    backgroundColor: "#c44232",
  },
  table: {
    marginTop: "20px",
  },
  employeeInfo: {
    flex: 1,
  },
  employeeName: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
  },
  department: {
    fontSize: "14px",
    color: "#666",
  },
};

const PenaltiesCreateForm = ({ isOpen, toggle, data }) => {
  const [formData, setFormData] = useState({
    leaveType: "",
    minusLeaves: "0.0",
    deductFromCarryForward: false,
    penaltyAmount: "0.0",
  });

  // Generate color based on string
  const stringToColor = (string) => {
    let hash = 0;
    for (let i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
    let color = "#";
    for (let i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    toggle();
  };

  return (
    <Dialog open={isOpen} onClose={toggle} sx={styles.dialog}>
      <DialogTitle
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <Avatar
          sx={{
            bgcolor: stringToColor(data.employee.name),
            width: 50,
            height: 50,
            marginRight: "10px",
          }}
        >
          {getInitials(data.employee.name)}
        </Avatar>
        <div style={styles.employeeInfo}>
          <Typography style={styles.employeeName}>
            {data?.employee?.name}
          </Typography>
          <Typography style={styles.department}>S/W Dept / None</Typography>
        </div>
        {/* <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={styles.avatar}>AL</div>
              <div>
                <div style={styles.title}>Adam Luis</div>
                <div style={{ color: "#666" }}>S/W Dept / None</div>
              </div>
            </div> */}
        <IconButton aria-label="close" onClick={toggle} sx={styles.closeButton}>
          <FiX />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <FormGroup>
            <Label>Leave type:</Label>
            <Input
              type="select"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
            >
              <option value="">---Choose Leave type---</option>
              <option value="Sick Leave">Sick Leave</option>
              <option value="Casual Leave">Casual Leave</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label>Minus leaves:</Label>
            <Input
              type="number"
              step="1"
              name="minusLeaves"
              value={formData.minusLeaves}
              onChange={handleChange}
            />
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                name="deductFromCarryForward"
                checked={formData.deductFromCarryForward}
                onChange={handleChange}
              />{" "}
              Deduct from carry forward
            </Label>
          </FormGroup>

          <FormGroup>
            <Label>Penalty amount:</Label>
            <Input
              type="number"
              step="1"
              name="penaltyAmount"
              value={formData.penaltyAmount}
              onChange={handleChange}
            />
          </FormGroup>

          <Table bordered style={styles.table}>
            <thead>
              <tr>
                <th>Leave Type</th>
                <th>Available Days</th>
                <th>Carry Forward Days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sick Leave</td>
                <td>10.0</td>
                <td>0.0</td>
              </tr>
              <tr>
                <td>Casual Leave</td>
                <td>1.0</td>
                <td>0.0</td>
              </tr>
            </tbody>
          </Table>

          <div style={{ marginTop: "15px", fontSize: "0.9rem", color: "#666" }}>
            <ol>
              <li>Leave type is optional when 'minus leave' is 0</li>
              <li>Penalty amount will affect payslip on the date</li>
              <li>
                By default minus leave will cut/deduct from available leaves
              </li>
              <li>
                By enabling 'Deduct from carry forward' leave will cut/deduct
                from carry forward days
              </li>
            </ol>
          </div>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={styles.button}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.buttonHover.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  styles.button.backgroundColor)
              }
              type="submit"
            >
              Save
            </Button>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PenaltiesCreateForm;
