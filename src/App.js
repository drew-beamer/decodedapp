import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Rankings from "./Rankings/ranking.js";
import Index from "./Index/index.js";
import Navbar from "./BoilerplateComponents/Navbar.js";
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

export default function App() {
  return (<ThemeProvider theme={theme}>
  <div>
      <div>
        <Navbar/>
      </div>
      <Router>
        <Routes>
          <Route path="/decodedapp/" element={<Index />} />
          <Route path="/decodedapp/rankings" element={<Rankings />} />
        </Routes>
      </Router>
    </div>
    </ThemeProvider>
  );
}