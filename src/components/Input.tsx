import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps {
  type?: 'text' | 'password' | 'email' | 'tel' | 'number';
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  name?: string;
  required?: boolean;
  className?: string;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  label,
  name,
  required = false,
  className = '',
  maxLength,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`${className}`}>
      {label && (
        <label htmlFor={name} className="block text-white mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          type={inputType}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          maxLength={maxLength}
          className="w-full px-4 py-2 bg-white/20 rounded-md border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;