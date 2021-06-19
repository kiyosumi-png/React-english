import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import WordContextProvider from './context/WordContext';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import Feed from './components/Feed';

function App() {
    return (
        <Router>
            <div className="app">
                <WordContextProvider>
                    <Header />
                    <Sidebar />
                    <Feed />
                </WordContextProvider>
            </div>
        </Router>
    );
}

export default App;
