import React from 'react';
import { Link } from 'react-router-dom';
import './Sdashboard.css';
function Sdashboard() {
  

  return (
     <div className="dashboard-container">
                <h1>Student Dashboard</h1>
                <ul className="dashboard-links">
                    <li className="dashboard-item">
                        <Link to="/student/Sdownloads" className="dashboard-link">
                            Downloads
                        </Link>
                    </li>
                </ul>
            </div>
  );
}

export default Sdashboard;
