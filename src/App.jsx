import { Fragment } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header.jsx';
import Countries from './containers/Countries';
import { CountryDetail } from './containers/CountryDetail.jsx';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <div className="container mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="/countries" />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/countries/:countryID" element={<CountryDetail />} />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
