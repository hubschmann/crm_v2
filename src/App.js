import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Зміна імпорту на Routes та Route

import theme from './utils/theme';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/organisms/navigation';
import ActiveTicketsPage from './pages/ActiveTicketsPage';
import ArchiveTicketsPage from './pages/ArchiveTicketsPage';
import ArchiveRegistrationPage from './pages/ArchiveRegistrationPage';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation>
          <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="archive-tickets">
              <Route index element={<ArchiveTicketsPage />} />
              {/* <Route path=":ticketId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              /> */}
            </Route>
            <Route path="active-tickets">
              <Route index element={<ActiveTicketsPage />} />
              
            </Route>
            <Route path="registration">
              <Route index element={<ArchiveRegistrationPage />} />
              {/* <Route path=":registrationId" element={<Single />} /> */}
              {/* <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}
            </Route>
          </Route>
          </Routes>
        </Navigation>
      </Router>
    </ThemeProvider>
  );
}

export default App;
