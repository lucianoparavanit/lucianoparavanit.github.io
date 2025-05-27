import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
        <div className="fixed top-0 left-0 w-screen h-screen -z-10" style={{ backgroundImage: "radial-gradient(ellipse 80% 80% at 50% -20%, #7877c64d, transparent)", backgroundColor: "rgb(10,10,10)",}}/>
        <App />
    </Router>
)