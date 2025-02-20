import Notification from "./Notification"
import {useState} from 'react';

function App() {
  const [toggleNotification, setToggleNotification] = useState(false);
  
  return (
    <div className="relative">
        <button  className="bg-red-200 hover:bg-red-100 p-4 rounded-full cursor-pointer" 
         onClick={()=> setToggleNotification(true)}>Default notification</button>

         <Notification open={toggleNotification} onOpenChange={()=> setToggleNotification(false)}/>
      </div>
  )
}

export default App
