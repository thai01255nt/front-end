import './App.css';
import './styles/sb-admin-2.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { PrivateRoute } from './components';
import { Login } from './pages/Account';
import { Admin } from './pages/Admin/Admin';


function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route path='/' element={<PrivateRoute><Admin/></PrivateRoute>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
