import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import SideBar from './SideBar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex'>
      <SideBar />

    </div>
  )
}

export default App
