import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './data'
import Popup_allwindow from './componaints/popup_allwindow'

function App() {
  const [count, setCount] = useState(0);

  return (
   <>
   <Data />
   </>
  )
}

export default App
