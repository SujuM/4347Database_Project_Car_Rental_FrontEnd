import NewAccount from "./Pages/NewAccount";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css'
import Login from "./Login";
import React, {useState} from "react";
import Navigation from "./Navigation";

function App() {
    const [isLoggedIn, setLoginStatus] = useState(false);

    return (
        <Router>
            <Navigation isLoggedIn={isLoggedIn}/>
            <Routes>
                <Route path="/login" element={<Login onLogin={() => setLoginStatus(true)}/>}/>
                <Route path="/signup" element={<NewAccount/>}/>
            </Routes>
        </Router>
    )
}

export default App
