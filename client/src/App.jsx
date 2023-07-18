import {Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import ChatLayout from './Pages/ChatLayout'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import NoMatch from './components/NoMatch'
import ProtectedRoute from './components/ProtectedRoute'
import { useState } from 'react'

function App() {
    const [user, setUser] =useState(null);

  const handleLogin = () => setUser({ id: '1', name: 'robin' });
  const handleLogout = () => setUser(null);
  

  return (
    <div className='max-h-screen flex flex-col items-center'>
    <Nav/>
    
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path='/login' element={<Login user={user}/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route element={<ProtectedRoute user={user}/>}>
        <Route path="/home" element={<ChatLayout/>}/>
      </Route>
      <Route path="*" element={<NoMatch/>}/>
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
