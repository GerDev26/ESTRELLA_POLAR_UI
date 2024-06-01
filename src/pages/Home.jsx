import { BgImageContainer } from "../components/BgImageContainer";
import { BgVideoContainer } from "../components/BgVideoContainer";
import { Footer } from "../components/Footer";
import { DataCard } from "../components/Home/DataCard";
import { ProductTypeGalery } from "../components/Home/ProductTypeGalery";
import { MarginContainer } from "../components/MarginContainer";
import { Navbar } from "../components/Navbar";
import { ProductCardGalery } from "../components/ProductCard";
import { PageFlexContainer } from '../components/PageContainer'

import props from './../mocks/whyUs.json'

export function Home(){
    return(
        <>
        <Navbar/>
        <PageFlexContainer>
{/*             <BgVideoContainer className="flex flex-col justify-center items-center">
                <div className="w-6/12 h-fit z-10 opacity-90">
                    <img className="w-full h-full object-scale-down " src="../../public/img/estrellaPolarLogoBlanco.png" alt="" />
                </div>
            </BgVideoContainer> */}

            <MarginContainer>
                <ProductTypeGalery/>
                <ProductCardGalery text="Tendencias"/>
            </MarginContainer>

            <BgImageContainer className="grid grid-cols-3 grid-rows-1 gap-6 items-center py-8" image={"../../public/img/Planet.jpg"}>
                <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-3xl text-white uppercase font-bold">Sobre nosotros</h1>
                {props.map(prop => <DataCard key={prop.id} prop={prop}/>)}
            </BgImageContainer>
        </PageFlexContainer>

        <Footer>
        </Footer>
        </>
    )
}