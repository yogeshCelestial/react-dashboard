import React from 'react';
import { Box, useTheme } from '@mui/material';
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid';
import { mockDataContacts } from '../../data/mockData';
import { tokens } from '../../theme';
import { ContactsType } from '../../types/mockData.js';
import Header from '../../components/Header';

const contactsData: ContactsType[] = mockDataContacts;

const Contacts = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef<(typeof contactsData)[number]>[] = [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'registrarId', headerName: 'Registrar ID' },
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        { field: 'age', headerName: 'Age', align: 'left', headerAlign: 'left', type: 'number' },
        { field: 'phone', headerName: 'Phone', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'address', headerName: 'Address', flex: 1 },
        { field: 'city', headerName: 'City', flex: 1 },
        { field: 'zipCode', headerName: 'ZipCode', flex: 1 },
    ];

    return (
        <Box m='20px'>
            <Header title='CONTACTS INFORMATION' subtitle='Manage your Contacts Information' />
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
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                    color: `${colors.grey[100]} !important`
                }
            }}>
                <DataGrid
                    rows={contactsData}
                    columns={columns}
                    slots={{ toolbar: GridToolbar }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: true,
                        },
                    }}
                />
            </Box>
        </Box>
    );
};

export default Contacts;