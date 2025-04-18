import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  UncontrolledTooltip,
} from "reactstrap";
import {
  FiPlus,
  FiBriefcase,
  FiRepeat,
  FiClock,
  FiRefreshCw,
  FiEdit2,
  FiCopy,
  FiTrash2,
} from "react-icons/fi";
import PlusButton from "../../../Button/PlusButton";
import WorkTypeRequest from "../modalForms_evan/WorkType&Shift/WorkTypeRequest";
import RotatingWorkTypeAssign from "../modalForms_evan/WorkType&Shift/RotatingWorkTypeAssign";
import CreateShiftRequest from "../modalForms_evan/WorkType&Shift/CreateShiftRequest";
import RotatingshiftAssign from "../modalForms_evan/WorkType&Shift/RotatingshiftAssign";
import ShiftRequest from "../modalForms_evan/WorkType&Shift/ShiftRequest";

const ActionButton = ({ id, color, bgColor, icon: Icon, tooltip }) => {
  return (
    <>
      <button
        id={id}
        className="btn"
        style={{
          color: color,
          backgroundColor: bgColor,
          borderRadius: "4px",
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "none",
          padding: "0",
          transition: "all 0.2s ease-in-out",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.opacity = "0.8";
          e.currentTarget.style.transform = "scale(1.05)";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.opacity = "1";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        <Icon size={16} />
      </button>
      <UncontrolledTooltip placement="top" target={id}>
        {tooltip}
      </UncontrolledTooltip>
    </>
  );
};

const WorkTypeRequestComponent = () => (
  <Table bordered hover responsive className="mt-4">
    <thead>
      <tr>
        <th>Employee</th>
        <th>Requested Work Type</th>
        <th>Previous/Current Work Type</th>
        <th>Requested Date</th>
        <th>Requested Till</th>
        <th>Description</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div className="d-flex align-items-center">
            <div
              style={{
                width: "35px",
                height: "35px",
                backgroundColor: "#17a2b8",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                marginRight: "10px",
              }}
            >
              AL
            </div>
            Adam Luis
          </div>
        </td>
        <td>Work From Home</td>
        <td>None</td>
        <td>May. 1, 2024</td>
        <td>May. 31, 2024</td>
        <td>need work from home for a month</td>
        <td>Requested</td>
        <td>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <ActionButton
              id="editBtn"
              color="#435ebe"
              bgColor="#eef2ff"
              icon={FiEdit2}
              tooltip="Edit"
            />
            <ActionButton
              id="copyBtn"
              color="#198754"
              bgColor="#e8f5e9"
              icon={FiCopy}
              tooltip="Duplicate"
            />
            <ActionButton
              id="deleteBtn"
              color="#dc3545"
              bgColor="#ffebee"
              icon={FiTrash2}
              tooltip="Remove"
            />
          </div>
        </td>
      </tr>
    </tbody>
  </Table>
);

const NotAvailableComponent = ({ componentName }) => (
  <div className="text-center mt-4 p-5 bg-light rounded">
    <h4 className="text-muted">
      No {componentName} has been assigned.
    </h4>
  </div>
);

const WorkTypeShift = () => {
  const [activeComponent, setActiveComponent] = useState("workTypeRequest");
  const [modalType, setModalType] = useState(null);

  // const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  // const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleModal = (type = null) => {
    setModalType(type);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case "workTypeRequest":
        return <WorkTypeRequestComponent />;
      case "rotatingWorkType":
        return <NotAvailableComponent componentName="Rotating Work Type" />;
      case "shiftRequest":
        return <NotAvailableComponent componentName="Shift Request" />;
      case "rotatingShift":
        return <NotAvailableComponent componentName="Rotating Shift" />;
      default:
        return <WorkTypeRequestComponent />;
    }
  };

  return (
    <Container fluid className="p-4">
      <Row className="mb-4 align-items-center">
        <Col>
          <span className="fw-bold">Current Shift : </span>
          <span>Regular Shift</span>
          <Button
            color="danger"
            className="ms-4"
            style={{ backgroundColor: "#DC3545" }}
            onClick={() => toggleModal("ShiftRequest")}
          >
            <FiPlus className="me-1" /> Reallocate Shift
          </Button>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col md={3}>
          <div
            className={`d-flex align-items-center justify-content-between p-3 ${
              activeComponent === "workTypeRequest" ? "bg-light" : ""
            }`}
            style={{
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => setActiveComponent("workTypeRequest")}
          >
            <div className="d-flex align-items-center">
              <FiBriefcase
                size={24}
                className="me-2"
                style={{ color: "#435ebe" }}
              />
              <span>Work type request</span>
            </div>
            <PlusButton
              id="plusWorkTypeRequest"
              tooltip="Add Work Type Request"
              // onClick={toggleModal}
              onClick={() => toggleModal("WorkTypeRequest")}
            />
          </div>
        </Col>

        <Col md={3}>
          <div
            className={`d-flex align-items-center justify-content-between p-3 ${
              activeComponent === "rotatingWorkType" ? "bg-light" : ""
            }`}
            style={{
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => setActiveComponent("rotatingWorkType")}
          >
            <div className="d-flex align-items-center">
              <FiRepeat
                size={24}
                className="me-2"
                style={{ color: "#435ebe" }}
              />
              <span>Rotating work type</span>
            </div>
            <PlusButton
              id="plusrotatingWorkType"
              tooltip="Add Rotating Work Type"
              // onClick={toggleModal}
              onClick={() => toggleModal("RotatingWorkTypeAssign")}
            />
          </div>
        </Col>
        <Col md={3}>
          <div
            className={`d-flex align-items-center justify-content-between p-3 ${
              activeComponent === "shiftRequest" ? "bg-light" : ""
            }`}
            style={{
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => setActiveComponent("shiftRequest")}
          >
            <div className="d-flex align-items-center">
              <FiClock
                size={24}
                className="me-2"
                style={{ color: "#435ebe" }}
              />
              <span>Shift request</span>
            </div>
            <PlusButton
              id="plusShiftRequest"
              tooltip="Add shift Request"
              // onClick={toggleModal}
              onClick={() => toggleModal("CreateShiftRequest")}

            />
          </div>
        </Col>
        <Col md={3}>
          <div
            className={`d-flex align-items-center justify-content-between p-3 ${
              activeComponent === "rotatingShift" ? "bg-light" : ""
            }`}
            style={{
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={() => setActiveComponent("rotatingShift")}
          >
            <div className="d-flex align-items-center">
              <FiRefreshCw
                size={24}
                className="me-2"
                style={{ color: "#435ebe" }}
              />
              <span>Rotating Shift</span>
            </div>
            <PlusButton
              id="plusRotatingShift"
              tooltip="Add Rotating Shift"
              // onClick={toggleModal}
              onClick={() => toggleModal("RotatingshiftAssign")}

            />
          </div>
        </Col>
      </Row>

      {renderComponent()}

      {/* <WorkTypeRequest isOpen={isModalOpen} toggle={toggleModal} />
      <RotatingWorkTypeAssign isOpen={isModalOpen} toggle={toggleModal} /> */}

      {modalType === "ShiftRequest" && (
        <ShiftRequest isOpen={modalType === "ShiftRequest"} toggle={() => toggleModal(null)} />
      )}
      
      {modalType === "WorkTypeRequest" && (
        <WorkTypeRequest isOpen={modalType === "WorkTypeRequest"} toggle={() => toggleModal(null)} />
      )}

      {modalType === "RotatingWorkTypeAssign" && (
        <RotatingWorkTypeAssign isOpen={modalType === "RotatingWorkTypeAssign"} toggle={() => toggleModal(null)} />
      )}

      {modalType === "CreateShiftRequest" && (
        <CreateShiftRequest isOpen={modalType === "CreateShiftRequest"} toggle={() => toggleModal(null)} />
      )}

      {modalType === "RotatingshiftAssign" && (
        <RotatingshiftAssign isOpen={modalType === "RotatingshiftAssign"} toggle={() => toggleModal(null)} />
      )}

    </Container>
  );
};

export default WorkTypeShift;
