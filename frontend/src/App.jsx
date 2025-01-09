import {Outlet} from'react-router-dom'
import Navbar from './components/Navbar'
//import { Analytics } from '@vercel/analytics/next';
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
     <div className=' min-h-screen flex flex-col dark:bg-bgPrimary dark:text-white'>
       <Navbar/>
       <div className='flex-grow lol shadow-[#b9b8b8]  dark:shadow-white shadow-sm'> <Outlet/> </div>
       <div className='mt-auto lol'><Footer/></div>
     </div>
    </>
  )
}

export default App
