import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  Typography,
  Avatar,
  Box,
} from '@mui/material';
import { FiX } from "react-icons/fi";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const LeaveDetailsView = ({ open, onClose, leaveData, currentIndex }) => {
  const [currentLeaveIndex, setCurrentLeaveIndex] = useState(currentIndex);

  useEffect(() => {
    setCurrentLeaveIndex(currentIndex);
  }, [currentIndex]);

  const styles = {
    dialog: {
      '& .MuiDialog-paper': {
        margin: '20px',
        borderRadius: '8px',
        maxWidth: '450px',
        width: '100%',
        position: 'relative',
        overflow: 'visible',
      }
    },
    closeButton: {
      background: 'none',
      border: 'none',
      padding: '0',
      position: 'absolute',
      right: '16px',
      top: '16px',
      cursor: 'pointer',
      zIndex: 1,
    },
    content: {
      padding: '20px 24px',
      position: 'relative',
    },
    title: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '20px',
    },
    userInfo: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      marginBottom: '32px',
      fontWeight: 'bold',

    },
    avatar: {
      width: 45,
      height: 45,
      backgroundColor: '#f0f3d3',
      fontSize: '18px',
      color: '#333',
    },
    userDetails: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2px',
    },
    userName: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#333',
      marginBottom: '2px',
    },
    department: {
      color: '#666',
      fontSize: '14px',
    },
    detailsSection: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '24px',
    },
    detailItem: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    label: {
      color: '#666',
      fontSize: '14px',
      fontWeight: 'bold',
    },
    value: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#333',
    },
    description: {
      gridColumn: '1 / -1',
      marginTop: '8px',
    },
    navigationButton: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: '32px',
      height: '32px',
      backgroundColor: 'white',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      zIndex: 1,
    },
    prevButton: {
      left: '-50px',
    },
    nextButton: {
      right: '-50px',
    },
  };

  const handlePrevious = () => {
    if (currentLeaveIndex > 0) {
      setCurrentLeaveIndex(currentLeaveIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentLeaveIndex < leaveData.length - 1) {
      setCurrentLeaveIndex(currentLeaveIndex + 1);
    }
  };

  const currentLeave = leaveData[currentLeaveIndex];
  const userInitials = currentLeave?.employeeName?.split(' ').map(n => n[0]).join('') || 'AL';

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      sx={styles.dialog}
    >
      <button
        onClick={onClose}
        style={styles.closeButton}
        aria-label="Close"
      >
        <FiX size={20} />
      </button>

      {currentLeaveIndex > 0 && (
        <button 
          style={{...styles.navigationButton, ...styles.prevButton}}
          onClick={handlePrevious}
        >
          <ChevronLeftIcon sx={{ fontSize: 20 }} />
        </button>
      )}
      
      {currentLeaveIndex < leaveData.length - 1 && (
        <button 
          style={{...styles.navigationButton, ...styles.nextButton}}
          onClick={handleNext}
        >
          <ChevronRightIcon sx={{ fontSize: 20 }} />
        </button>
      )}

      <DialogContent sx={styles.content}>
        <Typography sx={styles.title}>Details</Typography>

        <Box sx={styles.userInfo}>
          <Avatar sx={styles.avatar}>{userInitials}</Avatar>
          <Box sx={styles.userDetails}>
            <Typography sx={styles.userName}>Adam Luis</Typography>
            <Typography sx={styles.department}>S/W Dept / None</Typography>
          </Box>
        </Box>

        <Box sx={styles.detailsSection}>
          <Box sx={styles.detailItem}>
            <Typography sx={styles.label}>Leave Type</Typography>
            <Typography sx={styles.value}>
              {currentLeave?.type || 'Casual Leave'}
            </Typography>
          </Box>
          <Box sx={styles.detailItem}>
            <Typography sx={styles.label}>Days</Typography>
            <Typography sx={styles.value}>
              {currentLeave?.requestedDays || '0.0'}
            </Typography>
          </Box>
          <Box sx={styles.detailItem}>
            <Typography sx={styles.label}>Start Date</Typography>
            <Typography sx={styles.value}>
              {currentLeave?.startDate || 'May. 25, 2024'}
            </Typography>
          </Box>
          <Box sx={styles.detailItem}>
            <Typography sx={styles.label}>End Date</Typography>
            <Typography sx={styles.value}>
              {currentLeave?.endDate || 'May. 25, 2024'}
            </Typography>
          </Box>
          <Box sx={{...styles.detailItem, ...styles.description}}>
            <Typography sx={styles.label}>Description</Typography>
            <Typography sx={styles.value}>On a trip</Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default LeaveDetailsView;