import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css'; // Archivo de estilos personalizados
import MainScreen from './MainScreen';
import Cards from './CardsTab';
import MappingTab from './MappingTab';
import Users from './UsersTab';
import Profile from './Profile';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('mainScreen');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    logout();
    navigate('/', { replace: true }); // Redirect to home page after logging out
  };

  return (
    <div className="container-fluid vh-100">
      <div className="row vh-100">
        <div className="col-md-2 bg-light h-100 p-0">
          <nav className="nav flex-column nav-pills h-100 p-3">
            <h5 className="nav-header">Menu</h5>
            <button
              className={`nav-link btn btn-secondary ${activeTab === 'ainScreen'? 'active' : ''}`}
              onClick={() => handleTabChange('mainScreen')}
            >
              Main Screen
            </button>
            <button
              className={`nav-link btn btn-secondary ${activeTab === 'cards'? 'active' : ''}`}
              onClick={() => handleTabChange('cards')}
            >
              Cards
            </button>
            <button
              className={`nav-link btn btn-secondary ${activeTab === 'apping'? 'active' : ''}`}
              onClick={() => handleTabChange('mapping')}
            >
              Mapping
            </button>
            <button
              className={`nav-link btn btn-secondary ${activeTab === 'users'? 'active' : ''}`}
              onClick={() => handleTabChange('users')}
            >
              Users
            </button>
            <div className="mt-auto">
              <button className="nav-link btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
              <button
                className={`nav-link btn btn-secondary ${activeTab === 'profile'? 'active' : ''}`}
                onClick={() => handleTabChange('profile')}
              >
                Profile
              </button>
            </div>
          </nav>
        </div>
        <div className="col-md-10 h-100 overflow-auto">
          {activeTab === 'mainScreen' && <MainScreen />}
          {activeTab === 'cards' && <Cards />}
          {activeTab === 'mapping' && <MappingTab />} {/* Fix typo: 'apping' -> 'mapping' */}
          {activeTab === 'users' && <Users />}
          {activeTab === 'profile' && <Profile user={user} />} {/* Pass the user prop to Profile */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;