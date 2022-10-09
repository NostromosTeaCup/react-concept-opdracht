import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home/Home";
import Subreddit from "./pages/Subreddit/Subreddit";
import Footer from "./components/Footer/Footer";


function App() {
    return (
<>
        <Navigation/>
    <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/subreddit/:subredditId" element={<Subreddit/>}/>
            </Routes>
        </Router>
            <Footer/>
</>

    )
}

export default App;
