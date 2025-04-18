import React from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { FaUserFriends, FaUserTie } from 'react-icons/fa'; // Added additional icons

const ScheduledInterview = () => {
  const styles = {
    container: {
      padding: '10px',
    },
    header: {
      fontSize: '20px',
      fontWeight: '600',
      marginBottom: '20px',
      textAlign: 'left',
    },
    iconsContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '10px',
    },
    icon: {
      fontSize: '50px',
      color: '#999',
    },
    message: {
      color: '#999',
      fontSize: '16px',
      textAlign: 'center'
    },
    card: {
      maxWidth: '100%',
    },
  };

  return (
    <Container className='mt-4'>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card style={styles.card}>
            <CardBody>
              <h4 style={styles.header}>Adam Luis's Scheduled Interviews</h4>
              <div style={styles.iconsContainer}>
                <FaUserFriends style={styles.icon} />
                <FaUserTie style={styles.icon} />
                <FaUserFriends style={styles.icon} />
              </div>
              <p style={styles.message}>No interviews are scheduled for this candidate</p>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ScheduledInterview;
