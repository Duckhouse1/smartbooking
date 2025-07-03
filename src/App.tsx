import React, { useState } from 'react';
import './App.css';
import { HeaderSection } from './components/headerSection';
import { BodySection } from './components/bodySection';
function App() {
  const [currentSite,setCurrentSite] = useState("Home")
  return (
    
    <div className="App">
      <HeaderSection/>
      <BodySection/>
      {currentSite == "Home" && (
        <Home/>
      )}
      {currentSite == "Prize" && (
        <Prizes/>
      )}
    </div>
  );
}

export default App;
