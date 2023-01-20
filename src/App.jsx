import { useState } from 'react'
import './App.css'
import { BoxNeon } from './components/box_neon/BoxNeon'
import { About } from './layout/About/About'
import { Footer } from './layout/Footer/Footer'
import { Home } from './layout/Home/Home'
import { Projects } from './layout/Portfolio/Projects'

function App() {
  const [crt, setCRT] = useState(true)
  return (
    <div className={
      crt ? 'App crt' : 'App'
      }>
      <BoxNeon component={<Home crt={crt} setCRT={setCRT}/>} rhomb={true} />
      <BoxNeon component={<About/>} rhomb={true} />
      <BoxNeon component={<Projects/>} rhomb={false}/>  
      <BoxNeon component={<Footer/>} rhomb={false}/>
    </div>
  )
}

export default App
