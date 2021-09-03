import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';

function App() {
    return (
        <div className="app">
            <Header />
            <Sidebar />
            <Feed />
        </div>
    );
}

export default App;
