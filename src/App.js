import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StockApp from './StockPage'; 
import HomePage from './HomePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/AAPL' exact element={<StockApp />} />
      </Routes>
    </BrowserRouter>

    

  )
}

export default App;
