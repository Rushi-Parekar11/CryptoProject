import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import {Route,Routes} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Coin from "./Pages/Coins/Coin"
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className="AppMain">
      <Navbar/>

      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/coin/:coinId' element={<Coin/>}/>
      </Routes>

      <Footer/>
    </div>
  </>
  )
}

export default App
