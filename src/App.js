import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" component={Home} />
        </Routes>
        <h1>This is the home page.</h1>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
