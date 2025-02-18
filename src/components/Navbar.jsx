import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar({role}) {

  return (
    <div>
      <nav>
        <ul>
        {role === 'student' && (
          <>
            <li><Link to="student/Sdownloads">Downloads</Link></li>
            <li><Link to="student/Sprogress">Progress</Link></li>
            <li><Link to="student/Shistory">History</Link></li>
          </>
        )}
        {role === 'faculty' && (
          <>
            <li><Link to="faculty/Fdownloads">Downloads</Link></li>
            <li><Link to="faculty/Fprogress">Progress</Link></li>
            <li><Link to="faculty/Fhistory">History</Link></li>
          </>
        )}
        {role === 'admin' && (
          <>
            <li><Link to="/admin/downloads">Downloads</Link></li>
            <li><Link to="admin/Aprogress">Progress</Link></li>
            <li><Link to="/admin/Ahistory">History</Link></li>
          </>
        )}
      </ul>
    </nav>
    </div>
  )
}

export default Navbar
