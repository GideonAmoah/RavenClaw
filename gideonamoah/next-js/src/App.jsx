import { Route,Routes } from "react-router-dom";
import './App.css'
import Btn from '../src/components/btn'
import ShowCase from './pages/showcase'
import Blogs from './pages/blogs'
import Docs from './pages/docs'
import Enterprise from './pages/enterprise'
import Templates from './pages/templates'
import Next from "./pages/next";




export default function App(){
  return(
    <div className='bg-mist-900 h-screen'>
    
    <div className="flex justify-between space-x-4  text-white p-6  bg-mist-900 gap-4">
    <ul className=" flex gap-4 mt-2.5 text-olive-400">
    <a  className="hover:text-gray-300 cursor-pointer text-4xl" href="/Next">Next.Js</a>
     <a  className="hover:text-gray-300 cursor-pointer mt-2.5" href="/showcase">Showcase</a>
    <a  className="hover:text-gray-300 cursor-pointer mt-2.5" href="/docs">Docs</a>
    <a  className="hover:text-gray-300 cursor-pointer mt-2.5" href="/Blogs">Blogs</a>
    <a  className="hover:text-gray-300 cursor-pointer mt-2.5" href="/Enterprise">Enterprise</a>
    <a  className="hover:text-gray-300 cursor-pointer mt-2.5" href="/Templates">Templates</a>
    </ul> 
    <div className="flex justify-between space-x-4">
    <input className="rounded-md mt-3  outline-1 outline-olive-400 border-neutral-200 large:text-1xl px-3 py-1 " type="text" placeholder="search documentation..."></input>
    <Btn name="Deploy" color="bg-zinc-950" textcolor="text-white"/>
    <Btn name="Learn" color="bg-stone-50" textcolor="text-black"/>
    </div>

    
      </div>
     <Routes>
     <Route path="/Next" element={<Next/>}/>
        <Route path="/showcase" element={<ShowCase/>}/>
        <Route path="/docs" element={<Docs/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/enterprise" element={<Enterprise/>}/>
        <Route path="/Templates" element={<Templates/>}/>
      </Routes>
    </div>
    
  )
}

