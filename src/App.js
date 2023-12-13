import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from './components/login';
import DashBoard from './components/dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Check if the username and password match (you may replace this with your own logic)
    if (username === process.env.REACT_APP_USERNAME && password === process.env.REACT_APP_PASSWORD) {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', JSON.stringify(true));
    } else {
      alert("password and username missmatch")
      setIsLoggedIn(false);
      localStorage.setItem('isLoggedIn', JSON.stringify(false));
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  useEffect(() => {
    const loggedInState = localStorage.getItem('isLoggedIn');
    if (loggedInState) {
      setIsLoggedIn(JSON.parse(loggedInState));
    }
  }, []);
  useEffect(() => {
    const loggedInState = localStorage.getItem('isLoggedIn');
    if (loggedInState) {
      setIsLoggedIn(JSON.parse(loggedInState));
    }
  }, [handleLogout, isLoggedIn]);

  return (
    <>

      <Router>
        <Route path="/dashboard" exact>
          {/* <DashBoard handleLogout={handleLogout} /> */}
          {isLoggedIn ? <DashBoard handleLogout={handleLogout} /> : <Redirect to="/" />}
        </Route>
        <Route path="/" exact>
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Login handleLogin={handleLogin} />}
        </Route>
      </Router>



    </>
  );
}

export default App;
