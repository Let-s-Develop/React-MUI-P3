import React, { useState } from 'react';
import { Popover, Button, Typography, Box } from '@mui/material';

const PopOverComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box sx={{ p: 2, maxWidth: 300 }}>
          <Typography variant="h6" gutterBottom>Popover Sections</Typography>
          <Typography variant="subtitle1" gutterBottom>Section 1: Overview</Typography>
          <Typography variant="body2" gutterBottom>
            - This section provides an overview of the project.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>Section 2: Details</Typography>
          <Typography variant="body2" gutterBottom>
            - Detailed information about the project components and structure.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>Section 3: Additional Resources</Typography>
          <Typography variant="body2" gutterBottom>
            - Links and references to additional resources for further learning.
          </Typography>
        </Box>
      </Popover>
    </div>
  );
};

export default PopOverComponent;