import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/page/Layout";
import Header from "./components/home/Header";
import Top from "./components/home/Top";
import Main from "./components/home/Main";
import Form from "./components/home/Form";
import CustomInput from "./components/home/CustomInput";
import Footer from "./components/home/Footer";
import List from "./components/home/List";
import Contact from "./components/page/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="header" element={<Header />} />
          <Route path="contact" element={<Contact />} />
          <Route path="top" element={<Top />} />
          <Route path="form" element={<Form />} />
          <Route path="custominput" element={<CustomInput />} />
          <Route path="footer" element={<Footer />} />
          <Route path="list" element={<List />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
