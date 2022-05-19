import React, { useRef, useState, useEffect } from "react";


import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, CardActions, Container, Grid, CardContent, CardMedia } from '@mui/material';


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SwipeTest.css";

// import required modules
import { Pagination } from "swiper";


// React Icon

import { GoLocation } from 'react-icons/go';
import { IoBedOutline } from 'react-icons/io5';
import { FaShower } from 'react-icons/fa';
import { BsTextarea } from 'react-icons/bs';
import { styled } from '@mui/material/styles';


const SwiperTest = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('./websiteData.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const data = product.slice(3, 6)

    const Item = styled(Box)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'left',
        // color: theme.palette.text.primary,
    }));

    // Swiper pagination function
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    return (
        <div>

            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <Box sx={{ textAlign: 'center' }}>
                        <br />
                        <Typography sx={{ color: '#8ea69a' }} > Check out</Typography>
                        <Typography sx={{ color: '#1a1a1a', marginY: '3px', fontWeight: '400' }} variant="h4"> Featured Properties</Typography>
                        <Typography sx={{ color: '#8ea69a' }}> View list of our short listed properties</Typography>
                    </Box>
                    <br />
                    <br />


                    {/* Swiper Start Here */}
                    <Swiper
                        pagination={pagination}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                    </Swiper>

                    {/* Swiper end here */}

                    <Box sx={{ maxWidth: 800, flexGrow: 1, textAlign: 'center', zIndex: '1', position: 'relative' }}>

                        {/* <Container fluid>
                            <img src='https://i.ibb.co/sy24rm4/flat-8-img-1.jpg' alt='hello' />
                        </Container> */}

                        <CardMedia
                            component="img"
                            height="300"
                            image="https://i.ibb.co/sy24rm4/flat-8-img-1.jpg"
                            alt="green iguana"
                        />

                        {/* Card Content  */}

                        <Box sx={{ backgroundColor: 'white', zIndex: '2', position: 'relative', marginLeft: '10%', marginRight: '10%', marginTop: '-100px' }}
                        >
                            <CardContent sx={{ textAlign: 'left', maxWidth: '300px' }}>
                                <Typography gutterBottom variant="h6" component="div" sx={{ color: '#20b759' }}>
                                    {data.name1}
                                </Typography>
                                <Typography variant="body2" sx={{ color: 'black' }}>
                                    <GoLocation />  {data.location}                               </Typography>

                                <Grid container columnSpacing={1} >
                                    <Grid item sx={{ minWidth: '95px' }}>


                                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                            <Typography variant='subtitle2' sx={{ color: '#20b759' }} >Bedrooms</Typography>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <IoBedOutline size={25} style={{ color: 'black' }} />
                                                <span style={{ color: 'black', marginLeft: '5px' }}>{data.bedRoom}</span>
                                            </div>
                                        </Item>
                                    </Grid>

                                    <Grid item sx={{ minWidth: '95px' }}>
                                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                            <Typography variant='subtitle2' sx={{ color: '#20b759' }}>Bathrooms</Typography>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaShower size={25} style={{ color: 'black' }} />
                                                <span style={{ color: 'black', marginLeft: '5px' }}>{data.bathRoom}</span>
                                            </div>
                                        </Item>
                                    </Grid>

                                    <Grid item sx={{ minWidth: '95px' }} >
                                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                            <Typography variant='subtitle2' sx={{ color: '#20b759' }}>Area</Typography>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsTextarea size={25} style={{ color: 'black' }} />
                                                <span style={{ color: 'black', marginLeft: '5px' }}> {data.area} Sq Ft</span>
                                            </div>
                                        </Item>
                                    </Grid>
                                </Grid>
                                <Typography variant='body' sx={{ color: '#20b759' }}>{data.type}</Typography>
                            </CardContent>

                            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button sx={{ color: '#20b759' }} >$ {data.price}</Button>
                                <Button variant='contained' sx={{ backgroundColor: '#20b759' }} >Show Details</Button>
                            </CardActions>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </div >
    );
};

export default SwiperTest;