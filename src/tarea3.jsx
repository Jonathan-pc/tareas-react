import React from 'react';
import { createRoot } from 'react-dom/client';
import { CheckboxList } from './components/tarea3/CheckboxList';
import "./style/tarea3.css";

function App() {
  const checkboxes = {
    uno: false,
    dos: true,
    tres: false,
  };

  return (
    <div>
      <h1>Lista de Checkboxes</h1>
      <CheckboxList items={checkboxes} />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

