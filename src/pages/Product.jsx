import { useParams } from "react-router-dom";
import products from './../mocks/products.json'
import { MainProductCard } from "../components/ProductCard";
import { MarginContainer } from "../components/MarginContainer";
import { BuyBtn } from "../components/Buttons";
export function Product(){

    const { id } = useParams();

    const productSelected = products.find(product => product.id == id);

    return(
        <MarginContainer className="flex flex-col gap-2 items-center">
            <section className="flex gap-4 h-96 w-9/12">
                <div className="flex justify-center gap-2 w-full h-full overflow-hidden">
                    <div className="grid grid-flow-row grid-cols-1 gap-2 h-fit w-3/12">
                        <div className="w-full">
                            <img className="w-full h-full aspect-square" src={productSelected.img} alt="" />
                        </div>
                        <div className="w-full">
                            <img className="w-full h-full aspect-square" src={productSelected.img} alt="" />
                        </div>
                        <div className="w-full">
                            <img className="w-full h-full aspect-square" src={productSelected.img} alt="" />
                        </div>
                        <div className="w-full">
                            <img className="w-full h-full aspect-square" src={productSelected.img} alt="" />
                        </div>
                        <div className="w-full">
                            <img className="w-full h-full aspect-square" src={productSelected.img} alt="" />
                        </div>
                    </div>
                    <img className="h-full w-10/12 object-cover" src={productSelected.img} alt="" />
                </div>
                <div className="flex flex-col w-full h-full p-8">
                    <h3 className="text-4xl font-bold uppercase mb-4">{productSelected.title}</h3>
                    <span className="text-3xl font-black">${productSelected.price}</span>
                    <div className="flex flex-col gap-2">
                        <BuyBtn className="bg-night-blue-900 text-white w-full h-fit">Comprar</BuyBtn>
                        <BuyBtn className="bg-night-blue-700 text-white w-full h-fit">Añadir al carrito</BuyBtn>
                    </div>
                </div>
            </section>

        </MarginContainer>
    )
}