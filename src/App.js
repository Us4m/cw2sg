
import "./App.css";

import { useContext } from "react";
import { themeContext } from "./Context";

import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
     
      

      <BrowserRouter>
   <Routes>
  <Route path="/" element={<Home />} />
  <Route path="Portfolio" element={<Portfolio />} />

   
    
   

   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
