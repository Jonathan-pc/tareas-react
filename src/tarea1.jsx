import React from "react";
import { createRoot } from 'react-dom/client';
import { BlogPost } from "./components/tarea1/BlogPost";
import "./style/tarea1.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BlogPost
      titulo="Blog"
      parrafos={`Hoy vi una ardilla.
La ardilla era negra, era más grande que otras ardillas, tenía muchos dientes grandes y encima andaba siempre en cuatro patas, moviendo la cola.
Creo que puede haber sido un perro, dado que en Argentina no hay ardillas.`}
      autor={{
        nombre: "Julián Absatz",
        titulo: "Programador Front End",
        imagen: "https://avatars2.githubusercontent.com/u/14203988?s=460&v=4"
      }}
    />
  </React.StrictMode>
);
