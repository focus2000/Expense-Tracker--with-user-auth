import React from 'react';
import error from '../../css/error.css';

const ErrorNotice = (props) => {
    return (
        <div className = "error-notice">
            <span>{props.message}</span>
            <button onClick = {props.clearError}>x</button>
            
        </div>
    )
}

export default ErrorNotice
