import React from 'react';
import { Outlet } from 'react-router-dom';
import './style.modules.css';

const MainLayout = () => {
  return (
    <div>
      <div id="content">
        <div className="box" style={{ backgroundColor: 'red' }}>
          A
        </div>
        <div className="box" style={{ backgroundColor: 'lightblue' }}>
          B
        </div>
        <div className="box" style={{ backgroundColor: 'yellow' }}>
          C
        </div>
        <div className="box4" style={{ backgroundColor: 'lightsalmon' }}>
          D
        </div>
        <div className="box5" style={{ backgroundColor: 'lightgreen' }}>
          E
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
