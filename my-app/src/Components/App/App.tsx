import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ROUTES from '../../Route';
import Home from '../Home/Home';
import Listing from '../Listing/Listing';


const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path={ROUTES.root} element={<Home/>} />
            <Route path={ROUTES.users} element={<Listing/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );

}


export default App;
