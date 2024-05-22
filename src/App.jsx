import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'
import { RecoilRoot } from 'recoil'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Community from './pages/Community'
import Post from './pages/Post'
import Communities from './pages/Communities'

function App() {
  return (
    <div className='bg-black'>
      <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/:communityId' element={<Community />} />
          <Route path='/post/:postId' element={<Post />} />
          <Route path='/community' element={<Communities />} />
        </Routes>
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App