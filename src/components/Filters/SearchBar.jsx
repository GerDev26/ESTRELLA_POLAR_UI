import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useId } from "react";

export function SearchBar({ w }){

    const searchId = useId()

    return(
        <div className="flex justify-between items-center pr-2 bg-gray-200 rounded-full">
            <input id={searchId} style={{width: w}} className={"h-8 pl-4 outline-none bg-transparent text-gray-600 "} type="text" />
            
            <label htmlFor={searchId} className="cursor-pointer w-6 h-fit">
                <MagnifyingGlassIcon className=" w-6 h-auto text-gray-600"/>
            </label>
        </div>
    )
}