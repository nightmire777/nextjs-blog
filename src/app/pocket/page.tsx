"use client";

import React from 'react';
import { SideMenu } from '../SideMenu'; // Adjust the import path if necessary

const Pocket = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <SideMenu />

      {/* Main Content */}
      <div style={{ marginLeft: '260px', padding: '20px' }}>
        <h1>Pocket Page</h1>
        <p>Welcome to the Pocket page!</p>
      </div>
    </div>
  );
};

export default Pocket;