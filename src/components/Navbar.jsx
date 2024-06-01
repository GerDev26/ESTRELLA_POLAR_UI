import { ArrowLeftIcon, Bars3Icon, MagnifyingGlassIcon, PlusIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MediumInput, TinyInput } from "./Input";
import { BuyBtn } from "./Buttons";
import { ProductCardGalery } from "./ProductCard";
import { SearchBar } from "./Filters/SearchBar";

export function MenuSection({state, callback, children}){

    const style = state ? " -translate-x-8" : " -translate-x-[110%] "
    return(
        <div className={"transition ease-in-out duration-300 absolute flex flex-col w-full h-full top-0 bg-night-blue-800 text-white items-start text-xl gap-2 pl-8 pt-16" + style}>
        <ArrowLeftIcon onClick={callback} className="transition absolute right-4 top-4 w-6 h-auto text-white hover:scale-125"></ArrowLeftIcon>
        {children}
    </div>
    )
}

export function SectionMenuItem({ text, callback }) {
  return (
    <button onClick={callback} className="group relative flex gap-1 items-center">
      <p>{text}</p>
      <PlusIcon className="transition-transform duration-300 w-6 group-hover:rotate-90 group-hover:scale-125" />
      <div className="transition-all w-0 absolute -bottom-1 h-[2px] bg-white group-hover:w-full"/>
    </button>
  );
}

export function MenuItem({to, text}){
    return(
        <div className="group relative">
            <Link to={to}>{text}</Link>
            <div className="transition-all w-0 absolute -bottom-1 h-[2px] bg-white group-hover:w-full"/>
        </div>
    )
}


export function Menu({ state, callback }) {
    const navState = state ? " translate-x-0" : " -translate-x-full";

    const [categoryState, setCategoryState] = useState(false)
    const [typeState, setTypeState] = useState(false)

    const toggleCategory = () => {
        setCategoryState(!categoryState)
    }
    const toggleType = () => {
        setTypeState(!typeState)
    }
    
    return (
      <div className={"transition flex flex-col fixed top-0 left-0 h-full w-80 pt-20 bg-night-blue-50 z-50 pl-8 overflow-hidden" + navState}>
        <XMarkIcon onClick={callback} className="transition absolute left-3 top-4 w-6 h-auto text-white z-50 hover:rotate-90 hover:scale-125"></XMarkIcon>

        <div className="absolute left-0 top-0 flex flex-col w-full h-full bg-night-blue-700 text-white items-start text-xl gap-2 pl-8 pt-16">
            <SectionMenuItem text="Categoria" callback={toggleCategory}/>
            <SectionMenuItem text="Tipos" callback={toggleType}/>
            <MenuItem text="Ultimos Productos"/>
            <MenuItem text="Mas vendidos"/>
        </div>

        <MenuSection state={categoryState} callback={toggleCategory}>
            <MenuItem text="Urbano"/>
            <MenuItem text="Escolar"/>
            <MenuItem text="Otros"/>
        </MenuSection> 

        <MenuSection state={typeState} callback={toggleType}>
            <MenuItem text="Carteras"/>
            <MenuItem text="Mochilas"/>
            <MenuItem text="Riñoneras"/>
        </MenuSection>
      </div>
    );
}

export function UserMenu({ state }){

    const isActive = state ? " opacity-100 z-50" : " opacity-0 z-0"

    const userMenuStyle = "transition duration-300 flex flex-col justify-center items-center fixed -right-8 top-6 w-80 h-96 m-8 p-6 bg-white" + isActive
    return(
        <div className={userMenuStyle}>
            <div className="flex flex-col w-full h-full border-2 border-night-blue-900 text-night-blue-900 p-8 rounded-sm">

                <h3 className="text-2xl font-bold mb-2 text-center" >Iniciar sesion</h3>
                <form className="flex flex-col justify-center items-center" action="">
                    <MediumInput placeholder="Email" type="email"></MediumInput>
                    <MediumInput placeholder="Contraseña" type="password"></MediumInput>
                    <BuyBtn className="w-full h-fit bg-night-blue-900 text-white mb-2 hover:bg-night-blue-600">Iniciar sesion</BuyBtn>
                </form>
                <Link className="font-bold">Olvide mi contraseña</Link>
                <p>Si no tienes cuenta puedes <Link className="font-bold underline">registrarte</Link></p>
            </div>

            <div>
                
            </div>

        </div>
    )
}

export function SearchMenu({state}){

    const style = state ? "-translate-x-0" : "translate-x-full"
    return(
        <div className={"transition-all duration-300 fixed top-14 flex flex-col items-center w-full h-80 bg-white z-40 pt-4 " + style}>
            <SearchBar w="400px"/>
        </div>
    )
}

export function Navbar(){

    const [menuState, setMenuState] = useState(false)
    const [userMenuState, setUserMenuState] = useState(false)
    const [searchMenuState, setSearchMenuState] = useState(false)

    const toggleMenu = () => {
        setMenuState(!menuState)
    }

    const toggleUserMenu = () => {
        setUserMenuState(!userMenuState)
    }

    const toggleSearchMenu = () => {
        setSearchMenuState(!searchMenuState)
    }

    return(
        <>
        <nav className="sticky top-0 w-full h-14 flex justify-between items-center p-4 bg-night-blue-800 z-40">
            <Bars3Icon onClick={toggleMenu} className="transition w-6 h-auto text-night-blue-50 hover:scale-125"/>
            <div className="flex gap-4 h-fit w-fit">
                <MagnifyingGlassIcon onClick={toggleSearchMenu} className="transition w-6 h-auto text-night-blue-50 hover:scale-125"/>
                <ShoppingBagIcon className="transition w-6 h-auto text-night-blue-50 hover:scale-125"/>
                <UserIcon onClick={toggleUserMenu} className="transition w-6 h-auto text-night-blue-50 hover:scale-125"/>
            </div>

            <Link to={"http://localhost:5173/"} className="h-12 w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <img className="w-full h-full" src="../../../public/img/estrellaPolarLogoBlanco.png" alt="" />
            </Link>

        </nav>
        <Menu state={menuState} callback={toggleMenu}/>
        <UserMenu state={userMenuState}/>
        <SearchMenu state={searchMenuState} />
        
        </>
    )
}