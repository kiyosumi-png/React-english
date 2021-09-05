import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
    return (
        <div className="app">
            <Header />
            <Router>
                <Sidebar />
                <Feed />
            </Router>
        </div>
    );
}

export default App;
