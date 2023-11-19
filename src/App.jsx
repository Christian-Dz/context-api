
import './App.css'
import { MyPage } from './Components/MyPage'
import { MyPageContext } from './Components/MyPageContext'
import { CrudApi } from "./Components/CrudApi"
import { CrudProvider } from './Components/CrudContext'


function App() {
  
  return (
    <>
      <CrudProvider>
      <CrudApi/>
      </CrudProvider>
      <hr/>
      <MyPageContext/>
      <hr/>
      <MyPage/>
    </>
  )
}

export default App
