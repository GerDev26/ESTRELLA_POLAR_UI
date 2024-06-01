import { useId } from "react";

export function TinyInput(){
  
}

export function MediumInput({placeholder, type="text"}) {

    const id = useId()

    return (
      <div className="bg-white p-2 rounded-sm">
        <div className="relative bg-inherit">
          <input 
            type={type} 
            id={id} 
            name={id} 
            className="peer bg-transparent h-10 w-62 rounded-sm text-black placeholder-transparent ring-2 px-2 ring-night-blue-900 focus:ring-sky-600 focus:outline-none focus:border-rose-600" 
            placeholder=" " 
          />
          <label 
            htmlFor={id} 
            className="absolute cursor-text left-0 -top-3 text-sm text-night-blue-900 bg-inherit mx-1 px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-night-blue-900 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm"
          >
            {placeholder}
          </label>
        </div>
      </div>
    );
}
export function BigInput(){

}
