export function DataCard({ prop }) {
    return (
      <article className="bg-night-blue-700 h-fit bg-opacity-25 rounded-l flex flex-col items-center justify-evenly z-10">
        <img className="w-7/12 h-auto rounded-full aspect-square object-cover" src={prop.img} alt="" />
        <div className="text-center">
          <header className="uppercase text-night-blue-100 text-2xl font-bold mb-4">{prop.title}</header>
          <p className="text-night-blue-200 font-normal text-center text-2xl">{prop.description}</p>
        </div>
      </article>
    );
  }
  