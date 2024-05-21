import { useState } from "react"

function App() {
  const [color, setcolor] = useState("olive")
  return (
    
      <div className="w-full h-screen duration-300" style={{backgroundColor:color}}>
         <div className="flex flex-wrap bottom-12 fixed justify-center inset-x-0 bg-gray-900 rounded-lg py-1 mx-10">
          <button onClick={()=>setcolor("gray")} className="bg-gray-400 px-4 mx-4 py-2  text-white text-xl hover:text-black  rounded-xl">Gray</button>
          <button onClick={()=>setcolor("blue")} className="bg-blue-400 px-4 mx-4 py-2  text-white text-xl hover:text-black  rounded-xl">Blue</button>
          <button onClick={()=>setcolor("green")} className="bg-green-400 px-4 mx-4 py-2  text-white text-xl hover:text-black  rounded-xl">Green</button>
          <button onClick={()=>setcolor("red")} className="bg-red-400 px-4 mx-4 py-2  text-white text-xl hover:text-black  rounded-xl">Red</button>
          



         </div>
      </div>
     
   
  )
}

export default App
