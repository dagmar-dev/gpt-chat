import {Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import ChatLayout from './Pages/ChatLayout'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Error404 from './components/Error404'
import ProtectedRoute from './features/auth/ProtectedRoute'
import { useState } from 'react'

function App() {
    const [user, setUser] =useState(null);

  const handleLogin = () => setUser({ id: '1', name: 'robin' });
  const handleLogout = () => setUser(null);
  

  return (
    <div className='max-h-screen flex flex-col items-center'>
    <Nav user={user}/>
    
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path='/login' element={<Login user={user}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route element={<ProtectedRoute user={user}/>}>
        <Route path="/home" element={<ChatLayout/>}/>
      </Route>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    
    {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}
    </div>
  )
}
const Home = () => {
  return <h2>Home (Protected: authenticated user required)</h2>;
};

export default App
