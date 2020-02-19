import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";

import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Slogan from "./components/Slogan/Slogan.jsx";
import Contacts from "./components/Contacts/Contacts.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
    return (
        <div className="App">
            <div className="portfolio">
                <Header />
                <Main />
                <Skills />
                <Projects />
                <Slogan />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
}

export default App;
