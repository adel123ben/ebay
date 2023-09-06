import React from "react"



interface MobilMenueProps{
    visibel?: boolean;
}


const MobileMenue:React.FC<MobilMenueProps> = ({
    visibel
}) => {
    if(!visibel){
        return null;
    }
    return(
        <div className="bg-white shadow-2xl w-56 absolute top-8 left-0 py-5 flex-col border-2 flex border-gray-200">
            <div className="flex flex-col gap-4">
                <div className="text-sm px-3 hover:underline gap-3">
                <p>Ebay estimation</p>
                <p>Bon plans</p>
                <p>Aide</p>
                <p>Vendre</p>
                <p>Object suivi</p>
                <p>Mon eBay</p>
                </div>
            </div>
        </div>
    )
}

export default MobileMenue;