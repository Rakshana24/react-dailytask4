import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './src/components/Login';
import Sdashboard from './src/pages/student/Sdashboard';
import Sdownloads from './src/pages/student/Sdownloads';
import Adashboard from './src/pages/admin/Adashboard';
import Adownloads from './src/pages/admin/Adownloads';
import Fdashboad from './src/pages/faculty/Fdashboad';
import Fdownloads from './src/pages/faculty/Fdownloads';
import Fprogress from './src/pages/faculty/Fprogress';
import Fhistory from './src/pages/faculty/Fhistory';
import Sprogress from './src/pages/student/Sprogress';
import Shistory from './src/pages/student/Shistory';
import Aprogress from './src/pages/admin/Aprogress';
import Ahistory from './src/pages/admin/Ahistory';
import Navbar from './src/components/Navbar';

function Applayout() {
  const role = localStorage.getItem('role');
  console.log('Current Role:', role); // Log to check if role is being fetched properly

  return (
    <Router>
      <div>
        {/* Conditionally render Navbar based on the role */}
        {role && location.pathname !== '/react-dailytask4' && <Navbar role={role} />}

        <Routes>
          <Route path='/react-dailytask4' element={<Login />} />
          
          {role === 'student' && (
            <>
              <Route path="/student/Sdashboard" element={<><Navbar role={role} /><Sdashboard /></>} />
              <Route path="/student/Sdownloads" element={<><Navbar role={role} /><Sdownloads /></>} />
              <Route path="/student/Sprogress" element={<><Navbar role={role} /><Sprogress /></>} />
              <Route path="/student/Shistory" element={<><Navbar role={role} /><Shistory /></>} />
            </>
          )}

          {role === 'faculty' && (
            <>
              <Route path="/faculty/Fdashboard" element={<Fdashboad />} />
              <Route path="/faculty/Fdownloads" element={<><Navbar role={role} /><Fdownloads /></>} />
              <Route path="/faculty/Fprogress" element={<><Navbar role={role} /><Fprogress /></>} />
              <Route path="/faculty/Fhistory" element={<><Navbar role={role} /><Fhistory /></>} />
            </>
          )}

          {role === 'admin' && (
            <>
              <Route path="/admin/Adashboard" element={<><Navbar role={role} /><Adashboard /></>} />
              <Route path="/admin/Adownloads" element={<><Navbar role={role} /><Adownloads /></>} />
              <Route path="/admin/Aprogress" element={<><Navbar role={role} /><Aprogress /></>} />
              <Route path="/admin/Ahistory" element={<><Navbar role={role} /><Ahistory /></>} />
            </>
          )}

          <Route path="*" element={null} />
        </Routes>
      </div>
    </Router>
  );
}

export default Applayout;
