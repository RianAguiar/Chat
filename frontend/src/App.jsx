import { useState } from 'react'
import './styles/App.css'
import Input from './components/Input'
import Button from './components/Button'
import Gsc from './components/Gsc'

function App() {
  const eastereggemoji = '🧛‍♀️'
  return (
    <>
    <h1 id='avocadochat' className='avocadochat'>🥑Avocado Chat</h1>

    <div className='indexcontainerdad'>
      <div className='indexcontainer'>
        <Input placeholder='Your Name' className='indexinput'/>
        <Input placeholder='Room Name' className='indexinput'/>
        <Button written='Get In' className='indexenterbutton'/>
      </div>
    </div>

    <div>
      <Gsc className='indexeasteregg'/>
    </div>
    </>
  )
}


export default App


