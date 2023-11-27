import React from 'react';
import { TextField, CircularProgress } from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';

const ImagePanel = ({ panelText, onTextChange, panelState, imageUrl, matches }) => {
  // Inline styles for the wrapper div
  const wrapperStyle = {
    marginBottom: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Translucent white background
    transition: 'background-color 0.3s', // Smooth transition for hover effect
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Less translucent on hover
    },
  };

  return (
    <>
      <div style={wrapperStyle}>
        <TextField
          label="Panel Text"
          value={panelText}
          onChange={onTextChange}
          fullWidth
          variant="outlined"
        />
      </div>
      {panelState === 'loading' ? (
        <CircularProgress />
      ) : panelState === 'error' ? (
        <ErrorIcon style={{ fontSize: '48px', color: 'primary' }} />
      ) : (
        imageUrl && <img src={imageUrl} alt="Generated" style={{ width: matches ? '90vmin' : '512px', height: matches ? '90vmin' : '512px' }} />
      )}
    </>
  );
};

export default ImagePanel;
