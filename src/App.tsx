import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import PasscodePage from './pages/PasscodePage';
import PasswordPage from './pages/PasswordPage';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/create-passcode" element={<PasscodePage />} />
          <Route path="/create-password" element={<PasswordPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;