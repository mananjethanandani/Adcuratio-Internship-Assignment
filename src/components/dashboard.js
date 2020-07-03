	
import React from 'react';
import Table from './table'
import '../css/dashboard.css'
 
function Dashboard(props) {
 
  // handle click event of logout button
  const handleLogout = () => {    
    props.history.push('/');
  }
 
  return (
    <div className="dashboard-main">
      <Table />
      <br />
      <div className="dashboard-button">
      <input className="logout-button" type="button" onClick={handleLogout} value="Logout" />
      </div>
    </div>
  );
}
 
export default Dashboard;