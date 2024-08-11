import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import LineChart from '../../components/LineChart';

const Line = () => {
    return (
        <Box m='20px'>
            <Header title="LINE CHART" subtitle="Line Representation of Data" />
            <Box height='70vh'>
                <LineChart isDashboard={false} />
            </Box>
        </Box>
    );
};

export default Line;