import React from 'react';
import { Container, Box, Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';

const News = () => {
    const data = [
        {
            porpertyName: 'Gallery Post Format',
            image: 'https://i.ibb.co/9m0hHf2/flat-1-img-4.jpg',
            date: 'April 12, 2022',
            type: 'In Luxurys',
            author: 'Robart Jeams',
            details: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ',
            id: 1,
        },
        {
            porpertyName: 'Image Post Format',
            image: 'https://i.ibb.co/NjNRZ1m/flat-6-img-2.jpg',
            date: 'April 15, 2022',
            type: 'In Luxurys',
            author: 'Robart Jeams',
            details: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ',
            id: 2,
        },
        {
            porpertyName: 'Video Post Format',
            image: 'https://i.ibb.co/qkSWngy/flat-3-img-5.jpg',
            date: 'April 18, 2022',
            type: 'In Market Trends',
            author: 'Robart Jeams',
            details: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface ',
            id: 3,
        },

    ]

    return (
        <div>
            <Container>
                <Box sx={{ textAlign: 'center' }}>
                    <br />
                    <Typography sx={{ color: '#8ea69a' }} > Check out recent</Typography>
                    <Typography sx={{ color: '#1a1a1a', marginY: '3px', fontWeight: '400' }} variant="h4"> News & Updates</Typography>
                    <Typography sx={{ color: '#8ea69a' }}> From real estate industry and beyond.</Typography>
                </Box>

                <br />
                <Grid container spacing={2}  >
                    {data.map(data =>
                        < Grid item xs={12} md={6} lg={4} key={data.id} data={data} >
                            <Card sx={{ maxWidth: '345px', marginX: 'auto' }} >
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={data.image}
                                        alt="green iguana"
                                        sx={{ width: 'auto', height: '210px', marginX: 'auto' }}
                                    />
                                    <CardContent>
                                        <div style={{ display: 'flex' }}>
                                            <Typography sx={{ fontWeight: '400', marginBottom: '7px', marginRight: "8px" }}>
                                                {data.date}
                                            </Typography>
                                            <Typography sx={{ textAlign: 'center', fontWeight: '400', marginBottom: '7px', color: '#20b759' }}>
                                                {data.type}
                                            </Typography>
                                        </div>

                                        <Typography variant="h6" sx={{ fontWeight: '500', marginBottom: '7px' }}>
                                            {data.porpertyName}
                                        </Typography>

                                        <Typography sx={{ fontWeight: '400', marginBottom: '7px' }}>
                                            {data.details}
                                        </Typography>
                                        <Box sx={{ display: 'flex' }}>
                                            <Typography sx={{ fontWeight: '500', marginBottom: '7px', color: '#20b759', marginRight: '5px' }}>By</Typography>
                                            <Typography sx={{ fontWeight: '500' }}>
                                                {data.author}
                                            </Typography>
                                        </Box>
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


export default News;