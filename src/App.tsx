import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AuthPage } from './pages/AuthPage';
import { AirportDetailPage } from './pages/AirportDetailPage';
import { Navigation } from './components/Navigation';

function App() {
  return (
    <>
      <Navigation/>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/airport/:id' element={<AirportDetailPage />} />
      </Routes>
    </>
  );
}

export default App;
