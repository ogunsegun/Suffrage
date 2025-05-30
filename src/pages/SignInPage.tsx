import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import AnimatedDots from '../components/AnimatedDots';
import { useUser } from '../context/UserContext';
import { QRCodeSVG } from 'qrcode.react';

const SignInPage: React.FC = () => {
  const navigate = useNavigate();
  const { userData, updateUserData } = useUser();
  const [activeTab, setActiveTab] = useState<'voters' | 'organization'>(
    'voters'
  );
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [twoFactorCode, setTwoFactorCode] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (activeTab === 'organization') {
  //     // In a real app, verify credentials first
  //     setShowTwoFactor(true);
  //   } else {
  //     navigate('/');
  //   }
  // };

  // const handleTwoFactorSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // In a real app, verify 2FA code here
  //   navigate('/');
  // };

  //code for bypass---must be deleted -----------
  const devEmail = 'dev@example.com';
  const devPassword = 'devpass123';
  const devTwoFACode = '123456';
  const allowDevLogin = import.meta.env.VITE_ALLOW_DEV_LOGIN === 'true';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      allowDevLogin &&
      activeTab === 'organization' &&
      email === devEmail &&
      password === devPassword
    ) {
      // Skip 2FA in dev
      navigate('/organization');
    } else if (activeTab === 'organization') {
      setShowTwoFactor(true);
    } else {
      navigate('/');
    }
  };

  const handleTwoFactorSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (allowDevLogin && twoFactorCode === devTwoFACode) {
      navigate('/');
    } else {
      // handle invalid code
      alert('Invalid 2FA code');
    }
  };

  //-------------------------------bypass---------------------

  if (showTwoFactor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900 p-4">
        <AnimatedDots />

        <Card className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-white text-center mb-4">
            Two-Factor Authentication
          </h1>
          <p className="text-white/70 text-center mb-8">
            Enter the code from your authenticator app
          </p>

          <form onSubmit={handleTwoFactorSubmit}>
            <Input
              type="text"
              label="Authentication Code"
              name="twoFactorCode"
              placeholder="Enter 6-digit code"
              value={twoFactorCode}
              onChange={(e) => setTwoFactorCode(e.target.value)}
              required
              maxLength={6}
              className="mb-8"
            />

            <Button
              type="submit"
              className="w-full py-3 text-lg font-medium"
              disabled={twoFactorCode.length !== 6}
            >
              Verify
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900 p-4">
      <AnimatedDots />

      <Card className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Sign In
        </h1>

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
              <Input
                type="email"
                label="Email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mb-6"
              />

              <Input
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mb-2"
              />

              <div className="text-right mb-8">
                <button
                  type="button"
                  onClick={() => {
                    /* Handle forgot password */
                  }}
                  className="text-white/70 hover:text-white text-sm"
                >
                  Forgot password?
                </button>
              </div>
            </>
          ) : (
            <>
              <Input
                type="password"
                label="Password"
                name="password"
                placeholder="Enter your Password"
                value={userData.password}
                onChange={(e) => updateUserData({ password: e.target.value })}
                required
                className="mb-6"
              />

              <Input
                type="text"
                label={userData.idType}
                name="idNumber"
                placeholder={`Enter your ${userData.idType}`}
                value={userData.idNumber}
                onChange={(e) => updateUserData({ idNumber: e.target.value })}
                required
                className="mb-8"
              />
            </>
          )}

          <Button type="submit" className="w-full py-3 text-lg font-medium">
            Submit
          </Button>
        </form>

        <div className="text-center mt-4">
          <span className="text-white/70">Don't have an account?</span>
          <button
            onClick={() => navigate('/signup')}
            className="text-white ml-1 hover:underline"
          >
            Sign up
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SignInPage;
