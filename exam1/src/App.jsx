import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Product from './product'

function App() {
  // const [count, setCount] = useState(0)

  return (
   <div>
     <Home />
     <Product />
   </div>
  )
}

export default App
