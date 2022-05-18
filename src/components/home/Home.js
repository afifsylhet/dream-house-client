import React from 'react';
import Product from '../shared/pages/Product/Product';
import ShowProduct from '../shared/pages/ShowProduct/ShowProduct';
import ImgaeSlide from '../shared/pages/Slider/ImgaeSlide';

const Home = () => {
    return (
        <div>
            <ImgaeSlide></ImgaeSlide>
            <Product></Product>
            <ShowProduct></ShowProduct>
        </div>
    );
};

export default Home;