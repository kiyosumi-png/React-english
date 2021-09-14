import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import SignIn from './components/userAuth/SignIn';
import SignUp from './components/userAuth/SignUp';

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Sidebar />
                <Feed />
                <Route exact path="/sign_in" component={SignIn} />
                <Route exact path="/sign_up" component={SignUp} />
            </Router>
        </div>
    );
}

export default App;
