import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const menuItems = ['HOME', 'ABOUT', 'SERVICES', 'WORKS', 'SCHOOL', 'CONTACT'];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="sidebar" style={{ width: '250px', padding: '20px', backgroundColor: '#1A1A1A', color: '#FFF' }}>
      <h2>KNU_SCHOOL PROJECT</h2>
      <nav>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(index)}
              className={activeIndex === index ? 'active' : ''}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      <footer style={{ position: 'absolute', bottom: '20px' }}>
        <p>Copyright ©2024 TMMJ. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Sidebar;
