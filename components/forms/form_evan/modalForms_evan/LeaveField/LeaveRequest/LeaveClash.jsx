import React from 'react';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';
import { IoPeople } from 'react-icons/io5';

const LeaveClash = ({ isOpen, toggle, clashCount }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Clashed Leave Requests</ModalHeader>
      <ModalBody style={{ textAlign: 'center' }}>
        <IoPeople size={50} color="black" />
        <div style={{ marginTop: '10px', fontSize: '18px' }}>
          {clashCount > 0 ? `${clashCount} clashed requests found` : 'No clashed requests found'}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default LeaveClash;