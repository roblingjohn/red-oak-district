import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import Program from "./containers/Program";
import Neighborhood from "./containers/Neighborhood";
import Future from "./containers/Future";
import Events from "./containers/Events";
import Committees from "./containers/Committees";
import Board from "./containers/Board";
import InstagramPosts from "./components/InstagramPosts";
import Newsletter from "./components/Newsletter";
import History from "./containers/History";
import Businesses from "./containers/Businesses";
import Arts from "./containers/Arts";

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
          <Route path="board" element={<Board />} />
          <Route path="committees" element={<Committees />} />
          <Route path="history" element={<History />} />
          <Route path="businesses" element={<Businesses />} />
          <Route path="arts" element={<Arts />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <InstagramPosts />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
