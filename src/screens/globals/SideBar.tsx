import React, { ReactElement, useState } from 'react';
import { ProSidebar as ProSideBar, Menu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Box, useTheme, Typography, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import LineAxisOutlinedIcon from '@mui/icons-material/LineAxisOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import QuestionAnswerOutlinedIcon from '@mui/icons-material/QuestionAnswerOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarToday';
import ReceiptOutlinedIcon from '@mui/icons-material/Receipt';
import TimelineOutlinedIcon from '@mui/icons-material/Timeline';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import userPicture from '../../assets/user.svg';

import { tokens } from '../../theme';

type ItemProps = {
    title: string,
    to: string,
    icon: ReactElement,
    selected: string,
    setSelected: (selected: string) => void
}


const Item = (props: ItemProps) => {
    const { title, to, icon, selected, setSelected } = props;
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem active={title === selected} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

function SideBar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState('Dashboard');

    return (
        <Box
            sx={{
                '& .pro-sidebar-inner': {
                    backgroundColor: theme.palette.mode === 'dark' ? `${colors.primary[400]} !important` : `${colors.primary[900]} !important`,
                },
                '& .pro-icon-wrapper': {
                    backgroundColor: 'transparent !important',
                },
                '& .pro-inner-item': {
                    padding: '5px 20px 5px 20px !important'
                },
                '& .pro-inner-item:hover': {
                    color: '#868dfb !important',
                },
                '& .pro-menu-item.active': {
                    color: '#6870fa !important',
                },
            }}
        >
            <ProSideBar
                collapsed={isCollapsed}
            >
                <Menu>
                    <MenuItem>
                        <Box
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            {!isCollapsed ? (
                                <>
                                    <Typography variant='h5' color={colors.grey[100]}>Admin</Typography>
                                    <IconButton
                                        type='button'
                                        onClick={() => setIsCollapsed(!isCollapsed)}
                                    >
                                        <ArrowCircleLeftOutlinedIcon />
                                    </IconButton>
                                </>
                            )
                                : (
                                    <IconButton
                                        type='button'
                                        onClick={() => setIsCollapsed(!isCollapsed)}
                                    >
                                        <ArrowCircleRightOutlinedIcon />
                                    </IconButton>

                                )}
                        </Box>
                    </MenuItem>

                    {/* User */}
                    {!isCollapsed && (
                        <Box>
                            <Box mb='25px' display='flex' justifyContent='center' alignItems='center'>
                                <img
                                    height='100px'
                                    width='100px'
                                    alt='user-picture'
                                    src={userPicture}
                                    style={{ borderRadius: '50%', cursor: 'pointer' }}

                                />
                            </Box>
                            <Box textAlign='center'>
                                <Typography variant='h3' color={colors.grey[100]} fontWeight='bold' sx={{ m: '10px 0 5px 5px' }}>YOGESH</Typography>
                                <Typography variant='h6' color={colors.greenAccent[400]}>Frontend Developer</Typography>
                            </Box>
                        </Box>
                    )}

                    {/* Menu Items */}
                    <Box paddingLeft={isCollapsed ? undefined : '10%'}>
                        <Item
                            title='Dashboard'
                            to='/'
                            icon={<HomeOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant='h6' sx={{ m: '15px 0 5px 20px'}}>
                            Data
                        </Typography>
                        <Item
                            title='Contacts'
                            to='/contacts'
                            icon={<PeopleOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Calender'
                            to='/calender'
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Invoices'
                            to='/invoices'
                            icon={<ReceiptOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant='h6' sx={{ m: '15px 0 5px 20px'}}>
                            Pages
                        </Typography>
                        <Item
                            title='FAQs'
                            to='/faqs'
                            icon={<QuestionAnswerOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Typography variant='h6' sx={{ m: '15px 0 5px 15px'}}>
                            Charts
                        </Typography>
                        <Item
                            title='Line Chart'
                            to='/line-chart'
                            icon={<LineAxisOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Pie Chart'
                            to='/pie-chart'
                            icon={<TimelineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Bar Chart'
                            to='/bar-chart'
                            icon={<BarChartOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title='Geography'
                            to='/geography'
                            icon={<MapOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                    </Box>
                </Menu>
            </ProSideBar>
        </Box>

    );
}

export default SideBar;