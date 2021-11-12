import { Route, Routes, Redirect } from "react-router-dom";
import Rankings from "./Rankings/ranking.js";
import Index from "./Index/index.js";
import Navbar from "./BoilerplateComponents/Navbar.js";
import Error from "./BoilerplateComponents/404.js"
import { ThemeProvider } from '@emotion/react';
import theme from './theme';

export default function App() {
  return (<ThemeProvider theme={theme}>
  <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route exact path="/rankings" element={<Rankings/>} />
        <Route exact path="/" element={<Index />} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </div>
    </ThemeProvider>
  );
}