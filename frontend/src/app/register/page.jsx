'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter(); // Add router hook
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({
    name: '',
    type: '',
    email: '',
    password: '',
    confirmPassword: '',
    category: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin && form.password !== form.confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    if (isLogin) {
      console.log('Logging in:', form.email, form.password);
      // Perform login logic here...
    } else {
      console.log('Registering:', form);
      // Perform registration logic here...
    }

    // Redirect to /task after successful login or registration
    router.push('/task');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isLogin ? 'Login to Your Account' : 'Create a New Account'}
        </h2>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              />
              <select
                name="type"
                onChange={handleChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
                required
              >
                <option value="">Select Type</option>
                <option value="user">User</option>
                <option value="manager">Manager</option>
                <option value="admin">Admin</option>
              </select>
            </>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {!isLogin && (
            <select
              name="category"
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            >
              <option value="">Select Category</option>
              <option value="designer">Designer</option>
              <option value="coder">Coder</option>
              <option value="tester">Tester</option>
            </select>
          )}

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {!isLogin && (
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              required
            />
          )}

          <button
            type="submit"
            className={`w-full py-2 rounded text-white ${isLogin ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'}`}
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          {isLogin ? (
            <>
              New here?{' '}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Create an account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login here
              </button>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
