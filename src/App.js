import { Route, Routes } from "react-router-dom";
import Body from "./components/body/body";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Characters from "./pages/characters/characters";
import FunFacts from "./pages/funfacts/funfacts";
import './App.css';

function App() {
  return (
    <div className="route_class">
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/characters" element={ <Characters /> }/>
        <Route path="/funfacts" element={ <FunFacts /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;