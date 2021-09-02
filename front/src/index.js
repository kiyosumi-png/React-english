import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SignIn from './components/userAuth/SignIn';
import SignUp from './components/userAuth/SignUp';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
            <Route exact path="/auth/sign_in" component={SignIn} />
            <Route exact path="/auth/sign_up" component={SignUp} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
