import React, { useState } from "react";
import { Container } from "reactstrap";
import TopBarLeaveAllocation from "../../modalForms_evan/TopComponent/TopBarLeaveAllocation";
import CreateLeaveAllocation from "../../modalForms_evan/LeaveField/Leave Allocation Requests/CreateLeaveAllocation";
import NotAvailableComponent from "../../modalForms_evan/NoComponent/NotAvailableComponent";
import { MdAssignmentInd  } from "react-icons/md";

const LeaveAllocationRequest = () => {
  const [isCreateModalOpen, setCreateModalOpen] = useState(false);

  const toggleCreateModal = () => {
    setCreateModalOpen(!isCreateModalOpen);
  };
  return (
    <Container fluid className="p-3" style={{ width: "1200px" }}>
      <TopBarLeaveAllocation
        headerName="Leave Allocation Requests"
        onCreateClick={toggleCreateModal}
      />
      <CreateLeaveAllocation
        isOpen={isCreateModalOpen}
        toggle={toggleCreateModal}
      />

      <NotAvailableComponent
        componentName="leave allocation requests"
        icon={MdAssignmentInd }
      />
    </Container>
  );
};

export default LeaveAllocationRequest;
