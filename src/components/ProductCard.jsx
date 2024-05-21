import { useRef } from 'react';
import './ProductCard.css';
import { useGalery } from '../hooks/useGalery';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/16/solid';
import products from './../mocks/products.json'

export function ProductCardGalery({text}) {

    const galery = useRef();
    const container = useRef();

    const {handleScroll, transitionx} = useGalery({galery, container})

    return (
        <section ref={container} className='flex flex-col h-fit pt-14 w-full relative overflow-hidden'>
            <h3 className='text-night-blue-main w-fit h-fit absolute top-4 left-0 text-2xl font-bold'>{text}</h3>
            <button onClick={() => handleScroll('left')} className='w-fit h-fit absolute top-3 right-10'>
                <ArrowLeftCircleIcon className='text-night-blue-main w-9 h-9'/>
            </button>
            <button onClick={() => handleScroll('right')} className='w-fit h-fit absolute top-3 right-0'>
                <ArrowRightCircleIcon className='text-night-blue-main w-9 h-9'/>
            </button>
            <div style={transitionx} ref={galery} className='flex gap-3 relative w-fit'>
                {products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </section>
    );
}

export function ProductCard({product}) {
    return (
        <article className='product-card'>
            <div className='relative'>
                <img
                    className='w-full h-full object-cover'
                    src={product.img}
                    alt={product.title}
                />
            </div>
            <div className='flex justify-between items-start p-3 gap-3 bg-night-blue-900'>
                <div>
                    <h4 className='uppercase text-night-blue-100 text-sm font-bold'>{product.title}</h4>
                    <p className='text-night-blue-200 text-sm font-thin'>{product.description}</p>
                </div>
                <h3 className='self-center text-night-blue-100 text-lg font-bold'>${product.price}</h3>
            </div>
        </article>
    );
}
