export function PageFlexContainer({ children }){
    return(
        <section className="flex flex-col py-8 gap-5">
            {children}
        </section>
    )
}