import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { Login } from './components'
import { Dashboard } from './components'
import { Web3Provider } from './context/Web3Context'

function App() {
  const [account, setAccount] = useState(localStorage.getItem('account') || '')

  return (
    <Web3Provider>
      <div className='bg-gradient-to-tr from-blue-400 to-blue-800 h-screen w-screen flex justify-center items-center px-[20pt]'>
        {
          account ? <Dashboard /> : <Login />
        }
      </div>
    </Web3Provider>
  )
}

export default App
