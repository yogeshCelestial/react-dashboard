import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import GeoChart from '../../components/GeoMap';

const Geo = () => {
    return (
        <Box m='20px'>
            <Header title="GEO CHART" subtitle="Geographical Representation of Data" />
            <Box height='70vh'>
                <GeoChart isDashboard={false} />
            </Box>
        </Box>
    );
};

export default Geo;