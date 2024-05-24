import './ProductTypeGalery.css'
import products from '../../mocks/ProductType.json'
import { Link } from 'react-router-dom'

export function ProductTypeGalery(){
    return(
        <section className="p-type-galery">
            {products.map(product => <ProductType key={product.id} product={product}/>)}
        </section>
    )
}
function ProductType({product}){
    return(
    <Link className='p-type-galery-item'>
        <h3 className="uppercase opacity-90 rounded-md bg-night-blue-900 text-white p-3 text-xl font-normal absolute left-5 bottom-5 z-10">{product.category}</h3>
        <img src={product.img} alt="" />
    </Link>
    )
}

