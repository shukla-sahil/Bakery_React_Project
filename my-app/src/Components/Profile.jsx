import React from 'react';
import './Profile.css'
const auth = localStorage.getItem('user')
console.log(auth);

const UserProfile = () => {
  return (
    <div className="user-profile">
      <div className="user-profile-header">
        <div className="user-profile-avatar">
          <img src="https://www.eirim.ie/eirim2017/wp-content/uploads/2016/09/dummy-profile-pic.jpg" alt="User Avatar" />
        </div>
        <div className="user-profile-details">
          <div className="user-profile-name">{JSON.parse(auth).name}</div>
          <div className="user-profile-location">Dubai, UAE</div>
          <div className="user-profile-phone">+1 012 345 678</div>
        </div>
        {/* <button className="user-profile-save-btn">SAVE</button> */}
      </div>
      <div className="user-profile-form">
        <div className="user-profile-form-field">
          <label htmlFor="email">E-MAIL</label>
          <input type="email" id="email" value={JSON.parse(auth).email} disabled />
        </div>
        <div className="user-profile-form-field">
          {/* <label htmlFor="password">PASSWORD</label>
          <input type="password" id="password" value="******" disabled /> */}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;