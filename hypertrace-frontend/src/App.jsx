import { useState } from 'react'
import './App.css'
import { BrowserRouter} from 'react-router-dom'
import { getAppRouter } from './utils/Helper'
function App() {
  const [count, setCount] = useState(0)
  const CurrentApp = getAppRouter();
  return (
		<>
			<BrowserRouter>
        <CurrentApp />
      </BrowserRouter>
		</>
	);
}

export default App
