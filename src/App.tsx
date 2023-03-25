import { useState } from 'react'
import Profile from './Components/Profile'
import Abount from './page/Abount/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="content-app mt-16">
      <Profile />
      <Abount />
    </div>
  )
}

export default App
