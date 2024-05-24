export function HeadText({children, className}){
    const style = "text-xl font-bold " + className
    return(
        <h3 className={style}>{children}</h3>
    )
}