
import './App.css';
import Layout from './Components/pages/Layout';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Components/pages/Home'
import Contact from './Components/pages/Contact'
import LoginReg from './Components/pages/auth/LoginReg';
import Dashboard from './Components/pages/Dashboard';
function App() {
  return (
    <BrowserRouter>
<Routes>
<Route path="/" element={<Layout/>}>
  <Route index element={<Home/>}/>
<Route path='contact' element={<Contact/>}/>
<Route path='login' element={<LoginReg/>}/>
<Route path='dashboard' element={<Dashboard/>}/>
</Route>
</Routes>
</BrowserRouter>
  )

 
}

export default App;
