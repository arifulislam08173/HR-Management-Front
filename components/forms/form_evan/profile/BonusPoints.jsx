import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  UncontrolledTooltip
} from 'reactstrap';
import PlusButton from '../../../Button/PlusButton';
import CreateEmployeBonus from '../modalForms_evan/BonusPoints/CreateEmployeBonus';
import RedeemBonusPoint from '../modalForms_evan/BonusPoints/RedeemBonusPoint';

const BonusPoints = () => {
  const [showModal, setShowModal] = useState(false);
  const [showRedeemModal, setShowRedeemModal] = useState(false);

  const toggleModal = (type) => {
    setShowModal(!showModal);
  };

  const toggleRedeemModal = () => {
    setShowRedeemModal(!showRedeemModal);
  };

  const styles = {
    container: {
      padding: '20px'
    },
    leftCard: {
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      border: 'none'
    },
    rightCard: {
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      border: 'none',
      height: '267px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px'
    },
    title: {
      fontSize: '20px',
      fontWeight: '600',
      margin: '0'
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '30px'
    },
    avatar: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      backgroundColor: '#f0f0c0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      fontSize: '20px'
    },
    userInfo: {
      display: 'flex',
      flexDirection: 'column'
    },
    userName: {
      fontSize: '18px',
      fontWeight: '500',
      marginBottom: '4px'
    },
    userDept: {
      color: '#666',
      fontSize: '14px'
    },
    pointsSection: {
      marginBottom: '20px'
    },
    pointsLabel: {
      color: '#666',
      fontSize: '16px',
      marginBottom: '8px'
    },
    pointsValue: {
      fontSize: '22px',
      fontWeight: '600',
      marginLeft: '5px',
      color: 'black'
    },
    redeemButtonHover: {
      backgroundColor: '#c44232',
    },
    redeemButton: {
      backgroundColor: '#e74c3c',
      border: 'none',
      width: '100%',
      padding: '12px'
    },
    activityItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '15px'
    },
    activityText: {
      color: '#666'
    },
    activityDate: {
      color: '#999',
      fontSize: '14px'
    }
  };

  return (
    <Container fluid style={styles.container}>
      <Row>
        <Col md={4}>
          <Card style={styles.leftCard}>
            <CardBody>
              <div style={styles.header}>
                <h2 style={styles.title}>Bonus Points</h2>
                <PlusButton
                  id="plusAllowance"
                  tooltip="Add Points"
                  onClick={() => toggleModal("Allowances")}
                />
              </div>

              <div style={styles.profile}>
                <div style={styles.avatar}>
                  AL
                </div>
                <div style={styles.userInfo}>
                  <div style={styles.userName}>Adam Luis</div>
                  <div style={styles.userDept}>S/W Dept / None</div>
                </div>
              </div>

              <div style={styles.pointsSection}>
                <div style={styles.pointsLabel}>Balance points to redeem: <span style={styles.pointsValue}>25</span></div>
                {/* <div style={styles.pointsValue}>25</div> */}
              </div>

              <Button 
                color="danger" 
                style={styles.redeemButton} 
                onMouseEnter={(e) => e.target.style.backgroundColor = styles.redeemButtonHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = styles.redeemButton.backgroundColor}
                onClick={toggleRedeemModal}
              >
                Redeem Now
              </Button>
            </CardBody>
          </Card>
        </Col>

        <Col md={8}>
          <Card style={styles.rightCard}>
            <CardBody>
              <div style={styles.activityItem}>
                <div style={styles.activityText}>
                  --{'>'} Adam Luis Added 25 bonus points for project
                </div>
                <div style={styles.activityDate}>Sep. 16, 2024</div>
              </div>

              <div style={styles.activityItem}>
                <div style={styles.activityText}>
                  --{'>'} Bonus Account created
                </div>
                <div style={styles.activityDate}>May. 21, 2024</div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* Add your modal component here */}
      {showModal && (
        <CreateEmployeBonus
          isOpen={showModal}
          toggle={() => setShowModal(false)}
        />
      )}

{showRedeemModal && (
        <RedeemBonusPoint
          isOpen={showRedeemModal}
          toggle={toggleRedeemModal}
        />
      )}

    </Container>
  );
};

export default BonusPoints;