import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
 const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    password: '',
 });

 useEffect(() => {
    fetchProfileData();
 }, []);

 const fetchProfileData = async () => {
    try {
      const response = await axios.get(
        'https://react-node-bookstore.herokuapp.com/profile'
      );
      setProfileData(response.data);
    } catch (error) {
      console.log(error);
    }
 };

 return (
    <div>
      <h1>Profile</h1>
      <p>Name: {profileData.name}</p>
      <p>Email: {profileData.email}</p>
      <p>Password: {profileData.password}</p>
    </div>
 );
};

export default Profile;