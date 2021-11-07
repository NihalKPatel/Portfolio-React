import React, {useEffect, useState} from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home2 from "./components/Pages/Home2";
import TechStack from "./components/Pages/TechStack";


function App() {
    const [load, upadateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            upadateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (

        <Router>
            <Preloader load={load}/>
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar/>
                <Home/>
                <Home2/>
                <TechStack/>
                <Projects/>
                <Contact/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
