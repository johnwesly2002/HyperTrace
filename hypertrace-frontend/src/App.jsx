import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import AboutPage from './components/AboutPage/AboutPage'

function App() {
  const [count, setCount] = useState(0)

  return (
		<>
			<BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
      </BrowserRouter>
		</>
	);
}

export default App
