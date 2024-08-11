import React from 'react';
import Header from '../../components/Header';
import { Box } from '@mui/material';
import PieChart from '../../components/PieChart';

const Pie = () => {
    return (
        <Box m='20px'>
            <Header title="PIE CHART" subtitle="Pie Representation of Data" />
            <Box height='70vh'>
                <PieChart isDashboard={false} />
            </Box>
        </Box>
    );
};

export default Pie;