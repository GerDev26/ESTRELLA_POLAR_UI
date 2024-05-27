import { ProductColorsContainer } from "./ProductColors";
import { ProductStockAmount, ProductStockState } from "./ProductStock";
import { BuyBtn } from './../Buttons'

export function ProductData({product}){
    return(
            <div className="flex flex-col gap-4 w-72 h-fit m-4">
                    
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold uppercase">{product.title}</h3>
                    <span className="text-xl">${product.price}</span>
                </div>

                <div className="flex justify-between items-center h-fit w-full">

                    <ProductStockState product={product}/>
                    <ProductStockAmount product={product}/>
                </div>
                <ProductColorsContainer product={product}/>
                <div className="flex flex-col items-center gap-1">
                    <BuyBtn className="bg-night-blue-700 hover:bg-night-blue-800 text-white w-full h-fit">Comprar</BuyBtn>
                    <BuyBtn className="border-2 border-night-blue-500 text-night-blue-500 hover:text-white hover:bg-night-blue-500 w-full h-fit">Añadir al carrito</BuyBtn>
                </div>
            </div>
    )
}