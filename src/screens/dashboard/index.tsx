import React from 'react';
import { Box, Button, Divider, IconButton, Typography, useTheme } from '@mui/material';
import Header from '../../components/Header';
import Stats from '../../components/Stats';
import { MailOutline, PersonAddOutlined, TrafficOutlined, PointOfSaleOutlined, DownloadOutlined } from '@mui/icons-material';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import GeoChart from '../../components/GeoMap';
import { tokens } from '../../theme';
import { mockTransactions } from '../../data/mockData';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Dashboard() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(
        <Box m="20px">
            <Box display='flex' justifyContent='space-between' alignItems='center'>
                <Header title='DASHBOARD' subtitle='Welcome to your dashboard' />
                <Box>
                    <Button sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: '14px',
                        p: '10px 20px',
                        fontWeight: 'bold',
                    }}
                    variant='contained'> <DownloadOutlined /> Download Reports</Button>
                </Box>
            </Box>
            {/* Grid and Charts */}
            <Box
                display='grid'
                gridTemplateColumns='repeat(12, 1fr)'
                gridAutoRows='140px'
                gap='16px'
            >
                {/* First Row Starts Here */}
                <Box gridColumn='span 3' sx={{ backgroundColor: colors.primary[400] }}>
                    <Stats title='75,116' subTitle='Emails Sent' icon={<MailOutline />} progress={90} />
                </Box>
                <Box gridColumn='span 3' sx={{ backgroundColor: colors.primary[400] }}>
                    <Stats title='431,225' subTitle='Sales Obtained' icon={<PointOfSaleOutlined />} progress={45} />
                </Box>
                <Box gridColumn='span 3' sx={{ backgroundColor: colors.primary[400] }}>
                    <Stats title='44,981' subTitle=' New Clients' icon={<PersonAddOutlined />} progress={65} />
                </Box>
                <Box gridColumn='span 3' sx={{ backgroundColor: colors.primary[400] }}>
                    <Stats title='1,125,980' subTitle='Traffic Received' icon={<TrafficOutlined />} progress={32} />
                </Box>

                {/* Second Row Starts Here */}
                <Box gridColumn='span 8' gridRow='span 2' sx={{ backgroundColor: colors.primary[400] }}>
                    <Box height='20%' display='flex' justifyContent='space-between'>
                        <Box p='20px 0 0 20px'>
                            <Typography variant='h6' color={colors.greenAccent[400]}>Revenue Generated</Typography>
                            <Typography fontSize='24px' fontWeight='bold' color={colors.greenAccent[400]}>$ 23,333,542</Typography>
                        </Box>
                        <Box p='20px 20px 0 0'>
                            <IconButton  sx={{ color: colors.greenAccent[500], fontSize: '26px' }}><DownloadOutlined /></IconButton>
                        </Box>
                    </Box>
                    <Box height='80%'>
                        <LineChart isDashboard />
                    </Box>
                </Box>
                <Box overflow='auto' gridColumn='span 4' gridRow='span 2' sx={{ backgroundColor: colors.primary[400] }}>
                    <Box p='20px 0 0 20px'>
                        <Typography variant='h6' color={colors.greenAccent[400]}>Recent Transactions</Typography>
                    </Box>
                    <Box p='0 20px'>
                        {mockTransactions.map((transx, ind) => (
                            <Box
                                key={`${transx.txId} + ${ind}`}
                            >
                                <Box
                                    display='flex' justifyContent='space-between' mt='10px'>
                                    <Box>
                                        <Typography
                                            variant='h6'
                                            color={colors.greenAccent[400]}
                                        >
                                            {transx.txId}
                                        </Typography>
                                        <Typography
                                            color={colors.grey[100]}
                                        >
                                            {transx.user}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography>
                                            {transx.date}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography color={colors.grey[100]}>
                                            $ {transx.cost}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Divider />
                            </Box>
                        ))}
                    </Box>
                </Box>
                {/* Third Row Starts Here */}
                <Box
                    gridColumn='span 4' gridRow='span 2' sx={{ backgroundColor: colors.primary[400] }}
                >
                    <Box p='20px 20px 0 20px'>
                        <Typography variant='h6' color={colors.grey[100]}>Campgain</Typography>
                    </Box>
                    <Box height='90%' display='flex' justifyContent='space-around' p='0 20px 20px 20px'>
                        <Box maxHeight='220px' maxWidth='220px'>
                            <CircularProgressbar value={78} text={`${78}%`} /> 
                        </Box>
                    </Box>
                </Box>
                <Box
                    gridColumn='span 4' gridRow='span 2' sx={{ backgroundColor: colors.primary[400] }}
                >
                    <Box p='20px 20px 0 20px'>
                        <Typography variant='h6' color={colors.grey[100]}>Sales</Typography>
                    </Box>
                    <Box height='90%' display='flex' justifyContent='space-around' p='0 20px 20px 20px'>
                        <BarChart isDashboard />
                    </Box>
                </Box>
                <Box
                    gridColumn='span 4' gridRow='span 2' sx={{ backgroundColor: colors.primary[400] }}
                >
                    <Box p='20px 20px 0 20px'>
                        <Typography variant='h6' color={colors.grey[100]}>Geography Based Traffic</Typography>
                    </Box>
                    <Box height='90%' display='flex' justifyContent='space-around' p='0 20px 20px 20px'>
                        <GeoChart isDashboard />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}

export default Dashboard;