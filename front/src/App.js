import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import WordContextProvider from './context/WordContext';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <div className="app">
                <WordContextProvider>
                    <Sidebar />
                    <Feed />
                    <Header />
                </WordContextProvider>
            </div>
        </Router>
    );
}

export default App;
