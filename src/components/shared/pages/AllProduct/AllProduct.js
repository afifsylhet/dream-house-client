import React, { useState, useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid, Box } from '@mui/material';

import { GoLocation } from 'react-icons/go';
import { IoBedOutline } from 'react-icons/io5';
import { FaShower } from 'react-icons/fa';
import { BsTextarea } from 'react-icons/bs';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';


const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    // color: theme.palette.text.primary,
}));
const AllProduct = (props) => {

    const { product } = props;


    const data = product;

    return (
        <div>
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <br />
                    <Typography sx={{ color: '#8ea69a' }} > All listed </Typography>
                    <Typography sx={{ color: '#1a1a1a', marginY: '3px', fontWeight: '400' }} variant="h4"> Properties</Typography>
                    <Typography sx={{ color: '#8ea69a' }}> Check out from our all properties.</Typography>
                </Box>


                <br />

                <Grid container spacing={{ xs: 2, md: 3 }} >
                    {data.map((data) => (
                        <Grid item xs={12} md={6} lg={4} data={data} key={data.sl}>
                            <Item sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="180"
                                        image={data.img}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div" sx={{ color: 'black', fontWeight: '400' }}>
                                            {data.name1}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#20b759' }}>
                                            <GoLocation /> {data.location}
                                        </Typography>

                                        <Grid container columnSpacing={1} >
                                            <Grid item sx={{ minWidth: '95px' }}>
                                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                                    <Typography sx={{ color: 'black' }} variant='subtitle2' >Bedrooms</Typography>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <IoBedOutline size={25} style={{ color: '#20b759' }} />
                                                        <span style={{ color: '#20b759', marginLeft: '5px' }}>{data.bedRoom}</span>
                                                    </div>
                                                </Item>
                                            </Grid>

                                            <Grid item sx={{ minWidth: '95px' }}>
                                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                                    <Typography sx={{ color: 'black' }} variant='subtitle2'>Bathrooms</Typography >
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <FaShower size={25} style={{ color: '#20b759' }} />
                                                        <span style={{ color: '#20b759', marginLeft: '5px' }}>{data.bathRoom}</span>
                                                    </div>
                                                </Item>
                                            </Grid>

                                            <Grid item sx={{ minWidth: '95px' }} >
                                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                                    <Typography sx={{ color: 'black' }} variant='subtitle2'>Area</Typography>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <BsTextarea size={25} style={{ color: '#20b759' }} />
                                                        <span style={{ color: '#20b759', marginLeft: '5px' }}> {data.area} Sq Ft</span>
                                                    </div>
                                                </Item>
                                            </Grid>
                                        </Grid>
                                        <Typography variant='body' sx={{ color: 'black' }}>{data.type}</Typography>
                                    </CardContent>
                                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button sx={{ color: '#20b759' }}>$ {data.price}</Button>

                                        <NavLink to={`/productView/${data.sl}`} style={{ textDecoration: 'none' }}>
                                            <Button variant='contained' sx={{ backgroundColor: '#20b759' }} > Show Details...</Button>
                                        </NavLink>


                                    </CardActions>
                                </Card>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <br />
        </div >
    );
};

export default AllProduct;