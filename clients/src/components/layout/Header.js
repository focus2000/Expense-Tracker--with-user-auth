import React from 'react';
import {Link}from 'react-router-dom';
import AuthOptions from '../auth/AuthOptions';
import auth from '../../css/auth.css'
import header from '../../css/header.css';

const Header = () => {
    return (
        <header id ="header">
        <Link to="/">
        <h2 className ="title">Expense-Tracker</h2>
        </Link>
        <AuthOptions/>
        </header>
    )
}

export default Header
