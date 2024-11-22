import { useState } from "react";

export function MatchNombre(props) {
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const inputClass = value.includes(props.nombre) ? "input-match" : "input";

    return (
        <input
            type="text"
            value={value}
            onChange={handleChange}
            className={inputClass}  

        />
    );
}