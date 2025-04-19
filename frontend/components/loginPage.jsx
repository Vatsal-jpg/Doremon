import React from 'react';
import '../styles/login.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Doraemon <br />Inventory System</h1>

        <div className="gadget-icons">
          <img src="/Images/TakeCopter.png" alt="Take Copter" />
          <img src="/Images/AnywhereDoor.png" alt="Anywhere Door" />
          <img src="/Images/MemoryBread.png" alt="Memory Bread" />
          <img src="/Images/BambooCopter.png" alt="Bamboo Copter" />
        </div>

        <form className="login-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder='Username' name="" id="" />
        <input type="text" placeholder='Enter your Role' name=''/>
          <a href="#" className="forgot-password">Forget password?</a>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
