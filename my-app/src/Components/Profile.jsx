import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
const auth = localStorage.getItem('user');
const user = auth ? JSON.parse(auth) : null;

const UserProfile = () => {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  // logout button for loggin out and redirect to signup page for login again
  const logout=()=>{
    localStorage.clear();
    navigate('/')
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: "url('/background.png')"}}>
      <div className="w-1/4 bg-opacity-10 backdrop-filter backdrop-blur-lg bg-clip-padding-box rounded-2xl overflow-hidden shadow-2xl shadow-white border-4">
        <div className="px-8 py-10">
          <div className="text-center mb-6">
            <img src="/images/client.jpg" alt="User Avatar" className="w-50 h-50 mx-auto rounded-full object-fill" />
          </div>
          <div className="text-center mb-6">
            <div className="font-bold text-4xl mb-2 p-2 border-2 border-white rounded-lg">{user ? user.name : 'Guest'}</div>
            <div className="font-bold text-3xl text-gray-100">Delhi , INDIA</div>
          </div>
          <div className="mb-6">
            <div className=" items-center text-center mb-4">
              <div className="font-bold text-3xl text-pink-100">Phone:</div>
              <div className="font-bold text-3xl">+91 9589632545</div>
            </div>
            <div className=" text-center">
              <div className="font-bold text-3xl text-pink-100">E-mail:</div>
              <div className="font-bold text-3xl">{user ? user.email : 'Email'}</div>
              <Link onClick={logout}to='/'><span style={{color: "white",
                fontWeight: "600",
                fontSize: "20px"}}>Logout</span></Link> : <Link to='/login'><i  class="fas fa-sign-in-alt"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
