import { Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Calculotor.css'



const Calculotor = () => {

    const [term, setTerm] = useState(5);
    const [interest, setInterest] = useState(2);
    const [homePrice, setHomePrice] = useState(50000);
    const [downPayment, setDownPayment] = useState(25000);


    let allValueContainerObject = {
        term: term,
        interestE: interest,
        homePrice: homePrice,
        downPayment: downPayment,
    };

    const getTermValue = (e) => {
        const result = e.target.value
        setTerm(result)
    };

    const getInterestValue = (e) => {
        const result = e.target.value
        setInterest(result)
    };

    const getHomePriceValue = (e) => {
        const result = e.target.value
        setHomePrice(result)
    };

    const getDownPaymentValue = (e) => {
        const result = e.target.value
        setDownPayment(result)
    }


    const data = [
        {
            name: 'Mortgage Calculator Summary',
            Home_Price: parseInt(allValueContainerObject?.homePrice),
            Down_Payment: parseInt(allValueContainerObject?.downPayment),
            Interest_Rate: parseInt(allValueContainerObject?.interestE),
            Term: parseInt(allValueContainerObject?.term)
        },
    ];

    const toBePaidInMonth = () => {
        const reaminToBePaid = allValueContainerObject.homePrice - allValueContainerObject.downPayment;
        const numberOfMonth = term * 12;
        const totalInterest = reaminToBePaid * 10 / 100;
        const result = parseInt(totalInterest / numberOfMonth);
        return result;
    }

    const monthylyPaymet = toBePaidInMonth();

    return (

        <div style={{ fontFamily: 'roboto' }}>
            <br />
            <br />
            <br />
            <Container>
                <Typography sx={{
                    color: '#795548', fontWeight: '700'
                }} variant="h4" > Mortgage Calculator</Typography>

                <Grid container spacing={2}>
                    < Grid item xs={12} md={6} lg={8}>

                        <Typography variant='h6' sx={{ color: 'green', fontWeight: '400', marginTop: '5px', marginBottom: '5px' }}> Term Years Fixed</Typography>

                        <input style={{ width: '100%', height: '35px', marginTop: '5px', marginBottom: '5px', paddingLeft: '10px', border: '2px solid #ADD8E6' }}
                            value={term}
                        />

                        <input type="range"
                            min="5" max="25" step='5'
                            style={{ marginTop: '5px', marginBottom: '5px', width: '100%' }}
                            onChange={getTermValue}
                            value={term}
                        />
                        <br />

                        <Typography variant='h6' sx={{ color: 'green', fontWeight: '400', marginTop: '5px', marginBottom: '5px' }}> Interest in Parcent</Typography>

                        <input style={{ width: '100%', height: '35px', marginTop: '5px', marginBottom: '5px', paddingLeft: '10px', border: '2px solid #ADD8E6' }}
                            value={interest}
                            onChange={getInterestValue}
                        />

                        <input type="range"
                            min="1" max="10"
                            style={{ marginTop: '5px', marginBottom: '5px', width: '100%' }}
                            onChange={getInterestValue}
                            value={interest}
                        />
                        <br />

                        <Typography variant='h6' sx={{ color: 'green', fontWeight: '400', marginTop: '5px', marginBottom: '5px' }}> Home Price in USD</Typography>

                        <input style={{ width: '100%', height: '35px', marginTop: '5px', marginBottom: '5px', paddingLeft: '10px', border: '2px solid #ADD8E6' }}
                            value={homePrice}
                            onChange={getHomePriceValue}
                        />

                        <input type="range"
                            min="50000" max="1650000"
                            style={{ marginTop: '5px', marginBottom: '5px', width: '100%' }}
                            onChange={getHomePriceValue}
                            value={homePrice}
                        />
                        <br />
                        <Typography variant='h6' sx={{ color: 'green', fontWeight: '400', marginTop: '5px', marginBottom: '5px' }}> Down Payment in USD</Typography>

                        <input style={{ width: '100%', height: '35px', marginTop: '5px', marginBottom: '5px', paddingLeft: '10px', border: '2px solid #ADD8E6' }}
                            value={downPayment}
                            onChange={getDownPaymentValue}
                        />

                        <input type="range"
                            min="25000" max="1650000"
                            style={{
                                marginTop: '5px', marginBottom: '5px', width: '100%',
                            }}
                            onChange={getDownPaymentValue}
                            value={downPayment}
                        />
                        <br />
                        <br />

                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>

                        <ResponsiveContainer width={'100%'} height={350}>
                            <BarChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Home_Price" fill="#795548" />
                                <Bar dataKey="Down_Payment" fill="#20e759" />
                                <Bar dataKey="Interest_Rate" fill="#808080" />
                            </BarChart>
                        </ResponsiveContainer>
                        <br />
                        <div style={{
                            paddingTop: '8px', paddingBottom: '5px', backgroundColor: '#795548', margin: '8px'
                        }}>
                            <h3 style={{ textAlign: 'center' }
                            } > Your Monthly Payment is </h3>
                            <h3 style={{ textAlign: 'center', color: 'white', fontWeight: '500' }}> {monthylyPaymet} USD Per Month </h3>
                        </div>
                    </Grid>
                </Grid>
            </Container >
            <br />
            <br />
        </div >
    );
};

export default Calculotor;