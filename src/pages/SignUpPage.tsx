import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import AnimatedDots from '../components/AnimatedDots';
import { useUser } from '../context/UserContext';

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [activeTab, setActiveTab] = useState<'voters' | 'organization'>('voters');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'organization') {
      navigate('/create-password');
    } else {
      navigate('/create-passcode');
    }
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUserData({ [field]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900 p-4">
      <AnimatedDots />
      
      <Card className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-8">Sign Up</h1>
        
        <div className="flex mb-8">
          <button
            className={`flex-1 py-2 text-center rounded-l-md transition-colors ${
              activeTab === 'voters'
                ? 'bg-indigo-900 text-white'
                : 'bg-indigo-700/50 text-white/70 hover:bg-indigo-700'
            }`}
            onClick={() => setActiveTab('voters')}
          >
            Voters
          </button>
          <button
            className={`flex-1 py-2 text-center rounded-r-md transition-colors ${
              activeTab === 'organization'
                ? 'bg-indigo-900 text-white'
                : 'bg-indigo-700/50 text-white/70 hover:bg-indigo-700'
            }`}
            onClick={() => setActiveTab('organization')}
          >
            Organization
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {activeTab === 'organization' ? (
            <>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="text"
                  label="First name"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={userData.firstName || ''}
                  onChange={handleInputChange('firstName')}
                  required
                  className="mb-6"
                />
                
                <Input
                  type="text"
                  label="Last name"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={userData.lastName || ''}
                  onChange={handleInputChange('lastName')}
                  required
                  className="mb-6"
                />
              </div>

              <Input
                type="email"
                label="Email"
                name="email"
                placeholder="Enter your Email"
                value={userData.email || ''}
                onChange={handleInputChange('email')}
                required
                className="mb-6"
              />

              <Input
                type="text"
                label="Country"
                name="country"
                placeholder="Enter your Country"
                value={userData.country || ''}
                onChange={handleInputChange('country')}
                required
                className="mb-6"
              />

              <Input
                type="text"
                label="Organization"
                name="organization"
                placeholder="Enter your Organization"
                value={userData.organization || ''}
                onChange={handleInputChange('organization')}
                required
                className="mb-6"
              />

              <Input
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your Password"
                value={userData.password || ''}
                onChange={handleInputChange('password')}
                required
                className="mb-8"
              />
            </>
          ) : (
            <>
              <Input
                type="tel"
                label="Phone Number"
                name="phoneNumber"
                placeholder="Enter your Phone Number (+1 000 0000 000)"
                value={userData.phoneNumber}
                onChange={handleInputChange('phoneNumber')}
                required
                className="mb-6"
              />
              
              <Input
                type="text"
                label={userData.idType}
                name="idNumber"
                placeholder={`Enter your ${userData.idType}`}
                value={userData.idNumber}
                onChange={handleInputChange('idNumber')}
                required
                className="mb-8"
              />
            </>
          )}
          
          <Button
            type="submit"
            className="w-full py-3 text-lg font-medium"
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

export default SignUpPage;