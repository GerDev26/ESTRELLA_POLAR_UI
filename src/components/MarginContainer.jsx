export function MarginContainer({children, className}){
    const style = "me-8 ms-8 " + className
    return(
        <section className={style}>
            {children}
        </section>
    )
}