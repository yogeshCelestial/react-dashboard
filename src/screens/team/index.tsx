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
                    sx={{ backgraoundColor: access === 'admin' ? `${colors.greenAccent[600]} !important` : `${colors.greenAccent[600]} !important`}}
                    borderRadius='5px'
                >
                    {access === 'admin' && (<AdminPanelSettingsOutlinedIcon />)}
                    {access === 'manager' && (<ManageAccountsOutlinedIcon />)}
                    {access === 'user' && (<LockPersonOutlinedIcon />)}
                </Box>
            );
        }}
    ];

    return (
        <Box m='20px'>
            <Header title='TEAM' subtitle='Manage your Team Members' />
            <Typography>Team</Typography>
            <Box>
                <DataGrid
                    rows={teamData}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Team;