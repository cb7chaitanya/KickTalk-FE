import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import { RecoilRoot } from 'recoil'
import Home from './pages/Home'
import Profile from './pages/Profile'
import CreatePost from './pages/createPost'
import Community from './pages/Community'

function App() {
  return (
    <div className='bg-black'>
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/createPost' element={<CreatePost/>}/>
          <Route path='/community' element={<Community />} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App