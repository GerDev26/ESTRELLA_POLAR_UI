import { useId, useRef, useState } from "react"

export function PriceFilter(){

    const id = useId()
    const [price, setPrice] = useState(0)
    const inputRange = useRef()
    

    const handleChange = () => {
        setPrice(inputRange.current.value)
    }

    return(
        <div className="flex gap-2">
            <input onChange={handleChange} start min={0} max={200000} defaultValue="0" id={id} type="range" ref={inputRange}/>
            <label htmlFor={id}>
                <span>${price}</span>
            </label>
        </div>
    )
}