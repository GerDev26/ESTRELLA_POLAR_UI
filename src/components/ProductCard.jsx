import './ProductCard.css'
export function ProductCard(){
    return(
        <article className='product-card'>
            <div className='relative'>
                <img className='w-full h-full object-cover' src="https://samsonite.com.ar/cdn/shop/files/b20f4f771f03733ee40e93fd244bdc7f0f7c42a4ebf0730b11ea7c6350e7f71c_2000x.jpg?v=1696966437" alt="" />
            </div>

            <div className='flex justify-between items-start p-3 gap-3 bg-night-blue-200'>
                <div>
                    <h4 className='text-night-blue-950 text-normal font-semibold' >Cartuchera</h4>
                    <p className=' text-night-blue-600 text-sm font-thin'>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <h3 className='self-center text-night-blue-950 text-lg font-black'>$50000</h3>
            </div>
        </article>
    )
}