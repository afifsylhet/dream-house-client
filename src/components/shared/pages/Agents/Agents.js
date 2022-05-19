import React from 'react';
import { Container, Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

const Agents = () => {


    const data = [
        {
            name: 'Robart Jeams',
            image: 'https://i.ibb.co/GxzX8m1/Client-4.jpg',
            id: 1,
            phoneNumber: '3-294-856-7091',
            email: 'r_jeams@dreamhouse.com',
            numberOfProperty: '7'
        },
        {
            name: 'Judy Carolin',
            image: 'https://i.ibb.co/SxFKmyC/Client-5.jpg',
            id: 2,
            phoneNumber: '5-124-356-2890',
            email: 'carolin@dreamhouse.com',
            numberOfProperty: '12'
        },
        {
            name: 'Huyen Shangud',
            image: 'https://i.ibb.co/gjqSwyX/Client-2.jpg',
            id: 3,
            phoneNumber: '4-904-351-0804',
            email: 'J.hooks@dreamhouse.com',
            numberOfProperty: '6'
        },
        {
            name: 'Jayklinnn Hooks',
            image: 'https://i.ibb.co/p32qdxv/Client-6.jpg',
            id: 4,
            phoneNumber: '1-224-956-7893',
            email: 'J.hooks@dreamhouse.com',
            numberOfProperty: '10'
        }
    ]

    return (
        <div>
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <br />
                    <Typography sx={{ color: '#8ea69a' }} > Meet Our</Typography>
                    <Typography sx={{ color: '#1a1a1a', marginY: '3px', fontWeight: '400' }} variant="h4"> Agents</Typography>
                    <Typography sx={{ color: '#8ea69a' }}> Get in touch with our real estate experts.</Typography>
                </Box>

                <br />
                <Grid container spacing={2}>
                    {data.map(data =>
                        < Grid item xs={12} md={6} lg={3} key={data.id} data={data} >
                            <Card sx={{ maxWidth: '345px', marginX: 'auto' }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={data.image}
                                        alt="green iguana"
                                        sx={{ width: 'auto', height: '160px', marginX: 'auto', marginTop: '10px' }}
                                    />
                                    <br />
                                    <CardContent>
                                        <Typography variant="h6" sx={{ textAlign: 'center', fontWeight: '500', marginBottom: '11px' }}>
                                            {data.name}
                                        </Typography>
                                        <Typography sx={{ textAlign: 'center', fontWeight: '400', marginBottom: '11px', color: '#20b759' }}>
                                            {data.phoneNumber}
                                        </Typography>
                                        <Typography sx={{ textAlign: 'center', fontWeight: '400', marginBottom: '11px' }}>
                                            {data.email}
                                        </Typography>
                                        <Typography vairant="h5" sx={{ textAlign: 'center', fontWeight: '700', marginBottom: '11px', color: '#20b759' }}>
                                            {data.numberOfProperty}
                                        </Typography>
                                        <Typography sx={{ textAlign: 'center', fontWeight: '500', marginBottom: '11px' }}>
                                            Listed Properties
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )}
                </Grid>





            </Container>
        </div >
    );
};

export default Agents;