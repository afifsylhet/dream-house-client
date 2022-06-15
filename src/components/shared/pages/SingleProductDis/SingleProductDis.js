import { Container, Typography, Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { MdOutlineFavorite } from 'react-icons/md';
import { IoMdGitCompare } from 'react-icons/io';
import { BiPrinter } from 'react-icons/bi';
import { GiHomeGarage } from 'react-icons/gi';
import { VscDebugRestartFrame } from 'react-icons/vsc';
import { MdAreaChart } from 'react-icons/md';

import { IoBedOutline } from 'react-icons/io5';
import { FaShower } from 'react-icons/fa';
import { BsTextarea } from 'react-icons/bs';
import { styled } from '@mui/material/styles';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    // color: theme.palette.text.primary,
}));

const SingleProductDis = () => {
    return (
        <div style={{ fontFamily: 'roboto' }}>
            <Container>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6" sx={{ color: '#795548' }}>Property ID: PG-2022-01 </Typography>

                    <div>
                        <FaShareAlt style={{ fontSize: "30px", marginLeft: "25px", color: '#795548' }} />

                        <MdOutlineFavorite style={{ fontSize: "30px", marginLeft: "25px", color: '#795548' }} />

                        <IoMdGitCompare style={{ fontSize: "30px", marginLeft: "25px", color: '#795548' }} />

                        <BiPrinter style={{ fontSize: "30px", marginLeft: "25px", color: '#795548' }} />
                    </div>
                </Box>
                <br />
                <Grid container columnSpacing={1} >
                    <Grid item sx={{
                        minWidth: '95px', color: '#795548'
                    }}>
                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px', }} >
                            <Typography variant='subtitle2' >Bedrooms</Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <IoBedOutline size={25} />
                                <span style={{ marginLeft: '5px' }}>3</span>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item sx={{ minWidth: '95px', color: '#795548' }}>
                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                            <Typography variant='subtitle2'>Bathrooms</Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <FaShower size={25} />
                                <span style={{ marginLeft: '5px' }}>3</span>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item sx={{ minWidth: '95px', color: '#795548' }} >
                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                            <Typography variant='subtitle2'>Area</Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <BsTextarea size={25} />
                                <span style={{ marginLeft: '5px' }}> 5343 Sq Ft</span>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item sx={{ minWidth: '95px', color: '#795548' }} >
                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                            <Typography variant='subtitle2'>Garage</Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <GiHomeGarage size={25} />
                                <span style={{ marginLeft: '5px' }}> 2</span>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item sx={{ minWidth: '95px', color: '#795548' }} >
                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                            <Typography variant='subtitle2'>Year Built</Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <VscDebugRestartFrame size={25} />
                                <span style={{ marginLeft: '5px' }}> 2</span>
                            </div>
                        </Item>
                    </Grid>

                    <Grid item sx={{ minWidth: '95px', color: '#795548' }} >
                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                            <Typography variant='subtitle2'>Lot Size</Typography>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <MdAreaChart size={25} />
                                <span style={{ marginLeft: '5px' }}> 4500 Sq Ft</span>
                            </div>
                        </Item>
                    </Grid>
                </Grid>
                <br />
                <Typography variant='h5' sx={{ martinTop: '15px', marginBottom: '15px', color: '#795548' }}>Description</Typography>

                <Typography sx={{ color: '#795548', marginBottom: '15px' }}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Boslkjdf
                </Typography>

                <Typography variant='h5' sx={{ martinTop: '15px', marginBottom: '15px', color: '#795548' }}>Additional Details</Typography>

                <Box sx={{ marginLeft: '25px', color: '#795548', marginBottom: '15px' }}>
                    <Box sx={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
                        <span>BEDROOM FEATURES  :</span>
                        <span> Main Floor Master Bedroom, Walk-In Closet</span>
                    </Box>
                    <Box sx={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#FBFAF0', paddingLeft: '10px' }}>
                        <span>DINING AREA : </span>
                        <span>Breakfast Counter/Bar, Living/Dining Combo</span>
                    </Box>
                    <Box sx={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
                        <span>DOORS & WINDOWS :</span>
                        <span>Bay Window</span>
                    </Box>
                    <Box sx={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#FBFAF0', paddingLeft: '10px' }}>                        <span>ENTRY LOCATION : </span>
                        <span> Mid Level</span>
                    </Box>
                    <Box sx={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
                        <span>EXTERIOR CONSTRUCTION :</span>
                        <span> Wood</span>
                    </Box>
                    <Box sx={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#FBFAF0', paddingLeft: '10px' }}>                        <span>FIREPLACE FUEL : </span>
                        <span>Pellet Stove</span>
                    </Box>
                    <Box sx={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
                        <span>FIREPLACE LOCATION : </span>
                        <span>Living Room</span>
                    </Box>
                    <Box sx={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#FBFAF0', paddingLeft: '10px' }}>                        <span>FLOORS : </span>
                        <span>Raised Foundation, Vinyl Tile, Wall-to-Wall Carpet, Wood</span>
                    </Box>
                </Box>
                <Typography variant='h5' sx={{ martinTop: '15px', color: '#795548', marginBottom: '15px' }}>Common Notes</Typography>

                <Typography sx={{ padding: '15px', color: '#795548', backgroundColor: '#FBFAF0' }}>This is a sample note to share some basic information on all properties. This note can be enabled or disabled from Real Homes settings and its text plus label is fully customizable. Afif</Typography>
            </Container >
        </div >
    );
};

export default SingleProductDis;