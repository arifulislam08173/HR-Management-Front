import React, { useState } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, Tooltip, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { FiList, FiGrid, FiPlus } from 'react-icons/fi';
import { IoFilterSharp } from "react-icons/io5";

const TopBarLeaveAllocation = ({headerName, onCreateClick}) => {
  return (
    <Container fluid>
        <Row className="mb-3 align-items-center">
        <Col>
          <h3>{headerName}</h3>
        </Col>
        <Col md="8" className="d-flex justify-content-end">
          <Button color="danger" style={{ width: '180px' }}
          onClick={onCreateClick}>
            <FiPlus /> Create
          </Button>
        </Col>
      </Row>

    </Container>
  )
}

export default TopBarLeaveAllocation