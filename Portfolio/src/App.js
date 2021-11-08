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
import About from "./components/Pages/About";
import TechStack from "./components/Pages/TechStack";


function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (

        <Router>
            <Preloader load={load}/>
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Navbar/>
                <Home/>
                <About/>
                <Projects/>
                <TechStack/>
                <Contact/>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
