import { Grid, Typography, Container, Box } from '@mui/material';
import React from 'react';
import CountUp from 'react-countup';


const AfterBenner = () => {
    return (
        <div>
            <br />
            <Container>
                <Grid container>
                    <Grid item xs={12} md={6} lg={6} sx={{ padding: '5px' }}>
                        <Typography variant='h6' sx={{ fontWeight: '500' }}>
                            Trusted by companies
                        </Typography>
                        <Typography variant='h6' sx={{ fontWeight: '500', marginBottom: '15px' }}>
                            and business owners worldwide
                        </Typography>

                        <Typography sx={{ fontWeight: '400', marginBottom: '15px', color: '#20b759' }}>
                            orem ipsum, in graphical and textual context, refers to filler text that is placed in a document or visual presentation.Lorem ipsum is derived from the Latin "dolorem ipsum" roughly translated as
                        </Typography>

                        <div style={{ display: 'flex' }}>
                            <div>
                                <img src="https://thumbs.dreamstime.com/z/cute-girl-vector-chef-cartoon-spoon-wear-pineapple-dress-kawaii-food-shop-logo-kid-dessert-homemade-series-sweet-cooking-216872391.jpg" alt="Vactor pic" style={{ borderRadius: '50%', height: '80px', width: 'auto', marginRight: '12px' }} />
                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <p style={{ fontWeight: '500', margin: '0px' }}>Harry Porder</p>
                                <p style={{ fontWeight: '400px', margin: '0px', color: '#20b759' }}>Company Owner</p>
                            </div>
                        </div>

                    </Grid>
                    <Grid item xs={12} md={3} lg={3} sx={{ padding: '5px' }}>

                        <Box sx={{ fontSize: '35px', fontWeight: '700', display: 'flex' }}>
                            <CountUp end={30000} duration={2.75} />
                            <Typography sx={{ fontSize: '35px' }}>+</Typography>
                        </Box>

                        <Typography sx={{ fontWeight: '600', marginBottom: '11px', marginTop: '11px' }}> More Than 30,000 Happy Customers</Typography>
                        <Typography sx={{ fontWeight: '350' }}>Providing high quality and functioning themes is our main focus resulting in thousands of satisfied customers</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} lg={3} sx={{ padding: '5px' }}>

                        <Box sx={{ fontSize: '35px', fontWeight: '700', display: 'flex' }}>
                            <CountUp end={1500} duration={2.75} />
                            <Typography sx={{ fontSize: '35px' }}>+</Typography>
                        </Box>

                        <Typography sx={{ fontWeight: '600', marginBottom: '11px', marginTop: '11px' }}> Over 1,600 reviews with average 5 Star</Typography>
                        <Typography sx={{ fontWeight: '350' }}>Our satisfied customers rewards us with their positive feedback and this is publicity that can not be bought</Typography>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default AfterBenner;