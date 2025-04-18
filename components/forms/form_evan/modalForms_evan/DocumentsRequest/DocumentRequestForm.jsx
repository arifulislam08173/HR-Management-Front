import React, { useState } from 'react';
import {
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col
} from 'reactstrap';
import { IoClose } from "react-icons/io5";
import { MultiSelect } from "react-multi-select-component";

const DocumentRequestForm = ({ isOpen, toggle }) => {
  const [title, setTitle] = useState('');
  const [selectedEmployees, setSelectedEmployees] = useState([]);
  const [maxSize, setMaxSize] = useState('');
  const [description, setDescription] = useState('');

  // employees data
  const employeeOptions = [
    { label: 'Employee 1', value: 'emp1' },
    { label: 'Employee 2', value: 'emp2' },
    { label: 'Employee 3', value: 'emp3' },
  ];

  const modalStyles = {
    maxWidth: '800px',
    margin: '1.75rem auto',
  };

  const headerStyles = {
    padding: '1rem',
    borderBottom: '1px solid #dee2e6',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const titleStyles = {
    margin: '0',
    fontSize: '1.25rem',
    fontWeight: '500',
    color: '#333'
  };

  const closeButtonStyles = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    padding: '0',
    cursor: 'pointer',
    color: '#666'
  };

  const inputStyles = {
    border: '1px solid #dee2e6',
    borderRadius: '4px',
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    width: '100%'
  };

  const labelStyles = {
    fontWeight: '500',
    marginBottom: '0.5rem',
    color: '#333'
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} style={modalStyles}>
      <div style={headerStyles}>
        <h5 style={titleStyles}>Document Request</h5>
        <button
          onClick={toggle}
          style={closeButtonStyles}
          aria-label="Close"
        >
          <IoClose />
        </button>
      </div>

      <ModalBody>
        <Form>
          <Row>
            <Col md={6}>
              <FormGroup className="mb-3">
                <Label style={labelStyles}>Title</Label>
                <Input
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={inputStyles}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-3">
                <Label style={labelStyles}>Employees</Label>
                <MultiSelect
                  options={employeeOptions}
                  value={selectedEmployees}
                  onChange={setSelectedEmployees}
                  labelledBy="Select employees"
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <FormGroup className="mb-3">
                <Label style={labelStyles}>Format</Label>
                <Input type="select" id="format" style={inputStyles}>
                        <option>---Select---</option>
                        <option>Any</option>
                        <option>PDF</option>
                        <option>DOC</option>
                        <option>XLSX</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="mb-3">
                <Label style={labelStyles}>Max size (in MB)</Label>
                <Input
                  type="number"
                  placeholder="Max Size"
                  value={maxSize}
                  onChange={(e) => setMaxSize(e.target.value)}
                  style={inputStyles}
                />
              </FormGroup>
            </Col>
          </Row>

          <FormGroup className="mb-4">
            <Label style={labelStyles}>Description</Label>
            <Input
              type="textarea"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              style={{ ...inputStyles, minHeight: '100px', resize: 'vertical' }}
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

export default DocumentRequestForm;
