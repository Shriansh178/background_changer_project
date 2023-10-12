import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colour, setcolour] = useState("WHITE")


  return (
    <>
  <div className='w-full h-screen' style={{backgroundColor:colour}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-3xl'>
        <button onClick={()=>setcolour('red')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "red"}}>RED</button>
        <button onClick={()=>setcolour('Green')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "Green"}}>Green</button>
        <button onClick={()=>setcolour('BLUE')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "BLUE"}}>BLUE</button>
        <button onClick={()=>setcolour('YELLOW')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "YELLOW"}}>YELLOW</button>
        <button onClick={()=>setcolour('ORANGE')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "ORANGE"}}>ORANGE</button>
        <button onClick={()=>setcolour('PURPLE')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "PURPLE"}}>PURPLE</button>
        <button onClick={()=>setcolour('PINK')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "PINK"}}>PINK</button>
        <button onClick={()=>setcolour('OLIVE')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "OLIVE"}}>OLIVE</button>
        <button onClick={()=>setcolour('BLACK')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "BLACK"}}>BLACK</button>
        <button onClick={()=>setcolour('BROWN')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "BROWN"}}>BROWN</button>
        <button onClick={()=>setcolour('LAVENDER')} className=' text-white rounded-full px-2 py-2' style={{backgroundColor : "LAVENDER"}}>LAVENDER</button>
      </div>
      </div> 
    </div>
    </>
  )
}

export default App
