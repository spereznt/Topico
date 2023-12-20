import { useRoutes,BrowserRouter } from 'react-router-dom'

import Dashboard from '../Dashboard'
import Home from '../Home'
import Login from '../Login'
import Notfound from '../NotFound'
import Procedimientos from '../Procedimientos'
import Reports from '../Reports'

import Navbar from '../../Components/Navbar'

import './App.css'

const AppRoutes=()=>{
  let routes = useRoutes([
    {path : '/dashboard',element:<Dashboard/>},
    {path : '/',element:<Home/>},
    {path : '/login',element:<Login/>},
    {path : '/procedimientos',element:<Procedimientos/>},
    {path : '/reports',element:<Reports/>},
    {path : '/*',element:<Notfound/>},
  ])
  return routes
}

const App=()=> {
  return (
    <BrowserRouter>
      <AppRoutes/>
    
    </BrowserRouter> 
  )
}

export default App
