import { useState } from "react"
import { MinusIcon, PlusIcon } from "@heroicons/react/16/solid"

export function Filter({text, children}){

    const [filterState, setFilterState] = useState(false)

    const handleToggle = () => {
        setFilterState(!filterState)
    }

    const icon = filterState ? <MinusIcon className="animate-pop animate-duration-150 w-7 h-auto"/> : <PlusIcon className="animate-pop animate-duration-150 w-7 h-auto"/>
    const dropdown = filterState ? " max-h-64" : " max-h-0"
    return(
        <div className="relative">
            
            <button onClick={handleToggle} className="w-fit h-fit flex items-center gap-1 py-2 px-2 border-2 border-white text-white rounded-sm outline-none">
                <p className="text-xl">{text}</p>
                {icon}
            </button>
            <div className={"transition-all ease-in-out duration-150 absolute bg-white w-fit left-0 top-[120%] text-black overflow-hidden z-10" + dropdown}>
                {children}
            </div>
        </div>
    )
}