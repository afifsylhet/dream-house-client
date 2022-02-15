import React from 'react';
import './ImageSlide.css'

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Checkbox } from '@mui/material';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const images = [
    {
        imgPath:
            'https://i.ibb.co/NLM57SB/flat-1-img-1.jpg',
    },
    {
        imgPath:
            'https://i.ibb.co/4fF1c3m/flat-2-img-1.jpg',
    },
    {
        imgPath:
            'https://i.ibb.co/vQXKsbc/flat-3-img-1.jpg',
    },
    {
        imgPath:
            'https://i.ibb.co/Bspq2mD/flat-4-img-1.jpg',
    },
];


const ImgaeSlide = () => {

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

            <Box className='topFormContainer'>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.imgPath}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        display: 'block',
                                        maxWidth: '100%',
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
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
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
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>

            <Box className='topForm'
                sx={{ padding: '20px', fontWeight: 'bold', backgroundColor: 'white' }}
            >
                <Typography variant="h5" component="div" color='primary' sx={{ marginBottom: '5px' }}>
                    Let Us Call You!
                </Typography>
                <Typography color='primary' sx={{ marginBottom: '20px' }}>
                    To help you choose your property                </Typography>

                <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                    <TextField id="outlined-basic" label="Your Name" variant="outlined" size="small" color='primary' sx={{ width: '47%' }} />

                    <TextField id="outlined-basic" label="Your Cell Number" variant="outlined" size="small" color='primary' sx={{ width: '47%' }} />
                </div>

                <TextField
                    label="Tell us about desired property"
                    variant="outlined"
                    color='primary'
                    size="small"
                    multiline
                    rows={4}
                    sx={{ width: '100%', marginBottom: '20px' }}
                />
                <Typography color='primary' sx={{ marginBottom: '5px' }}>GDPR Agreement *</Typography>

                <div
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}
                >
                    <Checkbox sx={{ padding: '0px', }} />

                    <Typography
                        color='primary'
                        sx={{ marginLeft: '10px', display: 'inline' }}
                    >
                        I consent to having this website store my submitted information so they can respond to my inquiry</Typography>
                </div>

                <Button
                    variant='contained'
                    color='primary'
                    sx={{ width: '100%', padding: '10px 0px' }}
                >
                    Submit
                </Button>
            </Box>
        </div>
    );
};

export default ImgaeSlide;