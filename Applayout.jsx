
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './src/components/Login';
import Sdashboard from './src/pages/student/Sdashboard';
import Sdownloads from './src/pages/student/Sdownloads';
import Adashboard from './src/pages/admin/Adashboard';
import Adownloads from './src/pages/admin/Adownloads';
import Fdashboad from './src/pages/faculty/Fdashboad';
import Fdownloads from './src/pages/faculty/Fdownloads';

function Applayout() {
  const role=localStorage.getItem('role');
  return (
    
    <Router>
      <div>
        <Routes>
          <Route path='//react-dailytask4' element={<Login />} />
           


          {role === 'student' && (
          <>
            <Route path="/student/Sdashboard" element={<Sdashboard />} />
            <Route path="/student/Sdownloads" element={<Sdownloads />} />
          </>
        )}


          {role === 'faculty' && (
          <>
            <Route path="/faculty/Fdashboard" element={< Fdashboad />} />
            <Route path="/faculty/Fdownloads" element={<Fdownloads />} />
      
          </>
        )} 



          {role === 'admin' && (
          <>
            <Route path="/admin/Adashboard" element={<Adashboard />} />
            <Route path="/admin/Adownloads" element={<Adownloads />} />
           
          </>
        )}


        </Routes>
      </div>
    </Router>
  );
}

export default Applayout;
