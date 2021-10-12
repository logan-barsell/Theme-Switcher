import React, { useState } from 'react';
import MyDropdown from './MyDropdown';


const options = [
  {
    label: 'Default',
    value: 'secondary'
  },
  {
    value: 'Primary'
  },
  {
    value: 'Danger'
  },
  {
    value: 'Success'
  }
];

const ThemeSwitcher = () => {

  const [currentTheme, setTheme] = useState(options[0]);
  
    return (
      <>
        <div className={`h1 center-block text-center text-${currentTheme.value.toLowerCase()}`}>{currentTheme.label || currentTheme.value}</div>
        
        <div className="center-block text-center">
          <MyDropdown 
            options={options}
            currentTheme={currentTheme}
            onThemeChange={setTheme}
          />
        </div>
      </>
    );
  
};

export default ThemeSwitcher;