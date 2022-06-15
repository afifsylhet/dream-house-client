import React from 'react';

import { Container, Typography, Grid, Box } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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


import Calculotor from '../shared/pages/Calculotor/Calculotor';
import { useParams } from 'react-router';

const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    // color: theme.palette.text.primary,
}));





const ProductView = (props) => {

    const { id } = useParams();

    const { product } = props;

    console.log(id)


    const data = product?.find(element => element.sl == id)

    console.log(data)


    const itemData = [
        {
            img: `${data?.img[0]}`,
            title: `${data?.location}`,
            rows: 4,
            cols: 2,
        },
        {
            img: `${data?.img[1]}`,
            title: `${data?.bedRoom}`,
            rows: 2,
        },
        {
            img: `${data?.img[2]}`,
            title: `${data?.bathRoom}`,
            rows: 2,
        },
        {
            img: `${data?.img[3]}`,
            title: `${data?.area}`,
            cols: 2,
            rows: 2,
        },
        {
            img: `${data?.img[4]}`,
            title: `${data?.img[1]}`,
            cols: 2,
            rows: 2,

        },
        {
            img: `${data?.img[5]}`,
            title: `${data?.img[2]}`,
            rows: 2,
            cols: 2,
        },
    ];

    function srcset(image, size, rows = 1, cols = 1) {
        return {
            src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
            srcSet: `${image}?w=${size * cols}&h=${size * rows
                }&fit=crop&auto=format&dpr=2 2x`,
        };
    }




    return (

        <div style={{ fontFamily: 'roboto' }}>
            <div>

                {/* Image List Starts from here */}
                <div>
                    <br />
                    <Container>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>
                                <Typography sx={{ color: 'black' }} variant='h5'>{data?.name1}</Typography>
                                <Typography sx={{ color: '#20e759' }} variant='body2'>{data?.location}</Typography>
                            </div>

                            <div style={{ borderLeft: '3px solid #795548', paddingLeft: '10px' }}>
                                <Typography sx={{ color: '#20e759' }} variant='body2'>For What</Typography>
                                <Typography sx={{ color: '#20e759' }} variant='h5'>{data?.type}</Typography>
                            </div>
                        </div>

                        {
                            data && <ImageList
                                variant="quilted"
                                cols={4}
                                rowHeight={121}
                            >
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            {...srcset(item.img, 121, item.rows, item.cols)}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        }
                    </Container>
                </div>



                {/* Image List End Here */}

                {/* Product Discprition Starts From Here */}


                <div>
                    <Container>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                            <Typography variant="h6" sx={{ color: '#795548' }}>Property ID: {data?.porpertyID} </Typography>

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
                                        <span style={{ marginLeft: '5px' }}>{data?.bedRoom}</span>
                                    </div>
                                </Item>
                            </Grid>

                            <Grid item sx={{ minWidth: '95px', color: '#795548' }}>
                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                    <Typography variant='subtitle2'>Bathrooms</Typography>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <FaShower size={25} />
                                        <span style={{ marginLeft: '5px' }}>{data?.bathRoom}</span>
                                    </div>
                                </Item>
                            </Grid>

                            <Grid item sx={{ minWidth: '95px', color: '#795548' }} >
                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                    <Typography variant='subtitle2'>Area</Typography>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <BsTextarea size={25} />
                                        <span style={{ marginLeft: '5px' }}> {data?.area} Sq Ft</span>
                                    </div>
                                </Item>
                            </Grid>

                            <Grid item sx={{ minWidth: '95px', color: '#795548' }} >
                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                    <Typography variant='subtitle2'>Garage</Typography>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <GiHomeGarage size={25} />
                                        <span style={{ marginLeft: '5px' }}> {data?.garage}</span>
                                    </div>
                                </Item>
                            </Grid>

                            <Grid item sx={{ minWidth: '95px', color: '#795548' }} >
                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                    <Typography variant='subtitle2'>Year Built</Typography>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <VscDebugRestartFrame size={25} />
                                        <span style={{ marginLeft: '5px' }}> {data?.yearBuilt}</span>
                                    </div>
                                </Item>
                            </Grid>

                            <Grid item sx={{ minWidth: '95px', color: '#795548' }} >
                                <Item sx={{ paddingLeft: '0px', marginLeft: '0px' }} >
                                    <Typography variant='subtitle2'>Lot Size</Typography>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <MdAreaChart size={25} />
                                        <span style={{ marginLeft: '5px' }}> {`${data?.area - 150}`} Sq Ft</span>
                                    </div>
                                </Item>
                            </Grid>
                        </Grid>
                        <br />
                        <Typography variant='h5' sx={{ martinTop: '15px', marginBottom: '15px', color: '#795548' }}>Description</Typography>

                        <Typography sx={{ color: '#795548', marginBottom: '15px' }}>
                            {data?.description}
                        </Typography>

                        <Typography variant='h5' sx={{ martinTop: '15px', marginBottom: '15px', color: '#795548' }}>Additional Details</Typography>

                        <Box sx={{ marginLeft: '25px', color: '#795548', marginBottom: '15px' }}>
                            <Box sx={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
                                <span style={{ fontWeight: '500', color: '#20b759' }}>BEDROOM FEATURES :</span>
                                <span> {data?.beadRomeFeatures}</span>
                            </Box>
                            <Box sx={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#FBFAF0', paddingLeft: '10px' }}>
                                <span style={{ fontWeight: '500', color: '#20b759' }}>DINING AREA : </span>
                                <span>{data?.dinningArea}</span>
                            </Box>
                            <Box sx={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
                                <span style={{ fontWeight: '500', color: '#20b759' }}>DOORS & WINDOWS :</span>
                                <span>{data?.doorsAndWindows}</span>
                            </Box>
                            <Box sx={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#FBFAF0', paddingLeft: '10px' }}>
                                <span style={{ fontWeight: '500', color: '#20b759' }}>ENTRY LOCATION : </span>
                                <span> {data?.entryLocation}</span>
                            </Box>
                            <Box sx={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
                                <span style={{ fontWeight: '500', color: '#20b759' }}>EXTERIOR CONSTRUCTION :</span>
                                <span> {data?.exteriorConstruction}</span>
                            </Box>
                            <Box sx={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#FBFAF0', paddingLeft: '10px' }}>
                                <span style={{ fontWeight: '500', color: '#20b759' }}>FIREPLACE FUEL : </span>
                                <span>{data?.firePlaceFuel}</span>
                            </Box>
                            <Box sx={{ paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px' }}>
                                <span style={{ fontWeight: '500', color: '#20b759' }}>FIREPLACE LOCATION : </span>
                                <span>{data?.firePlaceLocation}</span>
                            </Box>
                            <Box sx={{ paddingTop: '10px', paddingBottom: '10px', backgroundColor: '#FBFAF0', paddingLeft: '10px' }}>
                                <span style={{ fontWeight: '500', color: '#20b759' }}>FLOORS : </span>
                                <span>{data?.floors}</span>
                            </Box>
                        </Box>
                        <Typography variant='h5' sx={{ martinTop: '15px', color: '#795548', marginBottom: '15px' }}>Common Notes</Typography>

                        <Typography sx={{ padding: '15px', color: '#795548', backgroundColor: '#FBFAF0' }}>{data?.commonNotes}</Typography>
                    </Container >
                </div >

                <Calculotor></Calculotor>
            </div>
        </div>
    );
};




export default ProductView;