import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import AppContainer from "./components/AppContainer";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";


const App = () => {
    return (
        // <AppContainer>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/projects' element={<Projects/>}/>
                    <Route exact path='/contact' element={<Contact/>}/>
                    <Route exact path='/blog' element={<Blog/>}/>
                </Routes>
            </BrowserRouter>
        // </AppContainer>
    );
};

export default App;
