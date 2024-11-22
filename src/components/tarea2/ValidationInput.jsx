import { useState } from "react";

export function ValidationInput(props) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const isValid = props.validation(value);

    const inputClass = isValid ? "input-match" : "input";

    return (
        <input
            type={props.isPassword ? "password" : "text"}
            value={value}
            onChange={handleChange}
            className={inputClass}  
            
        />
    );
}