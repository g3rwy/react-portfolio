import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Calculator from './components/Calculator'

/*TODO
- Calculator
- Stock visualizer
- Clock local and worldwide
- Color picker (changing color on the page)
- Stopwatch?
- 3D spinning cube??
*/

function App() {

  return(
    <>
    <div className="current-app">
      <Calculator />
    </div>
    </>
  )
}

export default App
