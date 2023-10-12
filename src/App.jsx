import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import technologiesJSON from "./technologies.json";
import companiesJSON from "./companies.json";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";

function App() {
  const [technologies, setTechnologies] = useState(technologiesJSON);
  const [companies, setCompanies] = useState(companiesJSON);

  return (
    <div className="App">
      <Navbar />
      {/* <h1>LAB | React Stack Tracker</h1> */}
      <Routes>
        <Route path="/" element={<HomePage companies={companies} />} />
        <Route
          path="/company/:companySlug"
          element={<CompanyPage companies={companies} />}
        />
        <Route
          path="/tech/:slug"
          element={<TechnologyPage technologies={technologies} />}
        />
      </Routes>
    </div>
  );
}

export default App;
