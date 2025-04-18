import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Button,
  Box,
  Typography,
  Paper
} from '@mui/material';
import { FiX } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const ViewComments = ({ isOpen, onClose, rowIndex, data }) => {
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');
  const [employeeName, setEmployeeName] = useState('');

  // Load employee name when rowIndex changes
  useEffect(() => {
    if (data && rowIndex >= 0) {
      const selectedEmployee = data[rowIndex]?.employee;
      setEmployeeName(selectedEmployee?.name || '');
    }
  }, [rowIndex, data]);

  const handlePostComment = () => {
    if (newComment.trim()) {
      setComments((prev) => ({
        ...prev,
        [rowIndex]: [
          ...(prev[rowIndex] || []),
          {
            id: Date.now(),
            text: newComment,
            meta: `by Adam Luis @ ${employeeName}'s shift request`,
            timestamp: new Date().toISOString()
          }
        ]
      }));
      setNewComment('');
    }
  };

  const handleDeleteComment = (commentId) => {
    setComments((prev) => ({
      ...prev,
      [rowIndex]: prev[rowIndex].filter((comment) => comment.id !== commentId)
    }));
  };

  const currentComments = comments[rowIndex] || [];

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          position: 'fixed',
          right: 0,
          m: 0,
          height: '100%',
          width: '400px',
          maxWidth: '100%',
          borderRadius: 0
        }
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid #eee',
          p: 2
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h6" component="span">
            Comments
          </Typography>
        </Stack>
        <IconButton onClick={onClose} size="small" sx={{ color: '#666' }}>
          <IoCloseOutline size={24} />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 2 }}>
        <Stack spacing={2}>
          <TextField
            fullWidth
            placeholder="Comment here"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handlePostComment()}
            variant="outlined"
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#fff'
              }
            }}
          />

          <Button
            variant="contained"
            disabled={!newComment.trim()}
            onClick={handlePostComment}
            sx={{
              width: 'fit-content',
              textTransform: 'none'
            }}
          >
            Post Comment
          </Button>

          <Stack spacing={1.5}>
            {currentComments.map((comment) => (
              <Paper
                key={comment.id}
                elevation={0}
                sx={{
                  p: 2,
                  border: '1px solid #eee',
                  borderRadius: 1,
                  position: 'relative'
                }}
              >
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {comment.text}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {comment.meta}
                </Typography>
                <IconButton
                  size="small"
                  onClick={() => handleDeleteComment(comment.id)}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: '#999',
                    '&:hover': {
                      color: '#666'
                    }
                  }}
                >
                  <FiX size={20} />
                </IconButton>
              </Paper>
            ))}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ViewComments;
