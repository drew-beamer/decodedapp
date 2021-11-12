import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Index from "./Index/index.js";
import Navbar from "./BoilerplateComponents/Navbar.js";

export default function App() {
  return (<div>
      <div>
        <Navbar/>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </div>
  );
}