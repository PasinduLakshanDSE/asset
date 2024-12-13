import React from 'react';
import './nav.css'

const NavBar = () => {


  const cards = [
    { count: 150, label: "Total Clients", color: "blue", icon: "👥" },
    { count: 53, label: "Total Employees", color: "green", icon: "🤝" },
    { count: 50, label: "Total Branches", color: "teal", icon: "🏠" },
    { count: 50, label: "Total Assets", color: "red", icon: "➕" },
  ];




  return (
    <div className='main'>
      
      <div id="nav-bar">
        <input id="nav-toggle" type="checkbox" />
        <div id="nav-header">
          <a id="nav-title" href="https://www.vellaglobal.com/" target="_blank" rel="noopener noreferrer">
            Admin
          </a>
          <label htmlFor="nav-toggle" style={{ marginRight: '30px' }}>
            <span id="nav-toggle-burger" ></span>

          </label>
          <hr />
        </div>
        <div id="nav-content">
          <div className="nav-button">
            <i className="fas fa-palette  fa-home"></i>
            <a href="/Dashboard" className="nav-link">Dashboard</a>
          </div>
          <div className="nav-button">
            <i className="fas fa-home"></i>
            <a href="/Branch Office" className="nav-link">Branch Office</a>
          </div>
          <div className="nav-button">
            <i className="fas fa-university"></i>
            <a href="/
 Department" className="nav-link">
              Department</a>
          </div>
          <hr />
          <div className="nav-button">
            <i className="fas fa-file"></i>
            <a href="/Asset Category" className="nav-link">Asset Category</a>
          </div>

          <div id="nav-content-highlight"></div>
        </div>
        <input id="nav-footer-toggle" type="checkbox" />
        <div id="nav-footer">
          <div id="nav-footer-heading">
            <div id="nav-footer-avatar">
              <img src="https://gravatar.com/avatar/4474ca42d303761c2901fa819c4f2547" alt="Avatar" />
            </div>
            <div id="nav-footer-titlebox">
              <a id="nav-footer-title" href="https://www.vellaglobal.com/" target="_blank" rel="noopener noreferrer">
                Admin
              </a>
              <span id="nav-footer-subtitle">Admin</span>
            </div>

          </div>

        </div>
      </div>


      <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Home / Dashboard</p>
      </div>
      <div className="dashboard-cards">
        {cards.map((card, index) => (
          <div
            key={index}
            className="dashboard-card"
            style={{ backgroundColor: card.color }}
          >
            <div className="card-content">
              <h2>{card.count}</h2>
              <p>{card.label}</p>
            </div>
            <div className="card-footer">
              <a href="#">More info →</a>
            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
  );
};

export default NavBar;
