import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppContainer from "./components/AppContainer";
import Projects from "./pages/Projects";

const App = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Projects/>}/>
          {/*<Route exact path='/' element={<Home/>}/>*/}
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
};

export default App;
