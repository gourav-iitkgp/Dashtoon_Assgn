import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

// Define the styles
const useStyles = makeStyles(theme => ({
  button: {
    marginTop: '20px',
    backgroundColor: 'yellow',
    color: 'black',
    '&:hover': {
      backgroundColor: '#e6e600', // Darker shade of yellow for hover
    },
  },
}));

const GenerateButton = ({ onClick }) => {
  const classes = useStyles();

  return (
    <Button 
      type="submit" 
      variant="contained" 
      color="default"
      className={classes.button} // Apply the styles
      onClick={onClick}
    >
      Generate
    </Button>
  );
};

export default GenerateButton;
