import React, { useRef, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';



const ShowProduct = () => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('./websiteData.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const data = product.slice(3, 6)


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

                    {/* Swiper */}










                    <Box sx={{ maxWidth: 700, flexGrow: 1, textAlign: 'center', zIndex: '1', position: 'relative' }}>


                        <img src='https://i.ibb.co/sy24rm4/flat-8-img-1.jpg' alt='hello' style={{ height: '100%', paddingRight: '10px', width: '275' }} />

                        {/* Card Content  */}

                        <Box sx={{ backgroundColor: 'white', zIndex: '2', position: 'relative', marginLeft: '5%', marginRight: '5%', marginTop: '30px' }}
                        >
                            {/* <CardContent sx={{ textAlign: 'left' }}>
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
                            </CardContent> */}





                            {/* <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button sx={{ color: '#20b759' }} >$ {data.price}</Button>
                                <Button variant='contained' sx={{ backgroundColor: '#20b759' }} >Show Details</Button>
                            </CardActions> */}
                        </Box>
                    </Box>
                </Box>

            </Container>
        </div >
    );
};

export default ShowProduct;