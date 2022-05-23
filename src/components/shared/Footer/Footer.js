import { Button, Grid, TextField, Typography, } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';


import { FaHome } from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterSquare } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { SiPinterest } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { ImSkype } from 'react-icons/im';
import { HiCursorClick } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { BsWhatsapp } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';


const Footer = () => {
    return (
        <div style={{ backgroundColor: '#303030', padding: '20px' }}>

            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }}  >

                    <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }} >
                        <span>
                            <FaHome style={{ marginRight: '5px', color: 'white', fontSize: '70px' }} />
                        </span>

                        <span style={{ marginLeft: '5px', color: 'white', fontSize: '22px' }} >
                            Dream House Real Estate
                        </span>
                    </Grid>

                    <Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', color: 'gray' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <AiFillFacebook style={{ fontSize: '30px', margin: '7px' }} />
                            <AiFillTwitterSquare style={{ fontSize: '30px', margin: '7px' }} />
                            <BsLinkedin style={{ fontSize: '25px', margin: '7px' }} />
                            <FaInstagramSquare style={{ fontSize: '30px', margin: '7px' }} />
                            <SiPinterest style={{ fontSize: '30px', margin: '7px' }} />
                            <BsYoutube style={{ fontSize: '30px', margin: '7px' }} />
                            <ImSkype style={{ fontSize: '30px', margin: '7px' }} />
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <br />
            <hr />
            <br />
            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }} >
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h6' sx={{ color: 'white', marginBottom: '10px' }}>Quick Link</Typography>
                        <Typography sx={{ color: 'gray' }}> <HiCursorClick style={{ marginRight: '5px' }} /> Home</Typography>
                        <Typography sx={{ color: 'gray' }}> <HiCursorClick style={{ marginRight: '5px' }} />About</Typography>
                        <Typography sx={{ color: 'gray' }}> <HiCursorClick style={{ marginRight: '5px' }} />All Listing</Typography>
                        <Typography sx={{ color: 'gray' }}> <HiCursorClick style={{ marginRight: '5px' }} />Mortgage Calculator</Typography>
                        <Typography sx={{ color: 'gray' }}> <HiCursorClick style={{ marginRight: '5px' }} />Contact </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h6' sx={{ color: 'white', marginBottom: '10px' }}>Contact Us</Typography>
                        <Typography sx={{ color: 'gray' }}>  <GoLocation style={{ marginRight: '10px' }} />3018 Grand Aven, Caconut Grave </Typography>
                        <Typography sx={{ color: 'gray', marginLeft: '25px' }}> Merick Way, FL 12365 </Typography>
                        <br />
                        <Typography sx={{ color: 'gray' }}>  <BsWhatsapp style={{ marginRight: '10px' }} />+880-1739-945728 </Typography>
                        <br />
                        <Typography sx={{ color: 'gray' }}>  <MdMarkEmailUnread style={{ marginRight: '10px' }} />afif.ahmed@yahoo.com </Typography>


                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant='h6' sx={{ color: 'white', marginBottom: '10px' }}>Remain Updated</Typography>

                        <TextField
                            required
                            id="outlined-required"
                            defaultValue="Your email address"
                            sx={{ backgroundColor: 'white', width: '100%', marginBottom: '20px' }}
                        />
                        <Button variant="contained" sx={{ backgroundColor: 'green' }}>Sign Up</Button>
                    </Grid>
                </Grid>

            </Box>


        </div >
    );
};

export default Footer;