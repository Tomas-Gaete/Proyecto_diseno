import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
 const [formData, setFormData] = useState({
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
        'https://react-node-bookstore.herokuapp.com/signin',
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
 };

 return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
 );
};

export default Signin;