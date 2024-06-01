export function MarginContainer({children, className}){
    const style = "flex flex-col gap-8 me-8 ms-8 " + className
    return(
        <section className={style}>
            {children}
        </section>
    )
}