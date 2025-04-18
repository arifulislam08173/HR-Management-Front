import React, { useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FiPlus } from "react-icons/fi";
import { MdPendingActions } from "react-icons/md";
import NotAvailableComponent from "../modalForms_evan/NoComponent/NotAvailableComponent";
import CreateTakeAnAction from "../modalForms_evan/DisciplinaryActionComponents/CreateTakeAnAction";

const DisciplinaryActions = () => {
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);

  const toggleActionModal = () => {
    setIsActionModalOpen(!isActionModalOpen);
  };

  return (
    <Container fluid>
      <Row className="mb-3 align-items-center">
        <Col>
          <h3>Disciplinary Actions</h3>
        </Col>
        <Col md="8" className="d-flex justify-content-end">
          <Button
            color="danger"
            style={{ width: "180px" }}
            onClick={toggleActionModal}
          >
            <FiPlus /> Take An Action
          </Button>
        </Col>
      </Row>
      {/* Notavailable component */}
        <NotAvailableComponent
          componentName="Disciplinary Action"
          icon={MdPendingActions}
        />
{/* Create Take an action */}
    <CreateTakeAnAction 
        isOpen={isActionModalOpen} 
        toggle={toggleActionModal} 
      />
    </Container>
  );
};

export default DisciplinaryActions;
