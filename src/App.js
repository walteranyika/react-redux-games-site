import React from "react";
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import {Route, Routes} from  'react-router-dom'
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
        <GlobalStyles/>
        <Nav/>
        <Routes>
            {['/', '/game/:id'].map((path,index) => <Route key={index} path={path} element={<Home/>} />)}
        </Routes>
    </div>
  );
}

export default App;
