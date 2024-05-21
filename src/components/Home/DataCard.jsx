import props from './../../mocks/whyUs.json'
export function DataCardContainer(){

    return(
        <section className="grid grid-cols-3 grid-rows-1 h-full w-full gap-4">
            {props.map(prop => <DataCard key={prop.id} prop={prop}/>)}
        </section>
    )
}

export function DataCard({prop}){

    return(
        <article className="p-6 py-24 bg-night-blue-900 bg-opacity-70 rounded-l flex w-full h-full flex-col items-center z-20">
            <img className="w-48 h-48 object-cover rounded-full mb-10" src={prop.img} alt="" />
            <header className="uppercase text-night-blue-100 text-2xl font-bold mb-4">{prop.title}</header>
            <p className="text-night-blue-200 font-normal text-center text-l">{prop.description}</p>
        </article>
    )
}