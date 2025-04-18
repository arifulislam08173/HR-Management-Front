import React, { useState } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, Tooltip, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { FiList, FiGrid, FiPlus } from 'react-icons/fi';
import { IoFilterSharp } from "react-icons/io5";

const TopBarAttendancefield = ({headerName}) => {
  return (
    <Container fluid>
        <Row className="mb-3 align-items-center">
        <Col>
          <h3>{headerName}</h3>
        </Col>
        <Col md="8" className="d-flex align-items-center">
          <Input
            type="text"
            placeholder="Search"
            style={{
              marginRight: '10px',
              borderRadius: '8px',
              borderColor: '#ccc',
              padding: '8px 10px',
              width: "250px",
            }}
          />
          {/* <Button outline color="secondary" style={{ marginRight: '5px', width: '80px' }}>
            <FiList />
          </Button>
          <Button color="primary" style={{ marginRight: '5px', width: '80px' }}>
            <FiGrid />
          </Button> */}
          <Button outline color="secondary" style={{ marginRight: '5px', width: '180px' }}>
            <IoFilterSharp /> Filter
          </Button>
          <Button outline color="secondary" style={{ marginRight: '5px', width: '180px' }}>
            Group By
          </Button>
          <Button outline color="secondary" style={{ marginRight: '5px', width: '180px' }}>
            Actions
          </Button>
        </Col>
      </Row>

    </Container>
  )
}

export default TopBarAttendancefield
