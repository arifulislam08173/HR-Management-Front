import React, { useState } from "react";
import { Dialog, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { FiX } from "react-icons/fi";

const CreateNewActionType = ({ isOpen, toggle }) => {
  const [formData, setFormData] = useState({
    title: "",
    actionType: "",
    enableLoginBlock: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    toggle();
  };

  const styles = {
    dialog: {
      "& .MuiDialog-paper": {
        width: "500px",
        maxWidth: "90%",
        borderRadius: "10px",
        padding: "20px",
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
      marginTop: "0px",
    },
    input: {
      borderRadius: "4px",
      border: "1px solid #ced4da",
      padding: "0.375rem 0.75rem",
      marginBottom: "15px",
    },
    button: {
      backgroundColor: "#e54f37",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      fontWeight: "400",
      color: "white",
    },
    label: {
        fontWeight: "bold",
    }
  };

  return (
    <Dialog open={isOpen} onClose={toggle} sx={styles.dialog}>
      <DialogTitle sx={{ position: "relative" }}>
        <span style={styles.title}>Create Action Type</span>
        <IconButton aria-label="close" onClick={toggle} sx={styles.closeButton}>
          <FiX />
        </IconButton>
        <hr/>
      </DialogTitle>

      <DialogContent>
        <Form onSubmit={handleSubmit} style={styles.form}>
          <FormGroup>
            <Label style={styles.label}>Title:</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              style={styles.input}
            />
          </FormGroup>

          <FormGroup>
            <Label style={styles.label}>Action type:</Label>
            <Input
              type="select"
              name="actionType"
              value={formData.actionType}
              onChange={handleChange}
              style={styles.input}
            >
              <option value="">---------</option>
              <option value="warning">Warning</option>
              <option value="suspention">Suspention</option>
              <option value="dismissal">Dismissal</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label>
            <span style={styles.label}>Enable login block : </span>
              <Input
                type="checkbox"
                name="enableLoginBlock"
                checked={formData.enableLoginBlock}
                onChange={handleChange}
              />{" "}
               If is enabled, employees log in will be
              blocked based on period of suspension or dismissal.
            </Label>
          </FormGroup>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "20px",
            }}
          >
            <Button
              style={styles.button}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = "#c44232")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = "#e54f37")
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

export default CreateNewActionType;
