import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mockDataInvoices } from '../../data/mockData';
import { tokens } from '../../theme';
import { InvoicesType } from '../../types/mockData';
import Header from '../../components/Header';

const invoicesData: InvoicesType[] = mockDataInvoices;

const Invoices = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef<(typeof invoicesData)[number]>[] = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        { field: 'phone', headerName: 'Phone', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'date', headerName: 'Date', flex: 1 },
        { field: 'cost', headerName: 'Cost', flex: 1, renderCell: (params) => {
            return (
                <Typography>${params.row.cost}</Typography>
            );
        } },
    ];

    return (
        <Box m='20px'>
            <Header title='INVOICES' subtitle='Invoice Details' />
            <Box m='40px 0 0 0' height='70vh' sx={{
                '& .MuiDataGrid-root': {
                    border: 'none',
                },
                '& .MuiDataGrid-cell': {
                    borderBottom: 'none',
                    alignContent: 'center',
                },
                '& .name-column--cell': {
                    color: colors.greenAccent[300],
                },
                '& .MuiDataGrid-columnHeader': {
                    backgroundColor: theme.palette.mode === 'dark' ? colors.greenAccent[700] : colors.grey[700],
                    borderBottom: 'none',
                },
                '& .MuiDataGrid-virtualScroller': {
                    backgroundColor: theme.palette.mode === 'dark' ? colors.primary[400] : colors.grey[900],
                },
                '& .MuiDataGrid-footerContainer': {
                    backgroundColor: theme.palette.mode === 'dark' ? colors.greenAccent[700] : colors.grey[700],
                    borderTop: 'none',
                },
                '& .MuiCheckbox-root': {
                    color: `${colors.grey[100]} !important`
                }
            }}>
                <DataGrid
                    rows={invoicesData}
                    columns={columns}
                    checkboxSelection
                />
            </Box>
        </Box>
    );
};

export default Invoices;