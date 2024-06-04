import { TrashIcon } from "@heroicons/react/16/solid";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { BuyBtn } from "../components/Buttons";

import products from '../mocks/products.json'


export function CarProductCard({product}){
    const productColor = {
        backgroundColor: "#" + product.colors[1]
    }
    return(
        <article className="h-40 w-96 flex p-2 bg-white border-4 border-gray-300">                  
            <div className="flex gap-2">
                <img className="w-5/12" src={product.img} alt="ads" />
                <div className="h-full w-5/12 flex flex-col justify-between p-1">
                    <div>
                        <h3 className="uppercase font-bold">{product.title}</h3>
                        <span>${product.price}</span>
                    </div>
                    <p>CANTIDAD</p>
                </div>
            </div>
            <div className="flex flex-col justify-between w-1/12 h-full">
                <TrashIcon className="w-5"/>
                <div style={productColor} className="w-5 h-5 rounded-full"/>
            </div>
        </article>
    )
}

export function OrderSummary(){

    const productsFormated = products.slice(0, 10)

    const precioTotal = productsFormated.reduce((acumulador, product) => {
        return acumulador + product.price;
      }, 0);
    return(
        <>
        <Navbar/>
        <section className="flex justify-around w-full gap-4 min-h-screen">
            <div className="w-7/12 flex flex-col gap-2 my-10 justify-start items-center">
                {productsFormated.map(product => <CarProductCard key={product.id} product={product} />)}
            </div>        

            <div className="w-[2px] h-auto my-3 bg-gray-400"/>

            <div className="sticky top-32 w-5/12 h-fit flex flex-col gap-4 items-center justify-center my-10 border-gray-300">
                <h3 className=" uppercase text-3xl">Resumen de compra</h3>
                <div className="w-72">
                    {productsFormated.map(product => (
                        <div key={product.id} className="flex justify-between">
                            <p>{product.title}</p>
                            <p className="font-bold">${product.price}</p>
                        </div>
                    ))}
                </div>
                <div className="w-96 h-[2px] bg-gray-500"/>
                <div className="w-80 flex justify-between text-2xl">
                    <h3>TOTAL</h3>
                    <span className="font-bold">${precioTotal}</span>    
                </div>
                <div className="flex flex-col gap-2">
                    <BuyBtn className="w-80 h-fit bg-night-blue-700 text-white uppercase rounded-sm hover:bg-night-blue-800">Comprar</BuyBtn>
                    <BuyBtn className="w-80 h-fit bg-night-blue-500 text-white uppercase rounded-sm hover:bg-night-blue-600">Cancelar</BuyBtn>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}