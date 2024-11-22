import { useState } from "react";
import { ControlledCheckbox } from "./ControlledCheckbox"; 
export function CheckboxListWithState({ items }) {
  
  const [checkboxState, setCheckboxState] = useState(items);

 
  const handleCheckboxChange = (name, checked) => {
    setCheckboxState((prevState) => ({
      ...prevState,
      [name]: checked, 
    }));
  };

  return (
    <div>
      {Object.entries(checkboxState).map(([name, value]) => (
        <ControlledCheckbox
          key={name}
          name={name}
          value={value}
          onChange={handleCheckboxChange} 
        />
      ))}
    </div>
  );
}
