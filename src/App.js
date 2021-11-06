import React from "react";
import './App.css';
import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Trips, RecentlyViewed, Bookings, Home} from "./pages/index"
import Navbar from "./components/Navbar.jsx";
import { theme } from "./theme/theme";
import {  ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/trips' element={<Trips />} />
          <Route path='/views' element={<RecentlyViewed />} />
          <Route path='/bookings' element={<Bookings />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
