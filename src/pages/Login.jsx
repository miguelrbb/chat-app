import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export default function Login() {

  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch(err) {
      setErr(true);
    }
  
  }

  return (
    <div className="formContainer">
      <div className="formWrapper">
      <span className="logo">Chat app</span>
      <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <button>Login</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Don't you have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};
