import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './css/all.css'
import './css/navbar.css'
import './css/landing.css'
import './css/prof.css'
import './css/portofolio.css'
import './css/footer.css'
import './css/contact.css'



import {BrowserRouter} from 'react-router-dom';
import { useEffect } from 'react'

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
