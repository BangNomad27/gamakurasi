// import './css/App.css';
// import './css/Sb-admin-2.css';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Sidebar from './components/Sidebar';


const App = () => {
  return (
    <Router>
      <div className="App">
          <div>
            <Sidebar />
            <Routes path="/dashboard-page" exact element={<Dashboard />} />
          </div>
          <div>
            {/* <Dashboard /> */}
          </div>
      </div>
    </Router>
  );
}

export default App;
