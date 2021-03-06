import React, {useContext} from 'react';
import {useHistory} from 'react-router-dom';
import UserContext from '../../context/UserContext';

const AuthOptions = () => {
    const {userData, setUserData} = useContext(UserContext);

    const history = useHistory();

    const register = () => history.push("/register");
    const login = () => history.push("/login");
    const logout = () => {

        setUserData({

            token:undefined,
            user:undefined
        });
        localStorage.setItem("auth-token", "")
    }
    return (
        <nav className="auth-options">
           
           {userData.user? (
                    <button onClick={logout}>Log out</button>

                    ):(
                        <>
                        <button onClick={register}>Sign in</button>
                    <button onClick={login}>Log in</button>
                  
                     </>
                    )}
                  </nav>
                    );
                }
               
        
         


export default AuthOptions
