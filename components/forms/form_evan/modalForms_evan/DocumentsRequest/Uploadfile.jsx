import React, { useState } from 'react';
import { 
  Container,
  Row,
  Col,
  Modal, 
  ModalHeader, 
  ModalBody, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Button,
} from 'reactstrap';
import { IoClose } from "react-icons/io5";

const Uploadfile = ({ isOpen, toggle }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [expiryDate, setExpiryDate] = useState('');
  const [notifyDays, setNotifyDays] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const modalStyles = {
    maxWidth: '500px',
    margin: '1.75rem auto',
    backgroundColor: 'white',
    borderRadius: '8px',
    border: 'none',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  };

  const headerStyles = {
    borderBottom: '1px solid #dee2e6',
    padding: '1rem',
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

  const fileInputStyles = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem'
  };

  const chooseFileButtonStyles = {
    border: '1px solid #ced4da',
    borderRadius: '4px',
    padding: '6px 12px',
    backgroundColor: 'white',
    color: '#333',
    cursor: 'pointer',
    marginRight: '10px'
  };

  const inputStyles = {
    display: 'block',
    width: '100%',
    padding: '0.375rem 0.75rem',
    fontSize: '1rem',
    lineHeight: '1.5',
    color: '#495057',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem',
    transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out'
  };

  const infoBoxStyles = {
    backgroundColor: '#ADD8E6',
    borderRadius: '4px',
    padding: '1rem',
    marginBottom: '1rem'
  };

  const infoListStyles = {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  };

  const infoListItemStyles = {
    marginBottom: '0.5rem',
    color: '#666',
    display: 'flex',
    alignItems: 'center'
  };

  const bulletPointStyles = {
    color: '#0d6efd',
    marginRight: '8px'
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle} style={modalStyles}>
      <div style={headerStyles}>
        <h5 style={titleStyles}>Upload File</h5>
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
          <FormGroup style={fileInputStyles}>
            <Input
              type="file"
              id="fileInput"
              onChange={handleFileChange}
              hidden
            />
            <Label 
              for="fileInput" 
              style={chooseFileButtonStyles}
            >
              Choose File
            </Label>
            <span style={{ color: '#666' }}>
              {selectedFile ? selectedFile.name : 'No file chosen'}
            </span>
          </FormGroup>

          <Row className="mb-3">
            <Col xs={expiryDate ? "6" : "12"}>
              <FormGroup>
                <Label style={{fontWeight:"bold"}}>Expiry Date</Label>
                <Input
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  style={inputStyles}
                />
              </FormGroup>
            </Col>
            
            {expiryDate && (
              <Col xs="6">
                <FormGroup>
                  <Label style={{fontWeight:"bold"}}>Notify Before (days)</Label>
                  <Input
                    type="number"
                    value={notifyDays}
                    onChange={(e) => setNotifyDays(e.target.value)}
                    placeholder="1"
                    min="1"
                    style={inputStyles}
                  />
                </FormGroup>
              </Col>
            )}
          </Row>

          <div style={infoBoxStyles}>
            <ul style={infoListStyles}>
              <li style={infoListItemStyles}>
                <strong style={bulletPointStyles}>•</strong>
                 <span style={{ color: '#0d6efd' }}>Upload any file</span> 
              </li>
              <li style={infoListItemStyles}>
              <strong style={bulletPointStyles}>•</strong>
                 <span style={{ color: '#0d6efd' }}>Max size of the file None MB</span> 
              </li>
            </ul>
          </div>

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

export default Uploadfile;