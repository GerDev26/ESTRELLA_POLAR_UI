export function BuyBtn({children, className}){
    const style = "text-xl font-normal p-2 rounded-sm " + className
    return(
        <button className={style}>
            {children}
        </button>
    )
}