import React, { ReactNode } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../theme';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type StatsProps = {
    title: string,
    subTitle: string,
    progress: number,
    icon: ReactNode
}

const Stats = (props: StatsProps) => {
    const { title, subTitle, progress, icon } = props;
    const theme = useTheme();
    const  colors = tokens(theme.palette.mode);

    return (
        <Box width='100%' display='flex' justifyContent='space-between' p='20px' sx={{ backgroundColor: colors.primary[400] }} >
            <Box flexDirection='column'>
                {icon}
                <Typography variant='h5' color={colors.greenAccent[300]}>{title}</Typography>
                <Typography color={colors.grey[300]}>{subTitle}</Typography>
            </Box>
            <Box height='100px' width='100px'>
                <CircularProgressbar value={progress} />
            </Box>
        </Box>
    
    );
};

export default Stats;