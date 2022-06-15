import React from 'react';
import Product from '../shared/pages/Product/Product';
import ShowProduct from '../shared/pages/ShowProduct/ShowProduct';
import ImgaeSlide from '../shared/pages/Slider/ImgaeSlide';
import AfterBenner from '../../components/shared/pages/AfterBenner/AfterBenner';
import Agents from '../shared/pages/Agents/Agents';
import News from '../shared/pages/News/News';

const Home = (props) => {
    const { product } = props;

    return (
        <div>
            <ImgaeSlide></ImgaeSlide>
            <br />
            <AfterBenner></AfterBenner>
            <br />
            <Product product={product}></Product>
            <br />
            <Agents></Agents>
            <br />
            <ShowProduct product={product} ></ShowProduct>
            <br />
            <News></News>
            <br />
        </div>
    );
};

export default Home;