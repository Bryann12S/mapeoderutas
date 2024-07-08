// frontend/src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar los estilos de Bootstrap
import './styles.css'; // Tu archivo de estilos personalizados

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
