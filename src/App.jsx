import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Calculator from './components/Calculator'
import Colorpick from './components/Colorpick'

/*TODO
- ~~Calculator~~
- Clock local and worldwide
- Stock visualizer
- Color picker (changing color on the page)
- Stopwatch?
- 3D spinning cube??
*/

const apps = [
  "Calculator",
  "Color picker"
]

function App() {

  const [app, setApp] = useState(apps[0])
  function handleButtons(e) {
    setApp(e.target.textContent);
    if (!apps.includes(app)){
      alert("APP NOT FOUND")
      setApp(apps[0])
    }
  }

  switch(app){
    case "Calculator":
        return(
          <>
          <div className="current-app">
              <div id="navbar">
                <button onClick={handleButtons}>Calculator</button>
                <button onClick={handleButtons}>Color picker</button>
              </div>
              <div id="app">
                <Calculator />
              </div>
          </div>
          </>
        )
    case "Color picker":
      return(
        <>
        <div className="current-app">
            <div id="navbar">
              <button onClick={handleButtons}>Calculator</button>
              <button onClick={handleButtons}>Color picker</button>
            </div>
            <div id="app">
              <Colorpick />
            </div>
        </div>
        </>
      )
    
      default:
        alert("APP NOT FOUND")
        location.reload()
        return(<></>)
  }

}

export default App
