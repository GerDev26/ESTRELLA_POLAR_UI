import spaceImage from '../assets/space.jpg'
export function BackgroundImg({children}){
    return(
        <div className="relative w-full h-screen flex justify-center items-center">
            <img className="opacity-95 absolute top-0 left-0 w-screen h-full object-cover z-10" src={spaceImage} alt="" />
            <div className="me-8 ms-8 h-fit w-fit">
                {children}    
            </div>
        </div>
    )
}