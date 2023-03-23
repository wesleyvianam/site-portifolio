import { useState } from 'react'
import { RouteApp } from './Route'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="text-3xl font-bold underline">
      <RouteApp />
    </div>
  )
}

export default App
