import { useState } from 'react'
import './App.css'

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

    </>
  )
}


export default App


