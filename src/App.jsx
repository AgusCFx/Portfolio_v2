import './App.css'
import { About } from './layout/About/About'
import { Footer } from './layout/Footer/Footer'
import { Home } from './layout/Home/Home'
import { Projects } from './layout/Portfolio/Projects'

function App() {
  return (
    
    <div className="App">
      <Home/>
      <About/>
      <Projects/>  
      <Footer/>
    </div>
  )
}

export default App
