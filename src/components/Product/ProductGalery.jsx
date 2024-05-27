export function ProductGalery({product}){
    return(
        <div className="flex gap-2 w-fit h-96 overflow-hidden">

            <div className="grid grid-flow-row grid-cols-1 gap-2 h-fit w-20">
                <div className="w-20 border-b-4 border-night-blue-700">
                    <img className="w-full h-full aspect-square" src={product.img} alt="" />
                </div>
                <div className="w-20">
                    <img className="w-full h-full aspect-square" src={product.img} alt="" />
                </div>
                <div className="w-20">
                    <img className="w-full h-full aspect-square" src={product.img} alt="" />
                </div>
                <div className="w-20">
                    <img className="w-full h-full aspect-square" src={product.img} alt="" />
                </div>
                <div className="w-20">
                    <img className="w-full h-full aspect-square" src={product.img} alt="" />
                </div>
            </div>

            <img className="h-96 w-96 aspect-square" src={product.img} alt="" />

        </div>
    )
}
