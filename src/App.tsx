import React from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMode, ColorModeContext } from './theme';
import TopBar from './screens/globals/TopBar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './screens/dashboard';
import SideBar from './screens/globals/SideBar';
import Team from './screens/team';
import Contacts from './screens/contacts';
import Invoices from './screens/invoices';
import Calendar from './screens/calender';


function App() {
    const {theme, colorMode} = useMode();
 
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SideBar />
                    <main className="content">
                        <TopBar />
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/team' element={<Team />} />
                            <Route path='/contacts' element={<Contacts />} />
                            <Route path='/invoices' element={<Invoices />} />
                            <Route path='/calender' element={<Calendar />} />
                            {/* <Route path='/faq' element={<Dashboard />} />                                                      */}
                            {/* <Route path='/pie' element={<Dashboard />} /> */}
                            {/* <Route path='/line' element={<Dashboard />} /> */}
                            {/* <Route path='/bar' element={<Dashboard />} />  */}
                            {/* <Route path='/geo' element={<Dashboard />} />                                                      */}
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
