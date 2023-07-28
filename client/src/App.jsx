import {Routes, Route} from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import ChatLayout from './Pages/ChatLayout'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Error404 from './components/Error404'
import ProtectedRoute from './features/auth/ProtectedRoute'



function App() {
  return (
    <div className='max-h-screen flex flex-col items-center'>
    <Nav/>
    
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<ChatLayout/>}/>
      </Route>
      <Route path="*" element={<Error404/>}/>
    </Routes>
    
  
    </div>
  )
}
export default App
