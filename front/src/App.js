import React from 'react';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import WordContextProvider from './context/WordContext';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AddButton from './components/header/menue/AddButton';

function App() {
    return (
        <Router>
            <div className="app">
                <WordContextProvider>
                    <Sidebar />
                    <Feed />
                    <AddButton />
                </WordContextProvider>
            </div>
        </Router>
    );
}

export default App;
