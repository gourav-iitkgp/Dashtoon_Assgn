import './App.css';
import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core';
import backgroundImage from './background.avif';
import theme from './theme';
import query from './api';
import ImagePanel from './components/ImagePanel';
import NavigationButtons from './components/NavigationButtons';
import GenerateButton from './components/GenerateButton';



function App() {
  const [panelTexts, setPanelTexts] = useState(Array(10).fill(''));
  const [panelState, setPanelState] = useState(Array(10).fill(''));
  const [currentPage, setCurrentPage] = useState(0);
  const [imageUrls, setImageUrls] = useState(Array(10).fill(''));
  const matches = window.matchMedia('(max-width: 600px)').matches || window.matchMedia('(max-height: 600px)').matches;

  const handleTextChange = (index, event) => {
    const newTexts = [...panelTexts];
    newTexts[index] = event.target.value;
    setPanelTexts(newTexts);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setPanelState(prevState => {
      const newPanelState = [...prevState];
      newPanelState[currentPage] = 'loading';
      return newPanelState;
    });

    const url = await query({ "inputs": panelTexts[currentPage] });
    setImageUrls(prevState => {
      const newImageUrls = [...prevState];
      newImageUrls[currentPage] = url;
      return newImageUrls;
    });

    setPanelState(prevState => {
      const newPanelState = [...prevState];
      newPanelState[currentPage] = url ? '' : 'error';
      return newPanelState;
    });
  };


  const handlePrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }}>
        <div className="central-area" style={{ width: '75%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '12.5%', paddingTop: '20%' }}>
          
          <form onSubmit={handleSubmit} className="form" style={{ width: matches ? '80%' : '50%' }}>
    <ImagePanel
      panelText={panelTexts[currentPage]}
      onTextChange={(event) => handleTextChange(currentPage, event)}
      panelState={panelState[currentPage]}
      imageUrl={imageUrls[currentPage]}
      matches={matches}
    />
    <NavigationButtons
      currentPage={currentPage}
      totalPanels={panelTexts.length}
      onPrevious={handlePrevious}
      onNext={handleNext}
    />
    <GenerateButton onClick={handleSubmit} />
  </form>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
