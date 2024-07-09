import React from 'react';

const Profile = ({ user }) => {
  return (
    <div>
      <h2>Profile</h2>
      <p>Email: {user.email}</p>
      <p>Full Name: {user.fullName}</p>
      {/* Add more user data fields as needed */}
    </div>
  );
};

export default Profile;