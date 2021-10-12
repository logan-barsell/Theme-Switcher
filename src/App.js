import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';

import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="parentContainer">
      <div className="subContainer">
        <ThemeSwitcher />
      </div>
    </div>
  );
}

export default App;
