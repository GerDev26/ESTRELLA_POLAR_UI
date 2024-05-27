export function ProductDetails({product}){

    return(
        <section className=" flex justify-center gap-8 w-full h-96 py-16 bg-night-blue-900 text-white">
            <div className=" w-96 flex flex-col">
                <h3 className="text-3xl uppercase mb-4">caracteristicas</h3>
                <pre className="text-wrap font-normal">{product.characteristics}</pre>
            </div>
            <div className=" w-96 flex flex-col">
                <h3 className="text-3xl uppercase mb-4">Detalles</h3>
                <p>{product.description}</p>
            </div>
        </section>
    )
}