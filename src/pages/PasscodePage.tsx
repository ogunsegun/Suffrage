import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedDots from '../components/AnimatedDots';
import { useUser } from '../context/UserContext';

const PasscodePage: React.FC = () => {
  const navigate = useNavigate();
  const { updateUserData } = useUser();
  const [passcode, setPasscode] = useState<string[]>(Array(6).fill(''));
  
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  
  // Initialize input refs
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);
  
  const handleChange = (index: number, value: string) => {
    // Allow only numbers
    if (!/^\d*$/.test(value)) return;
    
    const newPasscode = [...passcode];
    newPasscode[index] = value;
    setPasscode(newPasscode);
    
    // If a digit is entered and there is a next input, focus on it
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle backspace
    if (e.key === 'Backspace') {
      if (!passcode[index] && index > 0) {
        // If current input is empty and there is a previous input, focus on it
        inputRefs.current[index - 1]?.focus();
      }
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all inputs are filled
    if (passcode.every(digit => digit)) {
      updateUserData({ passcode: passcode.join('') });
      navigate('/create-password');
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900 p-4">
      <AnimatedDots />
      
      <Card className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-white text-center mb-2">Create a Passcode</h1>
        <p className="text-white/70 text-center mb-8">Six digit you can remember</p>
        
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center gap-2 mb-8">
            {passcode.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center bg-white/20 border border-white/30 rounded-md text-white text-xl focus:outline-none focus:ring-2 focus:ring-white/50"
                required
                autoFocus={index === 0}
              />
            ))}
          </div>
          
          <Button
            type="submit"
            className="w-full py-3 text-lg font-medium"
            disabled={!passcode.every(digit => digit)}
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

export default PasscodePage;