import './ProductTypeGalery.css'
import products from '../mocks/ProductType.json'

function ProductType({product}){
    return(
    <div className='p-type-galery-item'>
        <span className="p-type-galery-text absolute left-5 bottom-5">{product.category}</span>
        <img src={product.img} alt="" />
    </div>
    )
}

export function ProductTypeGalery(){
    return(
        <section className="p-type-galery">
            {products.map(product => <ProductType key={product.id} product={product}/>)}
        </section>
    )
}