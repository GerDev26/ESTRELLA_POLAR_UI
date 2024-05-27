import { CheckCircleIcon, ChevronDownIcon, ExclamationCircleIcon, XCircleIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

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