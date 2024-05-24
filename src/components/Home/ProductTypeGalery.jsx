import products from '../../mocks/ProductType.json'
import { Link } from 'react-router-dom'

export function ProductTypeGalery(){
    return(
        <section className="h-[80vh] grid grid-cols-3 grid-rows-2 gap-1 overflow-hidden">
            {products.map(product => <ProductType key={product.id} product={product}/>)}
        </section>
    )
}
function ProductType({product}){
    return(
    <Link to={product.category} className='group relative first:row-span-2 last:col-span-2 overflow-hidden'>
        <h3 className="uppercase opacity-90 rounded-md bg-night-blue-900 text-white p-3 text-xl font-normal absolute left-5 bottom-5 z-10">{product.category}</h3>
        <img className='transition group-hover:scale-105 h-full w-full object-cover' src={product.img} alt="" />
    </Link>
    )
}

