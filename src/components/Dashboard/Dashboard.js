import React from 'react';
import Navbar from '../common/Navbar';

const Dashboard = () => {
  return (
    <>
      <Navbar isLoggedIn={true} />
      <div>Dashboard</div>
    </>
  );
};

export default Dashboard;
