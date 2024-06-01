export function BgImageContainer({children, image, className=""}){
    const style = className + "w-full h-full z-10"
    return(
        <div className="relative w-full h-screen">
            <img className="opacity-95 absolute top-0 left-0 w-full h-full object-cover z-0" src={image} alt="" />
            <div className={style}>
                {children}
            </div>
        </div>
    )
}