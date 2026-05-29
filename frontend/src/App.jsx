import { useState } from 'react'
import './styles/App.css'
import HelloWorld from './components/HelloWorld'
import Frase from './components/Frase'

function App() {
  const emoji = '❤'
  return (
    <>
    <div className='indextopcontainer'>
      <button id='signup' className='signup'>sign up</button>
      <button id='signin' className='signin'>sign in</button>
    </div>

    <h1 id='avocadochat' className='avocadochat'>{emoji}🥑Avocado Chat</h1>

    <div className='indexcontainer'>
      <input type="" name="" id="indexinput" placeholder='Room Name' className='indexinput'/>
      <button id='indexenterbutton' className='indexenterbutton'>Enter</button>
    </div>
    <div>
      <HelloWorld/>
      <Frase/>
    </div>
    </>
  )
}


export default App


