import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from './components/Accordion';
import TwoColumnLayout from './components/twoColumnLayout';

function App() {
  return (
    <TwoColumnLayout>
      <Accordion />
    </TwoColumnLayout> 
  );
}

export default App;
