import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './component/counter'
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot( document.getElementById( 'root' ) );
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);

