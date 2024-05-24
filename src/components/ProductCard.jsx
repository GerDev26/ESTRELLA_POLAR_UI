import { useRef } from 'react';
import { useGalery } from '../hooks/useGalery';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from '@heroicons/react/16/solid';
import products from './../mocks/products.json'
import { Link } from 'react-router-dom';

export function ProductCardGalery({text}) {

    const galery = useRef();
    const container = useRef();

    const {handleScroll, transitionx} = useGalery({galery, container})

    return (
        <section ref={container} className='flex flex-col h-fit pt-14 w-full relative overflow-hidden'>
            <h3 className='text-night-blue-main w-fit h-fit absolute top-4 left-0 text-3xl font-bold'>{text}</h3>
            <button onClick={() => handleScroll('left')} className='group w-fit h-fit absolute top-3 right-10'>
                <ArrowLeftCircleIcon className='group-hover:text-night-blue-700 text-night-blue-950 w-9 h-9'/>
            </button>
            <button onClick={() => handleScroll('right')} className='group w-fit h-fit absolute top-3 right-0'>
                <ArrowRightCircleIcon className='group-hover:text-night-blue-700 text-night-blue-950 w-9 h-9'/>
            </button>
            <div style={transitionx} ref={galery} className='flex gap-3 relative w-fit'>
                {products.map(product => <MainProductCard key={product.id} product={product}/>)}
            </div>
        </section>
    );
}

export function MainProductCard({ product }) {
    const productRoute = "http://localhost:5173/" + product.id

    return (
      <article className='flex flex-col w-60 h-90'>
        <div className='group relative overflow-hidden w-60 h-60 mb-2'>
          <img className="transition-transform duration-150 ease-in-out hover:scale-105 w-full h-full object-cover" src={product.img} alt={product.title} />
          <span className='transition-all duration-150 ease-in-out group-hover:bottom-3 absolute bottom-1 left-1 rounded-md opacity-8q5 p-1 w-fit h-fit text-l text-night-blue-100 bg-night-blue-950'>
            ${product.price}
          </span>
        </div>
        <div className='h-20 w-full overflow-hidden'>
          <h2 className='mb-1 text-l font-black text-night-blue-950 uppercase text-ellipsis overflow-hidden'>{product.title}</h2>
          <p className='text-l font-thin text-night-blue-950 mb-3 text-ellipsis overflow-hidden'>{product.description}</p>
        </div>
        <Link to={productRoute} className='flex justify-center items-center w-full p-2 h-fit bg-night-blue-950 text-night-blue-50 hover:bg-night-blue-600 active:bg-night-blue-700 uppercase rounded-lg'>
          ir al producto
        </Link>
      </article>
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

  
  
  
