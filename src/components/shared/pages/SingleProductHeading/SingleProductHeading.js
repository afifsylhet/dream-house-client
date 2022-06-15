import { Container, Typography } from '@mui/material';
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


function srcset(image, size, rows = 2, cols = 3) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}

const SingleProductHeading = () => {
    return (
        <div style={{ fontFamily: 'roboto' }}>
            <br />
            <Container>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <Typography sx={{ color: 'black' }} variant='h5'>Home in Merrick Way</Typography>
                        <Typography sx={{ color: '#20e759' }} variant='body2'>Merrick Way, Miami, FL 33134, USA</Typography>
                    </div>

                    <div style={{ borderLeft: '3px solid #795548', paddingLeft: '10px' }}>
                        <Typography sx={{ color: '#20e759' }} variant='body2'>For Sale</Typography>
                        <Typography sx={{ color: '#20e759' }} variant='h5'>For Sale</Typography>
                    </div>
                </div>
                <ImageList
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

            </Container>
        </div>
    );
};


const itemData = [
    {
        img: "https://i.ibb.co/NLM57SB/flat-1-img-1.jpg",
        title: 'House Front',
        rows: 4,
        cols: 2,
    },
    {
        img: "https://i.ibb.co/YpJnWby/flat-1-img-2.jpg",
        title: 'View point',
        rows: 2,
    },
    {
        img: "https://i.ibb.co/GJ24pz5/flat-1-img-3.jpg",
        title: 'End point',
        rows: 2,
    },
    {
        img: "https://i.ibb.co/9m0hHf2/flat-1-img-4.jpg",
        title: 'Hello point',
        cols: 2,
        rows: 2,
    },
    {
        img: "https://i.ibb.co/Qb3Rqpd/flat-1-img-5.jpg",
        title: 'Tarsety point',
        cols: 2,
        rows: 2,

    },
    {
        img: "https://i.ibb.co/F0pMrGw/flat-1-img-6.jpg",
        title: 'Honey pint',
        rows: 2,
        cols: 2,
    },
];

export default SingleProductHeading;