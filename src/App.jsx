
function App() {
  const btns = [
    "Compact",
    "Expanded"
  ]
  return (
    <div className="flex gap-2">
      {
          btns.map((b)=>(
            <button key={b} className="bg-red-200 hover:bg-red-100 p-4 rounded-full cursor-pointer"  onClick={()=> console.log("pressed", b)}>{b}</button>

          ))
      }
      </div>
  )
}

export default App
