import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBack'; // Importing the back arrow icon
import ArrowForward from '@material-ui/icons/ArrowForward'; // Importing the forward arrow icon

const NavigationButtons = ({ currentPage, totalPanels, onPrevious, onNext }) => {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    backgroundColor: hover ? '#fada5e' : 'yellow', // Lighter yellow on hover
    color: 'black',
    marginTop: '20px',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button
        variant="contained"
        style={buttonStyle}
        disabled={currentPage === 0}
        onClick={onPrevious}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ArrowBack /> {/* Replacing text with the back arrow icon */}
      </Button>
      <Button
        variant="contained"
        style={buttonStyle}
        disabled={currentPage === totalPanels - 1}
        onClick={onNext}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <ArrowForward /> {/* Replacing text with the forward arrow icon */}
      </Button>
    </div>
  );
};

export default NavigationButtons;
