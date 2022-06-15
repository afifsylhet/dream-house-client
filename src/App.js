import './App.css';
import Navigation from './components/shared/Navigation/Navigation';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import ProductView from './components/ProductView/ProductView';
import Footer from './components/shared/Footer/Footer';
import AllProduct from './components/shared/pages/AllProduct/AllProduct';
import Contact from './components/shared/pages/Contact/Contact';
import About from './components/shared/pages/About/About';
import Calculotor from './components/shared/pages/Calculotor/Calculotor';
import Error from './components/shared/pages/Error/Error';
import SingleProducts from './components/shared/pages/SingleProducts/SingleProducts';
import { useEffect, useState } from 'react';



function App() {

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch('./websiteData.json')
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])


  return (
    <div>
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home product={product} />} />
          <Route path="/home" element={<Home product={product} />} />
          <Route path="/productView/:id" element={<ProductView product={product} />} />
          <Route path="/allProduct" element={<AllProduct product={product} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<Calculotor />} />
          <Route path="*" element={< Error />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
