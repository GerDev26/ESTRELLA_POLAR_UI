export function BuyBtn({children, className}){
    const style = "text-xl font-normal p-2 rounded-sm " + className
    return(
        <button className={style}>
            {children}
        </button>
    )
}
export function TypeBtn({text}){
    return(
        <button className="uppercase opacity-80 rounded-md bg-night-blue-900 text-white p-3 text-xl font-normal absolute left-5 bottom-5 z-10">{text}</button>
    )
}