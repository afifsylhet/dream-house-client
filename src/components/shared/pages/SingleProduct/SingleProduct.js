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
        <div>
            <SingleProductHeading></SingleProductHeading>
            <br />
            <br />
            <br />
            <Container>
                <Paper elevation={8}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={8}>
                                <Item sx={{ textAlign: 'left' }}>




                                </Item>

                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Item>xs=6</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
};

export default SingleProduct;