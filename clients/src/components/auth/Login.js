import React, {useState, useContext} from 'react';
import auth from '../../css/auth.css';
import login from '../../css/login.css';
import Axios from 'axios';
import UserContext from '../../context/UserContext';
import {useHistory, Link} from 'react-router-dom';
import ErrorNotice from '../misc/ErrorNotice';



const Login = () => {
    const [email, setEmail ] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();


    const{setUserData} = useContext(UserContext);
    const history = useHistory();


    const submit = async (e) =>{
        e.preventDefault();
       try {
        const loginUser = {email, password};
        const loginRes = await Axios.post("https://mernstackexpensetracker.herokuapp.com/users/login",loginUser
        
        );
        setUserData({
            token:loginRes.data.token,
            user:loginRes.data.user
        });
        localStorage.setItem("auth-token", loginRes.data.token);
        history.push("/");

        } catch (err) {
       
            err.response.data.msg && setError(err.response.data.msg);
       }
    };

    return (
        <div className = "container">
        <div className ="page" >
        <h2>Login</h2>
        {error && (<ErrorNotice message ={error} clearError = {() => setError(undefined)}/>

)}
        <form className = "form"onSubmit = {submit}>
            <label htmlFor ="login-email">Email</label>
            <input id ="login-email"type="email" onChange = {(e) =>setEmail(e.target.value)}/>

<label htmlFor = "login-password">Password</label>
<input id = "login-password" type = "password" onChange = {(e) => setPassword(e.target.value)} />


<input type = "submit" value = "Log in"/>
<p>Don't Have an Account {" "} <Link to ="/register">Sign Up</Link></p>





        </form>
       </div>
       </div>
    )
    }
export default Login
