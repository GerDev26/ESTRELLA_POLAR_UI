import { BackgroundImg } from "../components/BackgroundImg";
import { DataCardContainer } from "../components/Home/DataCard";
import { ProductTypeGalery } from "../components/Home/ProductTypeGalery";
import { MarginContainer } from "../components/MarginContainer";
import { ProductCardGalery } from "../components/ProductCard";

export function Home(){
    return(
        <>
        <section className="flex flex-col gap-5">

            <MarginContainer>
                <ProductTypeGalery/>
                <ProductCardGalery text="Tendencias"/>
            </MarginContainer>

            <BackgroundImg>
                <h1 className="h-fit w-fit text-night-blue-100 text-2xl font-semibold uppercase text-center z-20">Sobre nosotros</h1>
                <DataCardContainer/>
            </BackgroundImg>
        </section>
        </>
    )
}