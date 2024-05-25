import { BgImageContainer } from "../components/BgImageContainer";
import { BgVideoContainer } from "../components/BgVideoContainer";
import { Footer } from "../components/Footer";
import { DataCard } from "../components/Home/DataCard";
import { ProductTypeGalery } from "../components/Home/ProductTypeGalery";
import { MarginContainer } from "../components/MarginContainer";
import { ProductCardGalery } from "../components/ProductCard";

import props from './../mocks/whyUs.json'

console.log(window.location.pathname)

export function Home(){
    return(
        <>
        <section className="flex flex-col gap-5">
            <BgVideoContainer className="flex flex-col justify-center items-center">
                <div className="w-6/12 h-fit z-10 opacity-90">
                    <img className="w-full h-full object-scale-down " src="../../public/img/estrellaPolarLogoBlanco.png" alt="" />
                </div>
            </BgVideoContainer>

            <MarginContainer>
                <ProductTypeGalery/>
                <ProductCardGalery text="Tendencias"/>
            </MarginContainer>

            <BgImageContainer className="grid grid-cols-3 grid-rows-1 gap-5 items-center justify-items-center" image={"../../public/img/Planet.jpg"}>
                <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-4xl text-white uppercase font-bold">Sobre nosotros</h1>
                {props.map(prop => <DataCard key={prop.id} prop={prop}/>)}
            </BgImageContainer>

        </section>
        <Footer>
        </Footer>
        </>
    )
}