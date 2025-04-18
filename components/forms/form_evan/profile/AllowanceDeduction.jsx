import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FiScissors } from 'react-icons/fi';
import { FaHandHoldingDollar } from "react-icons/fa6";
import PlusButton from "../../../Button/PlusButton";
import Allowances from '../modalForms_evan/Allowance&Deduction/Allowances';

const AllowanceDeduction = () => {

  const [activeComponent, setActiveComponent] = useState("Allowances");
  const [modalType, setModalType] = useState(null);

  // const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  // const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleModal = (type = null) => {
    setModalType(type);
  };

  return (
    <Container fluid className="p-3">
      <Row>
        <Col>
          <div className="bg-white rounded p-4 shadow-sm">
            <Row className="mb-4">
              {/* Allowances Section */}
              <Col md={6}>
                <div
                  className="d-flex align-items-center justify-content-between p-3"
                  style={{
                    border: "1px solid #dee2e6",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <FaHandHoldingDollar
                      size={26}
                      className="me-2"
                      style={{ color: "#435ebe" }}
                    />
                    <span>Allowances</span>
                  </div>
                  <PlusButton
                    id="plusAllowance"
                    tooltip="Add Bonus"
                    onClick={() => toggleModal("Allowances")}
                  />
                </div>
              </Col>

              {/* Deductions Section */}
              <Col md={6}>
                <div
                  className="d-flex align-items-center justify-content-between p-3"
                  style={{
                    border: "1px solid #dee2e6",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  <div className="d-flex align-items-center">
                    <FiScissors
                      size={26}
                      className="me-2"
                      style={{ color: "#435ebe" }}
                    />
                    <span>Deductions</span>
                  </div>
                  <PlusButton
                    id="plusDeduction"
                    tooltip="Add Deduction"
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col className="text-center text-muted">
                <p>Basic pay not added . Please update in the active contract.</p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      {modalType === "Allowances" && (
        <Allowances isOpen={modalType === "Allowances"} toggle={() => toggleModal(null)} />
      )}
    </Container>
  );
};

export default AllowanceDeduction;