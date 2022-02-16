import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { CardActions, CardContent, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { GoLocation } from 'react-icons/go';
import { IoBedOutline } from 'react-icons/io5';
import { FaShower } from 'react-icons/fa';
import { BsTextarea } from 'react-icons/bs';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.primary,
}));

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'San Francisco – Oakland Bay Bridge, United States',
        imgPath:
            'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bird',
        imgPath:
            'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
    },
    {
        label: 'Bali, Indonesia',
        imgPath:
            'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
    },
    {
        label: 'Goč, Serbia',
        imgPath:
            'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
    },
];

const ShowProduct = () => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <div>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box>
                    <Box sx={{ maxWidth: 700, flexGrow: 1, textAlign: 'center', zIndex: '1', position: 'relative' }}>
                        <AutoPlaySwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={activeStep}
                            onChangeIndex={handleStepChange}
                            enableMouseEvents
                        >
                            {images.map((step, index) => (
                                <div key={step.label}>
                                    {Math.abs(activeStep - index) <= 2 ? (
                                        <Box
                                            component="img"
                                            sx={{
                                                height: 325,
                                                display: 'block',
                                                overflow: 'hidden',
                                                width: '100%',
                                            }}
                                            src={step.imgPath}
                                            alt={step.label}
                                        />
                                    ) : null}
                                </div>
                            ))}
                        </AutoPlaySwipeableViews>
                        <MobileStepper sx={{ marginTop: '-190px' }}
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={
                                <Button
                                    variant='contained'
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                >
                                    Next
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowLeft />
                                    ) : (
                                        <KeyboardArrowRight />
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button
                                    variant='contained'
                                    size="small" onClick={handleBack} disabled={activeStep === 0}>
                                    {theme.direction === 'rtl' ? (
                                        <KeyboardArrowRight />
                                    ) : (
                                        <KeyboardArrowLeft />
                                    )}
                                    Back
                                </Button>
                            }
                        />
                        <Box sx={{ backgroundColor: 'white', zIndex: '2', position: 'relative', marginLeft: '5%', marginRight: '5%', marginTop: '50px' }}

                        >
                            <CardContent sx={{ textAlign: 'left' }}>
                                <Typography color='primary' gutterBottom variant="h6" component="div">
                                    Home in Mami, Florida
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <GoLocation /> Merrick Way, Miami, FL 33134, USA
                                </Typography>

                                <Grid container columnSpacing={1} >
                                    <Grid item sx={{ minWidth: '95px' }}>
                                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                            <Typography color='primary' variant='subtitle2' >Bedrooms</Typography>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <IoBedOutline size={25} style={{ color: 'lightBlue' }} />
                                                <span style={{ color: 'blue', marginLeft: '5px' }}>3</span>
                                            </div>
                                        </Item>
                                    </Grid>

                                    <Grid item sx={{ minWidth: '95px' }}>
                                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                            <Typography color='primary' variant='subtitle2'>Bathrooms</Typography>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <FaShower size={25} style={{ color: 'lightBlue' }} />
                                                <span style={{ color: 'blue', marginLeft: '5px' }}>3</span>
                                            </div>
                                        </Item>
                                    </Grid>

                                    <Grid item sx={{ minWidth: '95px' }} >
                                        <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                            <Typography color='primary' variant='subtitle2'>Area</Typography>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <BsTextarea size={25} style={{ color: 'lightBlue' }} />
                                                <span style={{ color: 'blue', marginLeft: '5px' }}> 5343 Sq Ft</span>
                                            </div>
                                        </Item>
                                    </Grid>
                                </Grid>
                                <Typography variant='body' color='primary'>For Sale</Typography>
                            </CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button >$ 260000</Button>
                                <Button variant='contained' color='primary' >Learn More</Button>
                            </CardActions>
                        </Box>
                    </Box>
                </Box>

            </Container>
        </div >
    );
};

export default ShowProduct;