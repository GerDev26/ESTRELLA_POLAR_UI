
export function DataCard({prop}){
    return(
        <article className="p-5 h-10/12 bg-night-blue-700 bg-opacity-25 rounded-l flex flex-col items-center z-20">
            <img className="w-48 h-48 object-cover rounded-full mb-10" src={prop.img} alt="" />
            <header className="uppercase text-night-blue-100 text-2xl font-bold mb-4">{prop.title}</header>
            <p className="text-night-blue-200 font-normal text-center text-2xl">{prop.description}</p>
        </article>
    )
}