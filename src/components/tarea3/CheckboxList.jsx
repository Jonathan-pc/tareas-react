import React from "react";
import { UncontrolledCheckbox } from "./UncontrolledCheckbox";

export function CheckboxList(props) {
    const handleCheckboxChange = (name, newValue) => {
        console.log(`${name} ha cambiado a ${newValue}`)
    };

    return (
        <div>
          {Object.entries(props.items).map(([name, initialValue]) => (
            <UncontrolledCheckbox
              key={name} 
              name={name} 
              initialValue={initialValue} 
              onChange={(newValue) => handleCheckboxChange(name, newValue)} 
            />
          ))}
        </div>
    ) 
}