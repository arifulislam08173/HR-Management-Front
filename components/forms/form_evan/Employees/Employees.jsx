import React, { useState } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody, Tooltip, Dropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import { FiList, FiGrid, FiPlus } from 'react-icons/fi';
import { IoFilterSharp } from "react-icons/io5";
import { BsThreeDotsVertical } from 'react-icons/bs';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Router from "next/router";
import Avatar from '@mui/material/Avatar';


// Generate color based on string
const stringToColor = (string) => {
  let hash = 0;
  for (let i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = '#';
  for (let i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

// Generate initials from the name
const getInitials = (name) => {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase();
};

const employeesData = [
  { name: 'Abigail Roberts', email: 'abigail.roberts@horilla.com', role: 'Sales Man - (Sales Dept)', status: 'Offline', id: '#PEP15' },
  { name: 'Adam Luis', email: 'adam.luis@horilla.com', role: 'None', status: 'Offline', id: '' },
  { name: 'Aiden Murphy', email: 'aiden.murphy@horilla.com', role: 'Financial Analyst - (Finance Dept)', status: 'Offline', id: '#PEP40' },

  { name: 'Luis Adam', email: 'adam.luis@horilla.com', role: 'None', status: 'Offline', id: '', color: 'lightyellow' },
  { name: 'Murphy Aiden', email: 'aiden.murphy@horilla.com', role: 'Financial Analyst - (Finance Dept)', status: 'Offline', id: '#PEP40', color: 'lightcoral' },
  { name: 'Roberts Abigail', email: 'abigail.roberts@horilla.com', role: 'Sales Man - (Sales Dept)', status: 'Offline', id: '#PEP15', color: 'orange' },

  { name: 'Md. Mahadi', email: 'md.mahadi@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '', color: 'lightyellow' },
  { name: 'Rabby Chowdhury', email: 'rabby.chowdhury@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '#PEP15', color: 'orange' },
  { name: 'Ariful Evan', email: 'md.arifulevan@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '#PEP40', color: 'lightcoral' },


{ name: 'Abigail Roberts', email: 'abigail.roberts@horilla.com', role: 'Sales Man - (Sales Dept)', status: 'Offline', id: '#PEP15' },
{ name: 'Adam Luis', email: 'adam.luis@horilla.com', role: 'None', status: 'Offline', id: '' },
{ initials: 'AM', name: 'Aiden Murphy', email: 'aiden.murphy@horilla.com', role: 'Financial Analyst - (Finance Dept)', status: 'Offline', id: '#PEP40' },

{ name: 'Luis Adam', email: 'adam.luis@horilla.com', role: 'None', status: 'Offline', id: '', color: 'lightyellow' },
{ name: 'Murphy Aiden', email: 'aiden.murphy@horilla.com', role: 'Financial Analyst - (Finance Dept)', status: 'Offline', id: '#PEP40', color: 'lightcoral' },
{ name: 'Roberts Abigail', email: 'abigail.roberts@horilla.com', role: 'Sales Man - (Sales Dept)', status: 'Offline', id: '#PEP15', color: 'orange' },

{ name: 'Md. Mahadi', email: 'md.mahadi@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '', color: 'lightyellow' },
{ name: 'Rabby Chowdhury', email: 'rabby.chowdhury@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '#PEP15', color: 'orange' },
{ name: 'Ariful Evan', email: 'md.arifulevan@horilla.com', role: 'Software Engineer - (IT Dept)', status: 'Offline', id: '#PEP40', color: 'lightcoral' },

];

const Employees = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 10;

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Calculate total pages and current employees
  const totalPages = Math.ceil(employeesData.length / employeesPerPage);
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employeesData.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Tooltip
  const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

  // Dropdown
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  // Pagination handler
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Container fluid>
      <Row className="mb-3 align-items-center">
        <Col>
          <h3>Employees</h3>
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
          <Button outline color="secondary" style={{ marginRight: '5px', width: '80px' }}>
            <FiList />
          </Button>
          <Button color="primary" style={{ marginRight: '5px', width: '80px' }}>
            <FiGrid />
          </Button>
          <Button outline color="secondary" style={{ marginRight: '5px', width: '180px' }}>
            <IoFilterSharp /> Filter
          </Button>
          <Button outline color="secondary" style={{ marginRight: '5px', width: '180px' }}>
            Group By
          </Button>
          <Button outline color="secondary" style={{ marginRight: '5px', width: '180px' }}>
            Actions
          </Button>
          <Button color="danger" style={{ width: '180px' }}
          onClick={()=> Router.push("createNewpeople")}>
            <FiPlus /> Create
          </Button>
        </Col>
      </Row>

      <Row className="mb-2">
        <Col className="d-flex">
          <span style={{ color: 'green', marginRight: '8px' }}>● Online</span>
          <span style={{ color: 'grey' }}>● Offline</span>
        </Col>
      </Row>

      <Row>
        {currentEmployees.map((employee, index) => (
          <Col md="4" key={index} className="mb-4">
            <Card style={{ height: '150px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
              <CardBody className="d-flex align-items-center">
              <Avatar
                  sx={{
                    bgcolor: stringToColor(employee.name),
                    width: 50,
                    height: 50,
                    marginRight: '10px',
                  }}
                >
                  {getInitials(employee.name)}
                </Avatar>
                <div style={{ flex: 1 }}>
                  <h5 style={{ margin: 0, fontWeight: 'bold', fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {employee.name} {employee.id && `(${employee.id})`}
                  </h5>
                  <p style={{ margin: 0, color: 'gray', fontSize: '12px' }}>{employee.email}</p>
                  <p style={{ margin: 0, color: 'gray', fontSize: '12px' }}>{employee.role}</p>
                  <div style={{ color: 'gray', fontSize: '10px' }}>
                    <span>● {employee.status}</span>
                  </div>
                </div>
                <div id={`action-icon-${index}`}>
                  <BsThreeDotsVertical
                    style={{ color: 'gray', cursor: 'pointer' }}
                    onClick={() => toggleDropdown(index)}
                  />
                  <Tooltip
                    isOpen={tooltipOpen === index}
                    target={`action-icon-${index}`}
                    toggle={() => setTooltipOpen(tooltipOpen === index ? null : index)}
                  >
                    Actions
                  </Tooltip>
                </div>

                {/* Dropdown Menu */}
                <Dropdown
                  isOpen={dropdownOpen === index}
                  toggle={() => toggleDropdown(index)}
                  direction="left"
                >
                  <DropdownToggle tag="span" data-toggle="dropdown" aria-expanded={dropdownOpen === index} />
                  <DropdownMenu right style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                    <DropdownItem
                    onClick={()=> Router.push("editEmployee")}>Edit</DropdownItem>

                    <DropdownItem>Archive</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem style={{ color: 'red' }}>Delete</DropdownItem>
                  </DropdownMenu>
                </Dropdown>

              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <Row className="mt-3">
        <Col className="d-flex justify-content-end">
          <Stack spacing={2}>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              variant="outlined"
              shape="rounded"
            />
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Employees;
