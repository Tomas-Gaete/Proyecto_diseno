import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://react-node-bookstore.herokuapp.com/signup',
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
 };

 return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
 );
};

export default Signup;