import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material';
import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    formatDate,
} from '@fullcalendar/core';
import Header from '../../components/Header';
import { tokens } from '../../theme';

function Calendar() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
   
    const handleDateClick = (selected: DateSelectArg) => {
        const title = prompt('Title for this Event:');
        const calenderAPI = selected.view.calendar;
        calenderAPI.unselect();

        if (title) {
            calenderAPI.addEvent({
                id: `${selected.startStr}-${title}`,
                title,
                start: selected.startStr,
                end: selected.endStr,
                allDay: selected.allDay
            });
        }

    };

    const handleEventClick = (selected: EventClickArg) => {
        if (window.confirm(`Are you sure to delete event ${selected.event.title}`)) {
            selected.event.remove();
        }
    };

    return (
        <Box m='20px'>
            <Header title='CALENDER' subtitle='Manage your calender and events' />
            <Box display='flex' justifyContent='space-between'>
                <Box
                    flex='1 1 20%'
                    p='15px'
                    borderRadius='6px'
                    mr='15px'
                    sx={{
                        backgroundColor: colors.primary[theme.palette.mode === 'dark' ? 400 : 900]
                    }}
                >
                    <Typography variant='h5'>Events</Typography>
                    <List>
                        {currentEvents.map((ev) => (
                            <ListItem
                                key={ev.id}
                                sx={{
                                    backgroundColor: colors.greenAccent[500],
                                    margin:'10px 0',
                                    borderRadius: '2px' }}
                            >
                                <ListItemText
                                    primary={ev.title}
                                    secondary={<Typography>
                                        {formatDate(ev.startStr, {
                                            year:'numeric',
                                            month: 'short',
                                            day: 'numeric',
                                        })}
                                    </Typography>}
                                />
                            </ListItem>))}
                    </List>

                </Box>
                <Box flex='1 1 100%'>
                    <FullCalendar
                        height='70vh'
                        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                        initialView="dayGridMonth"
                        editable
                        selectable
                        selectMirror
                        dayMaxEvents
                        select={handleDateClick}
                        eventClick={handleEventClick}
                        eventsSet={(events: EventApi[]) => setCurrentEvents(events)}
                        headerToolbar={{
                            right: 'prev,today,next',
                            center: 'title',
                            left: 'dayGridMonth,timeGridWeek,timeGridDay'
                        }}
                    />
                </Box>

            </Box>
        </Box>
    );
}

export default Calendar;

