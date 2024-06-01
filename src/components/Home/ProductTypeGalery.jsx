import products from '../../mocks/ProductType.json'
import { Link } from 'react-router-dom'
import { TypeBtn } from '../Buttons'

export function ProductTypeGalery(){
    return(
        <section className="h-[80vh] grid grid-cols-3 grid-rows-2 gap-1 overflow-hidden">
            {products.map(product => <GridImg key={product.id}  className="first:row-span-2 last:col-span-2"text={product.category} url={"http://localhost:5173/category"} img={product.img}/>)}
        </section>
    )
}

export function GridImg({text, className, url, img}){

    return(
        <Link to={url} className={'group relative overflow-hidden ' + className}>
            <TypeBtn text={text}/>
            <img className='transition group-hover:scale-105 h-full w-full object-cover' src={img} alt="" />
        </Link>
    )
}

