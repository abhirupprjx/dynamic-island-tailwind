import { X } from 'lucide-react';
import { useRef, useState } from 'react';

const Notification = ({open, onOpenChange})=>{
  const [expanded, setExpanded] = useState(false);

  const ref = useRef(null);
  if(!open){
    return null;
  }
  
  return (
    <div className="absolute top-5  left-1/2 -translate-x-1/2">

        <div className={`bg-red-400 max-w-sm rounded-3xl cursor-pointer`} onClick={()=> setExpanded(!expanded)}>

           <div className='p-2'>
                <div className='flex justify-between items-center'>
                    <div className="flex items-center gap-2">
                        <img className="w-8 h-8 rounded-full" src="https://fastly.picsum.photos/id/435/200/200.jpg?hmac=yk7-HtvV0x2Z6OB4YhbyAbYxX0nQQCNTzs_MgegSkcE" />
                        <p className="text-white">New message received</p> 
                    </div>
                    <X className="w-4 h-4 text-white cursor-pointer shrink-0" onClick={()=>onOpenChange(false)}/>
                </div>

                <div className='overflow-y-hidden transition-all'
                style={{height: expanded ? ref.current?.scrollHeight || 0 : 0}}
                ref={ref}
                >
                    <div className='pb-20 px-2'>
                    You have a new message from John Doe. Click to read.
                    More content....

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Notification;