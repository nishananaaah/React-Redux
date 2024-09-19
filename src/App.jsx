import { useState } from 'react'
import {Provider} from 'react-redux'
import './App.css'
import CakeContainer from './Components/CakeContainer'
import Store from './Redux/Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={Store}>
    <>
      <CakeContainer/>
    </>
    </Provider>
  )
}

export default App
