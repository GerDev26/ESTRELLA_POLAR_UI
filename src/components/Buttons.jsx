export function BuyBtn({children, className}){
    const style = "text-xl font-normal p-2 " + className
    return(
        <button className={style}>
            {children}
        </button>
    )
}