import React, { useState } from 'react';
import { Container, Table, Button } from 'reactstrap';
import { FiPlus } from 'react-icons/fi';
import NewAttendanceRequest from '../modalForms_evan/Attendance/NewAttendanceRequest'

const Attendance = () => {
  const styles = {
    container: {
      padding: '15px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      width: '100%',
      height: 'auto',
      minHeight: '100%'
    },
    header: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '25px'
    },
    createButton: {
      backgroundColor: '#DC3545',
      border: 'none',
      borderRadius: '4px',
      padding: '6px 12px',
      color: '#fff',
    },
    tableContainer: {
      position: 'relative',
      marginTop: '10px',
      width: '100%'
    },
    tableWrapper: {
      overflow: 'auto',
      marginLeft: '200px',
      width: 'calc(100% - 200px)',
      borderLeft: '1px solid #dee2e6'
    },
    fixedColumn: {
      position: 'absolute',
      width: '200px', 
      left: 0,
      top: 'auto',
      backgroundColor: '#fff',
      zIndex: 2
    },
    employeeCircle: {
      backgroundColor: '#E8EAF6',
      color: '#3F51B5',
      borderRadius: '50%',
      width: '28px',
      height: '28px', 
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '8px',
      fontSize: '13px'
    },
    table: {
      margin: 0,
      borderCollapse: 'separate',
      borderSpacing: 0,
      width: '100%'
    },
    th: {
      padding: '12px 16px',
      whiteSpace: 'nowrap',
      textAlign: 'center',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1,
      fontWeight: '500',
      borderBottom: '1px solid #dee2e6',
      minWidth: '120px',
      fontSize: '14px'
    },
    fixedTh: {
      padding: '12px 16px',
      backgroundColor: '#fff',
    //   position: 'sticky',
      textAlign: 'center',
      top: 0,
      left: 0,
      zIndex: 3,
      fontWeight: '500',
      borderBottom: '1px solid #dee2e6',
      width: '200px',
      fontSize: '14px'
    },
    td: {
      padding: '15.5px 16px', 
      textAlign: 'center',
      whiteSpace: 'nowrap',
      borderBottom: '1px solid #dee2e6',
      backgroundColor: '#fff',
      fontSize: '14px'
    },
    fixedTd: {
      padding: '12px 16px',
      backgroundColor: '#fff',
      position: 'sticky',
      left: 0,
      zIndex: 1,
      borderBottom: '1px solid #dee2e6',
      fontSize: '14px'
    },
    scrollBar: {
      '&::-webkit-scrollbar': {
        height: '10px',
        width: '8px'
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1'
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
        borderRadius: '4px'
      }
    }
  };

  const attendanceData = [
    {
      employee: 'Adam Luis',
      date: 'Aug. 26, 2024',
      day: 'Monday',
      checkIn: '3:10 p.m.',
      inDate: 'Aug. 26, 2024',
      checkOut: '12:52 p.m.',
      outDate: 'Sep. 25, 2024',
      shift: 'Regular Shift',
      workType: 'None',
      minHour: '08:15',
      atWork: '717:42',
      overtime: '04:00'
    },
    {
        employee: 'Adam Luis',
        date: 'Aug. 26, 2024',
        day: 'Monday',
        checkIn: '3:10 p.m.',
        inDate: 'Aug. 26, 2024',
        checkOut: '12:52 p.m.',
        outDate: 'Sep. 25, 2024',
        shift: 'Regular Shift',
        workType: 'None',
        minHour: '08:15',
        atWork: '717:42',
        overtime: '04:00'
      },

      {
        employee: 'Adam Luis',
        date: 'Aug. 26, 2024',
        day: 'Monday',
        checkIn: '3:10 p.m.',
        inDate: 'Aug. 26, 2024',
        checkOut: '12:52 p.m.',
        outDate: 'Sep. 25, 2024',
        shift: 'Regular Shift',
        workType: 'None',
        minHour: '08:15',
        atWork: '717:42',
        overtime: '04:00'
      },

     
    // Add more data as needed
  ];
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <Container fluid style={styles.container}>
      <div style={styles.header}>
        <Button style={styles.createButton}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#B41E28")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#DC3545")}
            onClick={toggleModal}
          >

          <FiPlus /> Create
        </Button>
      </div>

      <div style={styles.tableContainer}>
        {/* Fixed Employee Column */}
        <div style={styles.fixedColumn}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.fixedTh}>Employee</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, index) => (
                <tr key={index}>
                  <td style={styles.fixedTd}>
                    <span style={styles.employeeCircle}>AL</span>
                    {row.employee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scrollable Content */}
        <div style={{...styles.tableWrapper, ...styles.scrollBar}}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Day</th>
                <th style={styles.th}>Check-In</th>
                <th style={styles.th}>In Date</th>
                <th style={styles.th}>Check-Out</th>
                <th style={styles.th}>Out Date</th>
                <th style={styles.th}>Shift</th>
                <th style={styles.th}>Work Type</th>
                <th style={styles.th}>Min Hour</th>
                <th style={styles.th}>At Work</th>
                <th style={styles.th}>Overtime</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((row, index) => (
                <tr key={index}>
                  <td style={styles.td}>{row.date}</td>
                  <td style={styles.td}>{row.day}</td>
                  <td style={styles.td}>{row.checkIn}</td>
                  <td style={styles.td}>{row.inDate}</td>
                  <td style={styles.td}>{row.checkOut}</td>
                  <td style={styles.td}>{row.outDate}</td>
                  <td style={styles.td}>{row.shift}</td>
                  <td style={styles.td}>{row.workType}</td>
                  <td style={styles.td}>{row.minHour}</td>
                  <td style={styles.td}>{row.atWork}</td>
                  <td style={styles.td}>{row.overtime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <NewAttendanceRequest isOpen={modalOpen} toggle={toggleModal} />
    </Container>
  );
};

export default Attendance;