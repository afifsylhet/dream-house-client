import React from 'react';
import { data } from '../../../../fakeData'

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


const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
}));


const Product = () => {

    const product = data.slice(0, 6);
    console.log(product)
    return (
        <div>
            <Container>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="180"
                        image="https://i.ibb.co/NLM57SB/flat-1-img-1.jpg"
                    />
                    <CardContent>
                        <Typography color='primary' gutterBottom variant="h6" component="div">
                            Home in Mami, Florida
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <GoLocation /> Merrick Way, Miami, FL 33134, USA
                        </Typography>

                        <Grid container columnSpacing={1} >
                            <Grid item sx={{ minWidth: '95px' }}>
                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                    <Typography color='primary' variant='subtitle2' >Bedrooms</Typography>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <IoBedOutline size={25} style={{ color: 'lightBlue' }} />
                                        <span style={{ color: '#63bcef', marginLeft: '5px' }}>3</span>
                                    </div>
                                </Item>
                            </Grid>

                            <Grid item sx={{ minWidth: '95px' }}>
                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                    <Typography color='primary' variant='subtitle2'>Bathrooms</Typography>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaShower size={25} style={{ color: 'lightBlue' }} />
                                        <span style={{ color: '#63bcef', marginLeft: '5px' }}>3</span>
                                    </div>
                                </Item>
                            </Grid>

                            <Grid item sx={{ minWidth: '95px' }} >
                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                    <Typography color='primary' variant='subtitle2'>Area</Typography>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <BsTextarea size={25} style={{ color: 'lightBlue' }} />
                                        <span style={{ color: '#63bcef', marginLeft: '5px' }}> 5343 Sq Ft</span>
                                    </div>
                                </Item>
                            </Grid>
                        </Grid>
                        <Typography variant='body' color='primary'>For Sale</Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button >$ 260000</Button>
                        <Button variant='contained' color='primary' >Learn More</Button>
                    </CardActions>
                </Card>
            </Container>
        </div>
    )
};

export default Product;