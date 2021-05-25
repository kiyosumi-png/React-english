import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return ( 
    <Router>
      <div className="app">
        <Sidebar />
        <Feed />
      </div>
    </Router>
  );
}

export default App;
