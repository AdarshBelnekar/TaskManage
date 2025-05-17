'use client';

import { useState } from 'react';
import { AuthForm } from '@/components/AuthForm';

export default function AuthPage() {
  const [formType, setFormType] = useState('login'); // 'login' or 'register'

  const toggleForm = () => {
    setFormType((prev) => (prev === 'login' ? 'register' : 'login'));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-8">
        <AuthForm type={formType} />

        <div className="text-center mt-6">
          {formType === 'login' ? (
            <>
              <p className="text-gray-600">Don't have an account?</p>
              <button
                onClick={toggleForm}
                className="text-blue-600 hover:underline font-medium mt-1"
              >
                Register here
              </button>
            </>
          ) : (
            <>
              <p className="text-gray-600">Already have an account?</p>
              <button
                onClick={toggleForm}
                className="text-blue-600 hover:underline font-medium mt-1"
              >
                Login here
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
