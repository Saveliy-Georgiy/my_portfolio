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

{/*
<BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
             <Route path='/dialogs' component={Dialogs}/>
            <Route path="/dialogs"
                   render={() => <DialogsContainer />}/>

            <Route path="/profile"
                   render={() => <Profile />}/>

            <Route path="/users"
                   render={() => <UsersContainer />}/>

            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>

        </div>

    </div>
</BrowserRouter>
*/}
