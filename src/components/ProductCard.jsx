import { useRef } from 'react';
import { useGalery } from '../hooks/useGalery';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/16/solid';
import products from './../mocks/products.json'
import { Link } from 'react-router-dom';

export function ProductCardGalery({text}) {

    const productsFormatted = products.slice(0,10)

    const galery = useRef();
    const container = useRef();

    const {handleScroll, transitionx} = useGalery({galery, container})

    return (
        <section ref={container} className='flex flex-col h-fit pt-16 w-full relative overflow-hidden'>
            <h3 className='text-night-blue-900 w-fit h-fit absolute top-4 left-0 text-3xl font-bold'>{text}</h3>
            <button onClick={() => handleScroll('left')} className='group w-fit h-fit absolute top-3 right-10'>
                <ArrowLeftCircleIcon className='group-hover:text-night-blue-700 text-night-blue-900 w-9 h-9'/>
            </button>
            <button onClick={() => handleScroll('right')} className='group w-fit h-fit absolute top-3 right-0'>
                <ArrowRightCircleIcon className='group-hover:text-night-blue-700 text-night-blue-900 w-9 h-9'/>
            </button>
            <div style={transitionx} ref={galery} className='flex gap-3 relative w-fit'>
                {productsFormatted.map(product => <MainProductCard key={product.id} product={product}/>)}
            </div>
        </section>
    );
}

export function MainProductCard({ product }) {
    const productRoute = "http://localhost:5173/productos/" + product.id

    return (
      <Link to={productRoute}>
        <article className='group flex flex-col w-56 h-fit'>
          <div className='relative overflow-hidden w-full h-60 mb-2'>
            <img className="transition-transform duration-150 ease-in-out group-hover:scale-105 w-full h-full object-cover" src={product.img} alt={product.title} />
            <span className='transition-all opacity-90 duration-150 ease-in-out group-hover:bottom-3 absolute bottom-1 left-1 rounded-md opacity-8q5 p-1 w-fit h-fit text-l text-night-blue-100 bg-night-blue-900'>
              ${product.price}
            </span>
          </div>
          <div className='h-fit w-full overflow-hidden group-hover:underline'>
            <h2 className='mb-1 text-l font-black text-night-blue-900 uppercase text-ellipsis overflow-hidden whitespace-nowrap'>{product.title}</h2>
            <p className='text-l font-thin text-night-blue-900 mb-3 text-ellipsis overflow-hidden whitespace-nowrap'>{product.description}</p>
          </div>
        </article>
      </Link>
    );
}

export function SearchProductCard({ product }) {
  const productRoute = "http://localhost:5173/productos/" + product.id

  return (
    <Link to={productRoute}>
      <article className='group flex flex-col w-40 h-fit'>
        <div className='relative overflow-hidden w-full h-40 mb-2'>
          <img className="transition-transform duration-150 ease-in-out group-hover:scale-105 w-full h-full object-cover" src={product.img} alt={product.title} />
        </div>
        <div className='h-fit w-full overflow-hidden group-hover:underline text-l font-black text-night-blue-900 uppercase'>
          <h2 className='mb-1'>{product.title}</h2>
          <h2>${product.price}</h2>
        </div>
      </article>
    </Link>
  );
}

export function ProductCard({product, className}) {
    const style = className + " product-card"
    return (
        <article className={style}>
            <div className='relative'>
                <img
                    className='w-full h-full object-cover'
                    src={product.img}
                    alt={product.title}
                />
            </div>
            <div className='flex justify-between items-start p-2 gap-3 bg-night-blue-900'>
                <div>
                    <h4 className='uppercase text-night-blue-100 text-base font-bold'>{product.title}</h4>
                    <p className='text-night-blue-100 text-base font-thin'>{product.description}</p>
                </div>
                <h3 className='self-center text-night-blue-100 text-base font-bold'>${product.price}</h3>
            </div>
        </article>
    );
}

  
  
  
