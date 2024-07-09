// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import MainScreen from './pages/MainScreen';
import CardsTab from './pages/CardsTab';
import MappingTab from './pages/MappingTab';
import UsersTab from './pages/UsersTab';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<MainScreen />} />
            <Route path="cards" element={<CardsTab />} />
            <Route path="mapping" element={<MappingTab />} />
            <Route path="users" element={<UsersTab />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
