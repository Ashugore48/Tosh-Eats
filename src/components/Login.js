import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    const enteredEmail = email;
    const enteredPassword = password;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(u => u.email === enteredEmail);

    if (user && user.password === enteredPassword) {
      alert('Login successful');
      localStorage.setItem('currentUser', JSON.stringify(user));
      window.location.href = "/";

      // Redirect or perform other actions after login
    } else {
      setError('Incorrect credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-3 py-2 block w-full rounded-md border border-black"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 px-3 py-2 block w-full rounded-md border border-black"
            />
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
