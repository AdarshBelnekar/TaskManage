'use client';
import { useState } from 'react';

export const AuthForm = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    field: '',
    userType: 'user',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type === 'register' && formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-8 rounded-lg shadow max-w-md w-full">
      <h2 className="text-2xl font-bold text-center">
        {type === 'login' ? 'Login to your account' : 'Create a new account'}
      </h2>
      {type === 'register' && (
        <>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="input"
          />
          <input
            name="field"
            placeholder="Field"
            value={formData.field}
            onChange={handleChange}
            required
            className="input"
          />
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            required
            className="input"
          >
            <option value="manager">Manager</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </>
      )}
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="input"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        required
        className="input"
      />
      {type === 'register' && (
        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          className="input"
        />
      )}
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
        {type === 'login' ? 'Login' : 'Register'}
      </button>
    </form>
  );
};
