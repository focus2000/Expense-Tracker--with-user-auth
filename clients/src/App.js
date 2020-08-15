import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Header from './components/layout/Header';
import './App.css';

import Axios from 'axios';

import {TransactionProvider} from './context/TransactionContext';
import UserContext from './context/UserContext';


function App() {
  const [userData, setUserData] = useState({
    token:undefined,
    user:undefined,
  });

  useEffect(() =>{
    const checkLoggedIn = async () =>{
      let token = localStorage.getItem("auth-token");
      if(token === null){
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await Axios.post("http://localhost:5000/users/tokenIsValid", null,
      {headers: {"x-auth-token":token}}
      );
      if(tokenRes.data){
        const userRes = await Axios.get("http://localhost:5000/users/", {headers:{"x-auth" :token},

      });
      setUserData({
        token,
        user:userRes.data,
      });

      }

    }
    checkLoggedIn();

  }, []);


  return (
    
      <BrowserRouter>
      <UserContext.Provider value={{userData, setUserData}}>
      <TransactionProvider>
      
     < Header/>
      
      <Switch>

        <Route exact path ="/" component={Home}/>
        <Route path ="/register" component={Register}/>
        <Route path ="/login" component={Login}/>
      </Switch>
      </TransactionProvider>
      </UserContext.Provider>
      </BrowserRouter>
  
     
    
  );
}

export default App;
