import { useState } from "react";

export function PasswordInput(props){
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const inputClass = value.length >= props.minLength ? "input" : "input-match";

    return (
        <input
            type="password"
            value={value}
            onChange={handleChange}
            className={inputClass}
        />
    );
}