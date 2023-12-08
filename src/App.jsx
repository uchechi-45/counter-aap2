
import React from 'react'
import './App.css' 
import Calc from './components/Calc'
import Login from './components/Login'
import Rgister from './components/Rgister'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';



const App= () => {

  return (
    <>
   <Router>


     <Routes>
      <Route path='/login'element={<Login/>} />
      <Route path='/register'element={<Rgister/>} />
     </Routes>     
   </Router>

    </>
  )
}

export default App