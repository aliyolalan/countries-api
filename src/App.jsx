import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import "./App.css";
import Countries from "./containers/Countries";
import Home from "./containers/Home";
import { CountryDetail } from "./containers/CountryDetail.jsx";

function App() {
  return (
    <div className="container mx-auto">
      <Router>
        <div className="text-white">
          <Link to="/">Home Container</Link>
          <Link to="/countries">Countries Container</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:countryID" element={<CountryDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
