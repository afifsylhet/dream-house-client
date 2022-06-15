import { Typography, Container, Button } from '@mui/material';
import React from 'react';

const Error = () => {
    return (
        <div style={{ fontFamily: 'roboto' }}>
            <Container>
                <br />
                <br />
                <Typography variant='h1' sx={{ color: '#20e759', textAlign: 'center' }}>404</Typography>
                <br />
                <Typography variant='h3' sx={{ textAlign: 'center' }}>This page is not available</Typography>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <Button variant="contained" sx={{ backgroundColor: '#20e759', }} > Go to Home page</Button>
                </div>
                <br />
                <br />
                <br />
            </Container >
        </div >
    );
};

export default Error;