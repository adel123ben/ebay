import React from "react"

interface MobilMenuProps{
    vivible?: boolean;
}


const NavigationMenuDemo:React.FC<MobilMenuProps> = ({
    vivible
}) => {
    if(!vivible){
        return null;
    }
    return ( 
        <div className="bg-white shadow-2xl w-72 h-56 absolute top-28 py-5 flex-col border-2 flex border-gray-200">
            <div className="flex flex-col gap-4">
                <div className="text-sm px-3 hover:underline gap-3">
                    <p>Test</p>
                </div>
            </div>
        </div>
     );
}
 
export default NavigationMenuDemo;

