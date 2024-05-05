import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import { RecoilRoot } from 'recoil'
import Home from './pages/Home'

function App() {
  return (
    <div className='bg-black'>
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App