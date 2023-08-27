import React from "react";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import App from "./components/home/App";
import Contact from "./components/page/Contact";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/halaman-kontak">Kontak</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" exact component={App} />
        <Route path="/contact" component={Contact} />
      </Routes>

    </div>
  </BrowserRouter>
);
export default AppRouter;
