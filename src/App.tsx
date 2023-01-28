import React from 'react';
import AtomKeys from './components/molecules/keyboards/AtomKeys'
import './App.css';
import { width } from '@mui/system';

function App() {
  return (
    <div className="App" style={{width:600, margin:'5%'}}>
      <AtomKeys/>      
    </div>
  );
}

export default App;