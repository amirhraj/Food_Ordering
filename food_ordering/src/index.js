import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import General  from './components/General';
import Card from './components/Card';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';
import NotFound  from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
          <Route path="/" element={< App /> } />
          <Route path="/favorit" element={<General /> } />
          <Route path="/Card/:item" element={ <Card/>} />
          <Route path="/*" element={ <NotFound/>} />
         
      </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
