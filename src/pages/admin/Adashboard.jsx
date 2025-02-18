import { React } from 'react';
import { Link } from 'react-router-dom';
import './Adashboard.css'; 
function Adashboard() {
    return (
        <div className="dashboard-container">
            <h1>Admin Dashboard</h1>
            <ul className="dashboard-links">
                <li className="dashboard-item">
                    <Link to="/admin/Adownloads" className="dashboard-link">
                        Downloads
                    </Link>
                </li>
            </ul>


            <div className='tasks'>
                <h1>Tasks</h1>
                <ul>
                    <li>Correct students papers</li>
                    <li>Meeting with Chairman</li>
                    <li>mentor mentee meeting</li>
                </ul>
            </div>
        </div>
    );
}

export default Adashboard;
