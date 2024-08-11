import React, { useState } from 'react';
import { Box, Typography, Accordion, AccordionSummary, useTheme, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { FAQData } from '../../data/faqData';
import { tokens } from '../../theme';
import Header from '../../components/Header';

const FAQPage = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [expandInd, setExpandInd] = useState(NaN);

    const handleAccordion = (indexNumber: number) => {
        if (indexNumber === expandInd) {
            setExpandInd(NaN);
        } else {
            setExpandInd(indexNumber);
        }
    };

    return (
        <Box m='20px'>
            <Header title='FAQ' subtitle='Frequently Asked Question Page' />
            <Box display='flex' sx={{ overflowX: 'auto' }}>
                <Box sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: colors.primary[400]
                    }
                }}
                height="70vh">
                    {FAQData.map((qa, index) => (
                        <Accordion
                            key={qa.question}
                            expanded={index === expandInd}
                            onChange={() => handleAccordion(index)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                            >
                                <Typography color={colors.greenAccent[300]} variant='h5'>{qa.question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant='h6'>{qa.answer}</Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Box>
    ); 
};

export default FAQPage;