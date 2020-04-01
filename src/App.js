import React from 'react';
import './App.css';
import Header from "./components/Pages/Header/Header.jsx";
import Skills from "./components/Pages/Skills/Skills.jsx";
import Projects from "./components/Pages/Projects/Projects.jsx";
import Slogan from "./components/Pages/Slogan/Slogan.jsx";
import Contacts from "./components/Pages/Contacts/Contacts.jsx";
import Footer from "./components/Pages/Footer/Footer.jsx";
import Main from "./components/Pages/Main/Main.jsx";

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
