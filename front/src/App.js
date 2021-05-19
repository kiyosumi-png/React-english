import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';


function App() {
  return ( 
    <Router>
      <div className="App">
          <Sidebar />
          <Feed />
      </div>
    </Router>
  );
}

export default App;
