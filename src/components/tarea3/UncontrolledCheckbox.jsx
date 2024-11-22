import React, {useState} from "react";

export function UncontrolledCheckbox(props) {
    const [checked, setChecked] = useState(props.initialValue);

    const handleChange = (event) => {
        const newValue = event.target.checked;
        setChecked(newValue);
        props.onChange(newValue);
    };

    return (
        <div>
            <label>
                <input
                type="checkbox"
                checked={checked}
                onChange={handleChange} 
                />
            </label>
        </div>
    )
}