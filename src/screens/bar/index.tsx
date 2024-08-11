import React from 'react';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';
import { Box } from '@mui/material';

const Bar = () => {
    return (
        <Box m='20px'>
            <Header title="BAR-CHART" subtitle="Bar Representation of Data" />
            <Box height='70vh'>
                <BarChart isDashboard={false} />
            </Box>
        </Box>
    );
};

export default Bar;