import { useState } from 'react'
import Navbar from '../Components/Navbar'
import Profile from '../Components/Profile'
import { RouteApp } from '../Route'
import Abount from './Abount/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="content-app mt-16">
      <Profile />

      <section className='border-2 border-[#383838] bg-[#1e1e1f] rounded-3xl w-[60rem]'>
        <RouteApp />
      </section>
    </div>
  )
}

export default App
