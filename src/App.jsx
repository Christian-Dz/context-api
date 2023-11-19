import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { MyPage } from './Components/MyPage'
import { MyPageContext } from './Components/MyPageContext'

function App() {
  
  return (
    <>
      <MyPage/>
      <hr/>
      <MyPageContext/>
    </>
  )
}

export default App
