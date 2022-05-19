import './App.css';
import Navigation from './components/shared/Navigation/Navigation';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/home/Home';
import ProductView from './components/ProductView/ProductView';
import Agents from './components/shared/pages/Agents/Agents';
import News from './components/shared/pages/News/News';
import AfterBenner from './components/shared/pages/AfterBenner/AfterBenner';
import SwiperTest from './components/shared/pages/testPage/SwiperTest';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="productView" element={<ProductView />} />
        </Routes>
        <Agents></Agents>
        <News></News>
        <AfterBenner></AfterBenner>
        <SwiperTest></SwiperTest>
      </BrowserRouter>
    </div>
  );
}

export default App;
