import React from 'react';
import {
  Container,
  Table,
  UncontrolledTooltip,
} from 'reactstrap';
import { FaEdit, FaEye } from 'react-icons/fa';

const Performance = () => {
  const styles = {
    container: {
      padding: '10px'
    },
    table: {
      backgroundColor: '#fff',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    avatar: {
      width: '35px',
      height: '35px',
      borderRadius: '50%',
      backgroundColor: '#17a2b8',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '10px',
      fontSize: '14px'
    },
    employeeCell: {
      display: 'flex',
      alignItems: 'center'
    },
    status: {
      backgroundColor: '#f8f9fa',
      color: '#6c757d',
      padding: '6px 12px',
      borderRadius: '4px',
      fontSize: '14px'
    },
    actionButton: {
      background: 'none',
      border: 'none',
      color: '#6c757d',
      cursor: 'pointer',
      padding: '0',
    },
    actionsCell: {
      display: 'flex',
      gap: '50px',
      justifyContent: 'flex-end'
    }
  };

  return (
    <Container fluid style={styles.container}>
      <Table hover responsive style={styles.table}>
        <thead>
          <tr>
            <th style={{ width: '30%' }}>Employee</th>
            <th style={{ width: '25%' }}>Title</th>
            <th style={{ width: '20%' }}>Status</th>
            <th style={{ width: '15%' }}>Due In</th>
            <th style={{ width: '10%' }}></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div style={styles.employeeCell}>
                <div style={styles.avatar}>AL</div>
                <span>Adam Luis</span>
              </div>
            </td>
            <td>Self Feedback</td>
            <td>Not Started</td>
            <td>0 minutes</td>
            <td>
              <div style={styles.actionsCell}>
                <button id="editButton" style={styles.actionButton}>
                  <FaEdit size={16} />
                </button>
                <UncontrolledTooltip target="editButton">Edit</UncontrolledTooltip>
                
                <button id="viewButton" style={styles.actionButton}>
                  <FaEye size={16} />
                </button>
                <UncontrolledTooltip target="viewButton">View</UncontrolledTooltip>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Performance;
