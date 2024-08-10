import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { mockDataTeam } from '../../data/mockData';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import { tokens } from '../../theme';
import { TeamType } from '../../types/mockData.js';
import Header from '../../components/Header';

const teamData: TeamType[] = mockDataTeam;

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns: GridColDef<(typeof teamData)[number]>[] = [
        { field: 'id', headerName: 'ID'},
        { field: 'name', headerName: 'Name', flex: 1, cellClassName: 'name-column--cell' },
        { field: 'age', headerName: 'Age', align: 'left', headerAlign: 'left', type: 'number'},
        { field: 'phone', headerName: 'Phone', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1 },
        { field: 'access', headerName: 'Access Level', flex: 1, align: 'center', headerAlign: 'center', renderCell: ({ row: { access }}) => {
            return(
                <Box
                    m='0 auto'
                    width='60%'
                    p='5px'
                    display='flex'
                    justifyContent='center'
                    sx={{ backgroundColor: access === 'admin' ? `${colors.greenAccent[600]} !important` : `${colors.greenAccent[700]} !important`}}
                    borderRadius='5px'
                >
                    {access === 'admin' && (<AdminPanelSettingsOutlinedIcon />)}
                    {access === 'manager' && (<ManageAccountsOutlinedIcon />)}
                    {access === 'user' && (<LockPersonOutlinedIcon />)}
                    <Typography sx={{ ml: '5px'}}>{access}</Typography>
                </Box>
            );
        }}
    ];

    return (
        <Box m='20px'>
            <Header title='TEAM' subtitle='Manage your Team Members' />
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
                }
            }}>
                <DataGrid
                    rows={teamData}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Team;