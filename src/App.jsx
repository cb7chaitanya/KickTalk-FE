import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Landing from './pages/Landing'

function App() {
  return (
    <div className=''>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App