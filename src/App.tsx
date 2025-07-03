import React, { useState } from 'react';
import './App.css';
import { CurrentSite, HeaderSection } from './components/headerSection';
import { HomeSection } from './components/Sites/Home';
import { PrizeSection } from './components/Sites/Prizes';
function App() {
  const [currentSite,setCurrentSite] = useState("Home")
  
  return (
    <CurrentSite.Provider value={{overskrift: currentSite, setOverskrift: setCurrentSite}} >
    <div className="App">
      <HeaderSection/>
      {currentSite === "Home" && (
        <HomeSection/>
      )}
      {currentSite === "Prize" && (
        <PrizeSection/>
      )}
    </div>
    </CurrentSite.Provider>
  );
}

export default App;
