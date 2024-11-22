import React from 'react';
import { createRoot } from 'react-dom/client';
import { MatchNombre } from './components/tarea2/MatchNombre';
import { PasswordInput } from './components/tarea2/PasswordInput';
import { ValidationInput } from './components/tarea2/ValidationInput';
import "./style/tarea2.css";

function App() {
  return (
    <div>
      <h1>Ejemplos de Inputs con Validaciones</h1>
      
      <h2>MatchNombre</h2>
      <MatchNombre nombre="Juan" />

      <h2>PasswordInput</h2>
      <PasswordInput minLength={8} />

      <h2>ValidationInput - Longitud Mínima</h2>
      <ValidationInput
        validation={(value) => value.length >= 8}
        isPassword={true} 
      />

      <h2>ValidationInput - Sin Espacios</h2>
      <ValidationInput
        validation={(value) => !value.match(" ")}
        isPassword={false} 
      />

      <h2>ValidationInput - Email Válido</h2>
      <ValidationInput
        validation={(value) =>
          value.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        }
        isPassword={false} 
      />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);

