import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        password,
      });
      console.log('Login response:', response);
      localStorage.setItem('token', response.data.token);
      navigateTo('/admin');
      alert('Login successful');
    } 
    catch (error) {
      console.error('Login error:', error);
      alert('Login failed');
    }
  };
  return (
    <div className=''>
      <h2 className="mb-2 mx-8 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Login!</h2>  
      <div className=' flex flex-col justify-center items-center'>
      <div className="mb-8">
        <input
          className="w-80 px-4 py-2 border text-gray-800 border-pink-300 rounded-md bg-pink-50"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
        <div className="mb-8">
          <input
            className="w-80 px-4 py-2 border text-gray-800 border-pink-300 rounded-md bg-pink-50"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>      
    <button className="bg-red-500 px-8 py-2 mb-4 rounded hover:bg-red-300"onClick={handleLogin}>Login</button>
    </div>
    </div>
  );
};

export default Login;
