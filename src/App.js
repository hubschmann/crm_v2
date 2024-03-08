import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Зміна імпорту на Routes та Route
import HomePage from './pages/HomePage';

import theme from './utils/theme';
import ArchiveTicketsPage from './pages/ArchiveTicketsPage';
import Navigation from './components/organisms/navigation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation>
          <Routes>
            <Route path='/' exact element={<HomePage />} /> {/* Встановлюємо шлях для сторінки Home */}        
            <Route path='/archive-tickets' exact element={<ArchiveTicketsPage />}></Route>
          </Routes>
        </Navigation>
      </Router>
    </ThemeProvider>
  );
}

export default App;
