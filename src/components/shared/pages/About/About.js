import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';

import { FaSearchLocation } from 'react-icons/fa'
import { AiFillDatabase } from 'react-icons/ai'
import { MdDataUsage } from 'react-icons/md'
import { FaPeopleArrows } from 'react-icons/fa'


const About = () => {
    return (
        <div style={{ backgroundColor: '#f7f8f9' }}>
            <Box sx={{ backgroundColor: '#20e759', paddingX: '15%' }}>
                <br />
                <br />
                <Typography variant="h2" sx={{ textAlign: 'center', color: 'white' }}>Homes and Rentals</Typography>
                <br />
                <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>Dream House Real Estate is the award-winning residential property search website that is the source of homes for sale and rentals in the state of United Statees.</Typography>
                <br />
                <br />
            </Box>
            <Container sx={{ backgroundColor: '#f7f8f9' }}>
                <br />
                <br />
                <Box>
                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: '600' }}>Connecting Sellers, Buyers and Renters with </Typography>
                    <Typography variant='h5' sx={{ textAlign: 'center', fontWeight: '600', color: '#20e759' }}>Dream House Real Estate </Typography>
                </Box>
                <br />
                <br />


                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} >
                        <Grid item xs={12} md={4}>
                            <Typography variant='h4' sx={{ color: '#20e759', fontWeight: '700', marginBottom: '20px' }}>
                                Search
                            </Typography>
                            <Typography>
                                Search the most comprehensive and current real estate information in Texas.
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <ul>
                                    <li>120K+ Properties for sale, lease and recently sold</li>
                                    <li>1.2M Property tax records and assessed values</li>
                                    <li>5K Neighborhood and subdivision information</li>
                                    <li>7K Public schools with ratings and statistics</li>
                                    <li>50 Real estate firms</li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ padding: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FaSearchLocation style={{ color: '#20e759', width: '50%', height: 'auto', textAlign: 'center' }} />
                        </Grid>
                    </Grid>
                </Box>

                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} >
                        <Grid item xs={12} md={4}>
                            <Typography variant='h4' sx={{ color: '#20e759', fontWeight: '700', marginBottom: '20px' }}>
                                Rich Data
                            </Typography>
                            <Typography>
                                Discover information that is integrated throughout the site.
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <ul>
                                    <li>Visual presentation of property lines, neighborhood and school boundaries</li>
                                    <li>Calculate drive time to any destination - work, school, home and more</li>
                                    <li>Discover nearby restaurants, parks, places of worship and more</li>
                                    <li>Find what listings are trending (based on views) in your neighborhood</li>
                                    <li>Local events and activities happening near you</li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ padding: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <AiFillDatabase style={{ color: '#20e759', width: '50%', height: 'auto', textAlign: 'center' }} />
                        </Grid>
                    </Grid>
                </Box>
                <br />
                <br />
                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} >
                        <Grid item xs={12} md={4}>
                            <Typography variant='h4' sx={{ color: '#20e759', fontWeight: '700', marginBottom: '20px' }}>
                                Enhanced Experience
                            </Typography>
                            <Typography>
                                Experience the creative new features
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <ul>
                                    <li>Find similar homes for sale or lease around listings</li>
                                    <li>Find REALTORS® with ratings, designations, languages/cultures</li>
                                    <li>Search homes within school boundaries
                                        Mark any property as your favorite and share it</li>
                                    <li>Send your property search to your phone</li>

                                </ul>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ padding: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <MdDataUsage style={{ color: '#20e759', width: '50%', height: 'auto', textAlign: 'center' }} />
                        </Grid>
                    </Grid>
                </Box>
                <br />
                <br />
                <Box>
                    <Grid container spacing={{ xs: 2, md: 3 }} >
                        <Grid item xs={12} md={4}>
                            <Typography variant='h4' sx={{ color: '#20e759', fontWeight: '700', marginBottom: '20px' }}>
                                Engage
                            </Typography>
                            <Typography>
                                Participate in the conversation
                            </Typography>

                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <ul>
                                    <li>Ask questions and find answers in the Real Estate Community</li>
                                    <li>Rate neighborhoods and schools</li>
                                    <li>Comment on blog posts in blogosphere</li>
                                </ul>
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ padding: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FaPeopleArrows style={{ color: '#20e759', width: '50%', height: 'auto', textAlign: 'center' }} />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    );
};

export default About;