import { X } from 'lucide-react';

const Notification = ({open, onOpenChange})=>{
  
  if(!open){
    return null;
  }
  
  return (
    <div className="absolute top-5  left-1/2 -translate-x-1/2">

        <div className="bg-red-400 min-w-sm p-2 rounded-full cursor-pointer">

            <div className='flex justify-between items-center'>
            <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-full" src="https://fastly.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE" />
                <p className="text-white">New message received</p> 
            </div>
            <X className="w-4 h-4 text-white cursor-pointer" onClick={()=>onOpenChange(false)}/>
            </div>
        </div>
    </div>
  )
}


export default Notification;