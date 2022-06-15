import { Container } from '@mui/material';
import React from 'react';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import SingleProductHeading from '../SingleProductHeading/SingleProductHeading';

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const SingleProduct = () => {
    return (
        <div style={{ fontFamily: 'roboto' }}>
            <SingleProductHeading></SingleProductHeading>

            <Container>

            </Container>
        </div>
    );
};

export default SingleProduct;