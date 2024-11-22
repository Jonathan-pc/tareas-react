export function ControlledCheckbox({ name, value, onChange }) {
    return (
      <label>
        <input
          type="checkbox"
          name={name}
          checked={value}
          onChange={(e) => onChange(name, e.target.checked)} // Pasamos el name y el estado del checkbox
        />
        {name}
      </label>
    );
  }
  