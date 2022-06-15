import { TextField, Grid, Typography, Container, Box, Button } from '@mui/material';
import React from 'react';

const Contact = () => {


    return (
        <div style={{ backgroundColor: '#f7f8f9', fontFamily: 'roboto' }} >
            <Container>
                <br />
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <Grid item xs={12} md={8} >
                        <br />
                        <br />
                        <Box sx={{ backgroundColor: 'white', padding: '22px' }}>
                            <Typography sx={{ fontWeight: '400' }}>
                                Please fill out the bellow form to contact us.We are happy to answer your queries.lease fill out the bellow form to contact us.We are happy to answer your queries.lease fill out the bellow form to contact us.We are happy to answer your queries.lease fill out the bellow form to contact us.We are happy to answer your queries.
                            </Typography>
                            <br />
                            <form>
                                <Grid container spacing={{ xs: 2, md: 3 }} >
                                    <Grid item xs={12} md={6} >
                                        <Typography >First Name</Typography>
                                        <TextField id="outlined-basic"
                                            variant="outlined"
                                            placeholder="Enter your first Name"
                                            sx={{ width: '100%' }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <Typography >Last Name</Typography>
                                        <TextField id="outlined-basic"
                                            variant="outlined"
                                            placeholder="Enter your last Name"
                                            sx={{ width: '100%' }}
                                        />
                                    </Grid>
                                </Grid>

                                <Typography sx={{ marginTop: '20px' }}>Email</Typography>
                                <TextField id="outlined-basic"
                                    variant="outlined"
                                    placeholder="Enter your Email"
                                    sx={{ width: '100%' }}
                                />

                                <Typography sx={{ marginTop: '20px' }}>Massage</Typography>
                                <TextField
                                    style={{ width: '100%' }}
                                    id="outlined-multiline-static"
                                    multiline
                                    rows={4}
                                    placeholder="Please type your massage"
                                />
                                <Button sx={{ width: '100%', marginTop: '20px', backgroundColor: '#20e759' }} variant="contained" >Submit</Button>
                                <br />

                            </form>
                        </Box>

                    </Grid>

                    <Grid item xs={12} md={4}>
                        <br />
                        <br />
                        <Box sx={{ backgroundColor: 'white', padding: '22px' }}>
                            <Typography sx={{ fontWeight: '600', marginTop: '20px' }}>
                                For inquiries contact:
                            </Typography>
                            <Typography sx={{ fontWeight: '500', marginTop: '20px', marginBottom: '10px' }}>
                                Amy Imran
                            </Typography>

                            <Typography sx={{ fontWeight: '400' }}>
                                Public Relations Manager                            </Typography>
                            <Typography sx={{ fontWeight: '400' }}>
                                774 NE 84th St Miamai, FL 38790
                            </Typography>
                            <Typography sx={{ fontWeight: '400' }}>
                                amy.imran@dreamhouse.com                            </Typography>
                        </Box>

                        <Box sx={{ backgroundColor: 'white', padding: '22px' }}>
                            <Typography sx={{ fontWeight: '500', marginBottom: '10px' }}>
                                Mical Jhon
                            </Typography>

                            <Typography sx={{ fontWeight: '400' }}>
                                Public Relations Officer                            </Typography>
                            <Typography sx={{ fontWeight: '400' }}>
                                774 NE 84th St Miamai, FL 38790
                            </Typography>
                            <Typography sx={{ fontWeight: '400' }}>
                                mical.jhon@dreamhouse.com                            </Typography>
                        </Box>
                        <br />
                        <Box sx={{ backgroundColor: 'white', padding: '22px' }}>
                            <Typography sx={{ fontWeight: '600', marginBottom: '10px' }}>
                                Corporate Headquarters
                            </Typography>
                            <Typography sx={{ fontWeight: '400' }}>
                                1584 Biscayane Boulevard                           </Typography>
                            <Typography sx={{ fontWeight: '400' }}>
                                Miamai FY, 33176
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <br />
        </div >
    );
};

export default Contact;