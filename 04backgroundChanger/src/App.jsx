import { useState } from "react"


function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button onClick={ () => setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "red"}}>Red</button>
            <button onClick={ () => setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "green"}}>Green</button>
            <button onClick={ () => setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "blue"}}>Blue</button>
            <button onClick={ () => setcolor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "olive"}}>Olive</button>
            <button onClick={ () => setcolor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "grey"}}>Grey</button>
            <button onClick={ () => setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "yellow"}}>Yellow</button>
            <button onClick={ () => setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "pink"}}>Pink</button>
            <button onClick={ () => setcolor("purple")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "purple"}}>Purple</button>
            <button onClick={ () => setcolor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "white"}}>White</button>
            <button onClick={ () => setcolor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "black"}}>Black</button>
            <button onClick={ () => setcolor("lavender")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "lavender"}}>Lavender</button>
            <button onClick={ () => setcolor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "brown"}}>Brown</button>
            <button onClick={ () => setcolor("navy")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{background: "navy"}}>Navy</button>
            <button onClick={ () => setcolor("tan")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{background: "tan"}}>Tan</button>
          </div>
        </div>
      </div>
  )
}

export default App
