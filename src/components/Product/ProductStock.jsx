import { CheckCircleIcon, ChevronDownIcon, ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { useRef, useState } from "react";

export function ProductStockState({ product }) {
    let stockIcon = product.stock;
    let stockMessage = ""
    

    if (product.stock > 10) {
        stockIcon = <CheckCircleIcon className="h-6 w-6 text-green-700" />;
        stockMessage = "Con stock"
    }
    if (product.stock < 10) {
        stockIcon = <ExclamationCircleIcon className="h-6 w-6 text-yellow-700" />;
        stockMessage = "Ultimas unidades"
    }
    if (product.stock === 0) {
        stockIcon = <XCircleIcon className="h-6 w-6 text-red-700" />;
        stockMessage = "Sin stock"
    }
    return (
        <div className="flex items-center h-fit gap-1">
            {stockIcon}
            <p className="w-fit h-fit text-lg">{stockMessage}</p>
        </div>
    );
}

export function ProductStockAmount({product}){

    let cantidad
    if(product.stock > 10){
        cantidad = 10
    } else{
        cantidad = product.stock
    }

    const [isOpen, setIsOpen] = useState(false)

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const dropdownStyle = "absolute top-[105%] h-fit w-full flex-col gap-2 bg-night-blue-50 border-2 border-night-blue-900 rounded-sm overflow-y-scroll"
    const buttonIconStyle = "transition h-6 w-6 text-night-blue-900"
    
    const dropdown = isOpen ? dropdownStyle + "flex" : " hidden"
    const buttonIcon = isOpen ? buttonIconStyle + " rotate-180" : buttonIconStyle

    return(
        <div className="group relative flex flex-col w-fit h-fit">
            <button onClick={handleClick} className="transition group flex items-center h-fit gap-1 border-2 border-night-blue-900 px-1 rounded-sm">
                <p className="w-fit h-fit text-lg text-nowrap text-night-blue-900">Cantidad</p>
                <ChevronDownIcon className={buttonIcon}/>
            </button>
            <ul className={dropdown}>
            {Array.from({ length: cantidad }, (_, index) => (
                <li key={index} onClick={handleClick} className="px-2 transition bg-night-blue-100 hover:bg-night-blue-200">{index + 1}</li>
            ))}
            </ul>
        </div>
    )
}

export function ProductAmount({ product }){
    const [dropdownState, setDropdownState] = useState(false)
    const [amount, setAmount] = useState(1)

    const dropdown = dropdownState ? ' max-h-[1000px]' : ' max-h-0'
    const toggleDropdown = () => {
        setDropdownState(!dropdownState)
    }

    const handleSelect = (number) => {
        setAmount(number)
        setDropdownState(!dropdownState)
    }

    return(
        <div className="relative">
        <button onClick={toggleDropdown} className="flex flex-col w-24 px-2 py-1 border-2 border-night-blue-900 rounded-sm">
            <div>
                <p className="text-sm" >Cantidad</p>

                <div className="flex w-full h-fit justify-between text-l">
                    <p>{amount}</p>
                    <ChevronDownIcon className="w-6 h-fit"/>
                </div>
            </div>
        </button>
        <div className={"transition-all ease-in-out duration-150 absolute top-[110%] flex flex-col gap-2 overflow-hidden w-24 bg-night-blue-100" + dropdown}>
            <AmountItem value={1} callback={handleSelect}/>
            <AmountItem value={2} callback={handleSelect}/>
            <AmountItem value={3} callback={handleSelect}/>
        </div>
        </div>
    )
}

function AmountItem({ value, callback }){
    
    const handleClick = () => {
        callback(value)
    }

    return(
        <p onClick={handleClick} className="w-full h-fit p-2 hover:bg-blue-200">{value}</p>
    )
}