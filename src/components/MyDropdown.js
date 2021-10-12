import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SplitButton, Dropdown } from 'react-bootstrap';

const MyDropdown = ({ options, currentTheme, onThemeChange }) => {

    const renderedOptions = options.map((option) => {
        if(option.value === options[0].value) {
            return null;
        }
        return (
            <Dropdown.Item onClick={()=> onThemeChange(option)}>{option.label || option.value} Theme</Dropdown.Item>
        );
    });

    return (
        <SplitButton size="lg" variant={currentTheme.value.toLowerCase()} title={`${currentTheme.label || currentTheme.value} Theme`}>
            {renderedOptions}
            <Dropdown.Divider/>
            <Dropdown.Item onClick={()=> onThemeChange(options[0])}>{options[0].label} Theme</Dropdown.Item>
        </SplitButton> 
    );


};

export default MyDropdown;
