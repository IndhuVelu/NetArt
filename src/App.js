import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header'
import SectionLeft from './Components/Section/SectionLeft/SectionLeft'
import SectionRight from './Components/Section/SectionRight/SectionRight'
import SectionBottom from './Components/Section/SectionBottom/SectionBottom'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="section">
      <SectionLeft/>
      <SectionRight/>
      </div>
      <SectionBottom/>
    </div>
  );
}

export default App;
