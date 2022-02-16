import './App.css';
import Navigation from './components/shared/Navigation/Navigation';
import Product from './components/shared/pages/Product/Product';
import ShowProduct from './components/shared/pages/ShowProduct/ShowProduct';
import SingleProduct from './components/shared/pages/SingleProduct/SingleProduct';
import ImgaeSlide from './components/shared/pages/Slider/ImgaeSlide';


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <ImgaeSlide></ImgaeSlide>
      <Product></Product>
      <ShowProduct></ShowProduct>
      <SingleProduct></SingleProduct>
    </div>
  );
}

export default App;
