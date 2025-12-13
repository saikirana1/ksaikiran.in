import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600'>
        <h1 className='text-5xl font-bold text-white drop-shadow-lg'>Hi, I'm Saikiran</h1>
      </div>
    </>
  )
}

export default App
