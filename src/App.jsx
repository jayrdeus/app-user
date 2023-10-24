import {Routes, Route} from 'react-router-dom';
import Users from './pages/Users';
import UserInfo from './pages/UserInfo';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Users/>} />
      <Route exact path='/user/:id' element={<UserInfo/>} />
    </Routes>
    </>
  )
}

export default App
