import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main></main>
      </div>
    )
}

export default App
