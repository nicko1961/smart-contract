import React  from 'react';
import { createRoot } from "react-dom/client";

import App from './App';

import './index.css';
import { TransactionProvider } from './context/TransactionContext';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <TransactionProvider>
    <React-StrictMode>
    <App />
    </React-StrictMode>
  </TransactionProvider>,
  );


  

