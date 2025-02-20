
function App() {
 
  return (
    <div className="flex gap-2">
        <button  className="bg-red-200 hover:bg-red-100 p-4 rounded-full cursor-pointer" 
         onClick={()=> console.log("pressed")}>Default notification</button>
      </div>
  )
}

export default App
