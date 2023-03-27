import { useState } from 'react'
import Profile from '../Components/Profile'
import { RouteApp } from '../Route'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="content-app mt-16 mb-16">
      <Profile />

      <section className='border-2 border-[#383838] bg-[#1e1e1f] rounded-3xl w-[60rem] pb-8'>
        <RouteApp />
      </section>
    </div>
  )
}

export default App
