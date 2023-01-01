import './App.css'
import { BoxNeon } from './components/box_neon/BoxNeon'
import { About } from './layout/About/About'
import { Footer } from './layout/Footer/Footer'
import { Home } from './layout/Home/Home'
import { Projects } from './layout/Portfolio/Projects'

function App() {
  return (
    
    <div className="App">
      <BoxNeon component={<Home/>} rhomb={true}/>
      <BoxNeon component={<About/>} />
      <BoxNeon component={<Projects/>}/>  
      <BoxNeon component={<Footer/>}/>
    </div>
  )
}

export default App
