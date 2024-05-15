import React,{useState} from 'react';
import PlantPage from './components/PlantPage'
import SignupForm from './components/SignupForm';
function App() {
  const [loggedIn, setLoggedIn]=useState(false);
  const [user, setUser]=useState(null);


  const handleLogin=(username)=>{
    setUser(username);
    setLoggedIn(true);
  }

  return (
    <div className="App">
      <h1>Login to View Plants</h1>
      {loggedIn ? (
        <PlantPage />
      ):(
        < SignupForm onLogin={handleLogin}/>
      )}
    </div>
  );
}

export default App;
