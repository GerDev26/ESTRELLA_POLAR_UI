import { SocialIcon } from "react-social-icons";

export function Footer(){
    return(
        <footer className="flex flex-col justify-center items-center w-full h-96 bg-night-blue-950 text-night-blue-100">
            <div className="flex justify-center items-center gap-4 w-full h-1 bg-night-blue-100">
                <SocialIcon url="https://www.whatsapp.com"/>
                <SocialIcon url="https://www.facebook.com"/>
                <SocialIcon url="https://www.twitter.com"/>
                <SocialIcon url="https://www.instagram.com"/>
            </div>
            <img className="w-40 h-40 object-scale-down " src="../../public/img/estrellaPolarLogoBlanco.png" alt="" />
            <div className="flex gap-2">
                <h1>Todos los derechos reservados</h1>
                <h1>Todos los derechos reservados</h1>
            </div>
        </footer>
    )
}