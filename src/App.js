import { useContext } from 'react';
import Home from './pages/Home.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import "./style.scss";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate
} from "react-router-dom";
import { AuthContext } from './context/AuthContext.js';

function App() {

  const {currentUser} = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    } 
    
    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route 
            index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } 
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
