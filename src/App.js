import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
// import GridPoc from "./components/GridPoc";
import Footer from "./components/Footer";

function App() {
  return (
      <BrowserRouter>
        <Home/>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
