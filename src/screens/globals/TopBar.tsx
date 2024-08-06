import { Box, IconButton, useTheme } from '@mui/material';
import { InputBase } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { ColorModeContext, tokens } from '../../theme';
import { useContext } from 'react';

function TopBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    return (
        <Box display='flex' justifyContent="space-between" p={2}>
            <Box
                display='flex'
                sx={{ backgroundColor: colors.primary[theme.palette.mode === 'dark' ? 400 : 900] }}
                borderRadius='3px'
            >
                <InputBase
                    sx={{
                        flex: 1,
                        ml: 2
                    }}
                />
                <IconButton
                    type='button'
                    sx={{ p: 1 }}
                >
                    <SearchOutlinedIcon />
                </IconButton>
            </Box>
            <Box
                display='flex'
            >
                <IconButton
                    type='button'
                    onClick={colorMode.toggleColorMode}
                >
                    {theme.palette.mode === 'dark' ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
                </IconButton>
                <IconButton
                    type='button'
                >
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton
                    type='button'
                >
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton
                    type='button'
                >
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
};

export default TopBar;