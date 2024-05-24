export function BgVideoContainer({children, className= ""}) {
    const style = className + " relative w-full h-screen overflow-hidden"
    return (
      <div className={style}>
        <video className="absolute top-0 left-0 z-0 w-full h-screen object-cover" autoPlay loop muted>
          <source src="/video/Space.mp4" type="video/mp4" />
        </video>
        {children}
      </div>
    );
  }
  