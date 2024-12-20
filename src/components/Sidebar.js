import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside style={{ width: '200px', background: '#f4f4f4', padding: '20px' }}>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/page1">Page 1</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
        <li><Link to="/page3">Page 3</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
