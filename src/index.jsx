import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Emoticon from './components/Emoticon';
import Configurator from './components/Configurator';
import {eyesData} from './data'
import { SettingsContext } from "./setting-context";

const App = () => {
  const [settings, setSettings] = useState({
    eyes: 1,
    mouth: 2,
    color: 3
  })

  const changeSettings = (obj) => {
    setSettings({...settings, ...obj})
  }

  return (
    <SettingsContext.Provider value={{settings, changeSettings}}>
      <div className="container">
        <header>
          <h1>Vytvoř si vlastní emotikon</h1>
        </header>
        <main>
          <Emoticon />
          <Configurator />
        </main>
      </div>
    </SettingsContext.Provider>
  );
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
