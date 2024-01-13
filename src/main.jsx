import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import store from './Features/Store.js'
import ContextProvider from './Features/Context.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />  
    </ContextProvider>
    
    
    
  </React.StrictMode>,
)
