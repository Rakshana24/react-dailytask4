import React from 'react'
import './Fdashboard.css'
import { Link } from 'react-router-dom'
function Fdashboad() {
  return (
    <div>
      <div className="dashboard-container">
                      <h1>Student Dashboard</h1>
                      <ul className="dashboard-links">
                          <li className="dashboard-item">
                              <Link to="/faculty/Fdownloads" className="dashboard-link">
                                  Downloads
                              </Link>
                          </li>
                      </ul>
                  </div>
    </div>
  )
}

export default Fdashboad
