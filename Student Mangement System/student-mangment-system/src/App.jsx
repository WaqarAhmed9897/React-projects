import { useState } from 'react'
import './App.css'
import { app } from './components/firebase';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import MainApp from './components/MainApp';
import SignUpCopy from './pages/SignUp copy';
import { Route, Routes } from 'react-router-dom';
import LoginCopy from './pages/Login copy';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LoginCopy />} />
        <Route path='/Signup' element={<SignUpCopy />} />
        <Route path='/App' element={<MainApp />} />
      </Routes>
    </>
  )
}

export default App
