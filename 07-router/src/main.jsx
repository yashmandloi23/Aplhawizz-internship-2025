import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BrowserRouters from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <BrowserRouters>
    <App />
  </BrowserRouters>,
)
