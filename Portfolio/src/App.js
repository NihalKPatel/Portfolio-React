import React, {useEffect, useState} from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Home/Contact";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


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
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/project" component={Projects}/>
                    <Route exact path="/contact" component={Contact}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
