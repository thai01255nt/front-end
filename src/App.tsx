import './App.css';
import './styles/sb-admin-2.min.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AccountRoute, PrivateRoute } from './components';
import { Login } from './pages/Account';
import { Admin } from './pages/Admin/Admin';


function App() {
  return (
    <div className="App" id="wrapper">
      <Router>
        <Routes>
          <Route path='/login' element={<AccountRoute><Login/></AccountRoute>}/>=
          <Route path='/*' element={<PrivateRoute><Admin/></PrivateRoute>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
