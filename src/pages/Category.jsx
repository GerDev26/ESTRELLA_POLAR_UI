import { AdjustmentsHorizontalIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Footer } from "../components/Footer";
import { GridImg } from "../components/Home/ProductTypeGalery";
import { MarginContainer } from "../components/MarginContainer";
import { Navbar } from "../components/Navbar";
import { PageFlexContainer } from "../components/PageContainer";
import { MainProductCard } from "../components/ProductCard";

import products from '../mocks/products.json'
import { SearchBar } from "../components/Filters/SearchBar";
import { PriceFilter } from "../components/Filters/PriceFilter";
import { Filter } from "../components/Filters/Filter";



export function Category(){

    return(
        <>
        <Navbar/>
        <PageFlexContainer>
            <MarginContainer>

                <h1 className=" text-night-blue-900 text-4xl uppercase">Lo mejor en bolsos</h1> 
                <section className=" h-[450px] w-full grid grid-cols-3 gap-4">
                    <GridImg text="BOLSO" img="https://hips.hearstapps.com/hmg-prod/images/elle-chanel-u-ltima-campan-a-1618587603.jpg" url="asd"/>
                    <GridImg text="BOLSO" img="https://hips.hearstapps.com/hmg-prod/images/elle-chanel-u-ltima-campan-a-1618587603.jpg" url="asd"/>
                    <GridImg text="BOLSO" img="https://hips.hearstapps.com/hmg-prod/images/elle-chanel-u-ltima-campan-a-1618587603.jpg" url="asd"/>
                </section>
            </MarginContainer>

                <nav className="sticky top-14 w-full h-16 flex gap-6 items-center bg-night-blue-900 text-white px-4 z-10">
                    <AdjustmentsHorizontalIcon className="h-8 w-auto"/>

                    <Filter text="Categorias">
                        <div className="w-96 h-96 bg-white border-4 border-night-blue-900 rounded-sm">

                        </div>
                    </Filter>

                    <Filter text="Colores">
                        <div className="w-96 h-96 bg-red-900">

                        </div>
                    </Filter>
                    <PriceFilter/>
                    <div className="absolute right-8 top-4">
                        <SearchBar w="200px"/>
                    </div>
                </nav>

                <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-fit w-fit m-auto p-4">
                   {products.map(product => <MainProductCard key={product.id} product={product}/>)}
                </section>

        </PageFlexContainer>
        <Footer/>
        </>
    )
}