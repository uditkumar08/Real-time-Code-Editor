import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { EditorPages } from './pages/EditorPages'
import './App.css'
import { Toaster } from 'react-hot-toast'
function App() {
 

  return (
    <>
      <div>
        <Toaster
        position='top-right'
        toastOptions={
          {
            success:{
              theme:{
                primary:"#4aed88"
              }
            }
          }
        }></Toaster>
      </div>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/editor/:roomId' element={<EditorPages/>}></Route>
       </Routes>
      
    </>
  )
}

export default App
