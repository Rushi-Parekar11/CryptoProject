import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import {Route,Routes} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Coin from "./Pages/Coins/Coin"
import Footer from './Components/Footer/Footer'
import {SkeletonTheme} from "react-loading-skeleton"

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
    <div className="AppMain">
    <SkeletonTheme baseColor='#313131' highlightColor='#525252'>
      <Navbar/>
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
      </SkeletonTheme>
    </div>
  </>
  )
}

export default App
