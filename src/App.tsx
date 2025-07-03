import React, { useState } from 'react';
import './App.css';
import { CurrentSite, HeaderSection } from './components/headerSection';
import { HomeSection } from './components/Sites/Home';
import { PrizeSection } from './components/Sites/Prizes';
import { ContactSite } from './components/Sites/Contact';
import { AboutSite } from './components/Sites/About';
function App() {
  const [currentSite,setCurrentSite] = useState("HOME")
  
  return (
    <CurrentSite.Provider value={{overskrift: currentSite, setOverskrift: setCurrentSite}} >
    <div className="App">
      <HeaderSection/>
      {currentSite === "HOME" && (
        <HomeSection/>
      )}
      {currentSite === "PRIZE" && (
        <PrizeSection/>
      )}
      {currentSite === "CONTACT" && (
        <ContactSite/>
      )}
      {currentSite === "ABOUT" && (
        <AboutSite/>
      )}
    </div>
    </CurrentSite.Provider>
  );
}

export default App;
