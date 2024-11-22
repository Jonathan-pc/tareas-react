import React from "react";
import ReactDOM from "react-dom/client";
import { CheckboxListWithState } from "./components/tarea4/CheckboxListWithState"; 
import "./style/tarea4.css";

const items = {
  uno: false,  
  dos: true,   
  tres: false, 
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<CheckboxListWithState items={items} />);
