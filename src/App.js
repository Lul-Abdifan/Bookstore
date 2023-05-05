import "./App.css";
import Books from "./components/Books";

import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Categories from "./components/Categories";
import Default from "./components/Default";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/books" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
