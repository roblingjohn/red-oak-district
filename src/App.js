import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Footer from "./containers/Footer";
import Program from "./containers/Program";
import Neighborhood from "./containers/Neighborhood";
import Future from "./containers/Future";
import Events from "./containers/Events";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="program" element={<Program />} />
          <Route path="neighborhood" element={<Neighborhood />} />
          <Route path="future" element={<Future />} />
          <Route path="events" element={<Events />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
