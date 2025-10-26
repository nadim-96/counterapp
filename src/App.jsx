import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

  return (
    <>
      <div
        className={`min-h-screen w-full relative flex flex-col items-center justify-start pt-10 transition-all duration-500 ${
          mode === 'light' ? 'bg-pink-300' : 'bg-gray-800'
        }`}
      >
        {/* Mode Button */}
        <button
          onClick={toggleMode}
          className="w-[130px] h-[50px] absolute top-5 right-5 bg-fuchsia-900 rounded-2xl text-white hover:bg-gray-950 text-sm sm:text-base"
        >
          {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>

        {/* Heading */}
        <marquee behavior="" direction="">
          <h1 className="text-fuchsia-900 text-5xl sm:text-7xl md:text-8xl font-bold mb-10 text-center">
            Counter
          </h1>
        </marquee>

        {/* Counter Display */}
        <div className="w-[200px] h-[100px] sm:w-[250px] sm:h-[120px] bg-fuchsia-900 flex flex-col justify-center items-center text-3xl sm:text-4xl text-white rounded-lg mb-6">
          <h2 className="font-bold">Count : {count}</h2>
        </div>

        {/* Increase / Decrease Buttons */}
        <div className="flex justify-center items-center space-x-3 mb-6 flex-wrap">
          <button
            onClick={() => {
              if (count > 0) {
                setCount(count - 1)
              }
            }}
            className="w-[120px] sm:w-[130px] h-[45px] sm:h-[50px] bg-fuchsia-900 rounded-2xl text-white hover:bg-gray-950 text-sm sm:text-base"
          >
            ➖ Decrease
          </button>

          <button
            onClick={() => setCount(count + 1)}
            className="w-[120px] sm:w-[130px] h-[45px] sm:h-[50px] bg-fuchsia-900 rounded-2xl text-white hover:bg-gray-950 text-sm sm:text-base"
          >
            ➕ Increase
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => setCount(0)}
          className="w-[120px] sm:w-[130px] h-[45px] sm:h-[50px] bg-fuchsia-900 rounded-2xl text-white hover:bg-gray-950 text-sm sm:text-base"
        >
          🔄 Reset
        </button>
      </div>
    </>
  )
}

export default App
