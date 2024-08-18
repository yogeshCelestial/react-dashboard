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
import FAQPage from './screens/faq';
import Bar from './screens/bar';
import Pie from './screens/pie';
import Line from './screens/line';
import Geo from './screens/geo';


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
                            <Route path='/react-dashboard' element={<Dashboard />} />
                            <Route path='/team' element={<Team />} />
                            <Route path='/contacts' element={<Contacts />} />
                            <Route path='/invoices' element={<Invoices />} />
                            <Route path='/calender' element={<Calendar />} />
                            <Route path='/faqs' element={<FAQPage />} />                                                     
                            <Route path='/pie-chart' element={<Pie />} />
                            <Route path='/line-chart' element={<Line />} />
                            <Route path='/bar-chart' element={<Bar />} /> 
                            <Route path='/geography' element={<Geo />} />                                                     
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
