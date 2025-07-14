import Carousel from './Components/Carousel'
import Navbar from './Components/Navbar'
import Solutions from './Components/Solutions'
import TopBar from './Components/TopBar'
import './index.css'

function App() {

  return (
    <div className='font-nunito'>
      <TopBar/>
      <Navbar/>
      <Carousel/>
      <Solutions/>
    </div>
  )
}

export default App
