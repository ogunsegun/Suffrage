import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import AnimatedDots from '../components/AnimatedDots';
import { useUser } from '../context/UserContext';

const PasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const { updateUserData } = useUser();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };
  
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    if (e.target.value && password !== e.target.value) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    updateUserData({ password });
    navigate('/signin');
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900 p-4">
      <AnimatedDots />
      
      <Card className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Create a Password</h1>
        
        <form onSubmit={handleSubmit}>
          <Input
            type="password"
            label="Password"
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={handlePasswordChange}
            required
            className="mb-6"
          />
          
          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
            className="mb-2"
          />
          
          {error && (
            <p className="text-red-300 text-sm mb-6">{error}</p>
          )}
          
          <Button
            type="submit"
            className="w-full py-3 text-lg font-medium mt-4"
            disabled={!password || !confirmPassword || password !== confirmPassword}
          >
            Submit
          </Button>
        </form>
        
        <div className="text-center mt-4">
          <span className="text-white/70">Already have account?</span>
          <button
            onClick={() => navigate('/signin')}
            className="text-white ml-1 hover:underline"
          >
            Sign in
          </button>
        </div>
      </Card>
    </div>
  );
};

export default PasswordPage;