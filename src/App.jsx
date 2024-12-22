import React, { useContext } from 'react'
import { TodoContext } from './Component/Context/Context'
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import Task from './Component/Templates/Task';
;const App = () => {
  const data=useContext(TodoContext)
  return (
    <div className='w-screen h-screen bg-black text-white'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/task' element={<Task/>}/>
      </Routes>
    </div>
  )
}

export default App  