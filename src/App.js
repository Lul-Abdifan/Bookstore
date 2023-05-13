import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './components/Books';

import Layout from './components/Layout';
import Categories from './components/Categories';
import Default from './components/Default';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Default />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
