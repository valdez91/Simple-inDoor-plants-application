import React,{useState} from "react";
import '../App.css'
const SignupForm=({onLogin})=>{
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [confirmPassword, setConfirmPassword]=useState('');
    const [registeredUsers, setRegisteredUsers]=useState([]);
    const [registered, setRegistered]=useState('')

    const handleSignup=(e)=>{
        e.preventDefault ();
        if (password !== confirmPassword) {
            alert ("Password don't match!");
            return;
        }
        if (registeredUsers.find(user => user.email === email)){
            alert ("Email already registered. Please login.");
            return;
        }

        setRegisteredUsers([...registeredUsers, {email, password}]);

        setEmail('');
        setPassword('')
        setConfirmPassword('');
        setRegistered(true);

    }

    const handleLogin=(e)=>{
        e.preventDefault();

        const user=registeredUsers.find(user => user.email === email && user.password === password);
        if (user) {
            onLogin();
            setEmail('');
            setPassword('')
            setConfirmPassword('')
        } else {
            alert ('Invalid email or password. Please try again.')
        }
    }
   
    return (
        <div className="login-container">
      <form onSubmit={registered ? handleLogin : handleSignup}>
        {registered ? <h2>Login</h2> : <h2>Sign Up</h2>}
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            required
          />
        </div>
        {!registered && (
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-control"
              required
            />
          </div>
        )}
        <button type="submit" className="btn-primary">{registered ? 'Log In' : 'Sign Up'}</button>
        <p onClick={() => setRegistered(!registered)}>
          {registered ? 'Create an account' : 'Already have an account? Log in'}
        </p>
      </form>
    </div>
    )
}
export default SignupForm;