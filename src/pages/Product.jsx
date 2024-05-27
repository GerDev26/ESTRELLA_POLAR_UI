import { useParams } from "react-router-dom";
import products from './../mocks/products.json'
import { ProductCardGalery } from "../components/ProductCard";
import { MarginContainer } from "../components/MarginContainer";
import { Footer } from "../components/Footer";
import { ProductData } from "../components/Product/ProductData";
import { ProductGalery } from "../components/Product/ProductGalery";
import { ProductDetails } from "../components/Product/ProductDetails";
import { Navbar } from "../components/Navbar";

export function Product(){

    const { id } = useParams();

    const productSelected = products.find(product => product.id == id);

    return(
        <>
        <Navbar/>
        <section className="flex flex-col py-8 gap-4">
            <MarginContainer className="flex flex-col gap-2 items-center">
                <section className="flex justify-center gap-4 h-fit w-full">
                    <ProductGalery product={productSelected}></ProductGalery>
                    <ProductData product={productSelected}/>
                </section>
            </MarginContainer>
        
            <ProductDetails product={productSelected}/>
        
            <MarginContainer>
                <ProductCardGalery text="Productos relacionados" product={products}>
                </ProductCardGalery>
            </MarginContainer>
        
            <Footer/>
        </section>
        </>
    )
}