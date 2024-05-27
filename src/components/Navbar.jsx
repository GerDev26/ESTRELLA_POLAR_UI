import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "./Input";

export function Menu({ isOpen, callback }) {
    const isActive = isOpen ? " translate-x-0" : " -translate-x-full";
  
    const navbarStyle = "transition flex flex-col fixed top-0 left-0 h-full w-96 bg-night-blue-50 z-50" + isActive;
  
    return (
      <div className={navbarStyle}>
        <XMarkIcon onClick={callback} className="sticky left-3 top-4 w-6 h-auto text-night-blue-900"></XMarkIcon>
        
      </div>
    );
}

export function UserMenu({ isOpen }){

    const isActive = isOpen ? " opacity-100 z-50" : " opacity-0 z-0"

    const userMenuStyle = "transition flex flex-col justify-center items-center fixed right-0 top-18 w-80 h-96 bg-night-blue-50" + isActive
    return(
        <div className={userMenuStyle}>
            <form action="">
                <Input></Input>
            </form>
        </div>
    )
}

export function Navbar(){

    const [menuState, setMenuState] = useState(false)
    const [userMenuState, setUserMenuState] = useState(false)

    const handleMenu = () => {
        setMenuState(!menuState)
    }

    const handleUserMenu = () => {
        setUserMenuState(!userMenuState)
    }

    return(
        <>
        <nav className="sticky top-0 w-full h-14 flex justify-between items-center p-4 bg-night-blue-800 opacity-90 z-40">
            <Bars3Icon onClick={handleMenu} className="w-6 h-auto text-night-blue-50"/>
            <div className="flex gap-2 h-fit w-fit">
                <MagnifyingGlassIcon className="w-6 h-auto text-night-blue-50"/>
                <ShoppingBagIcon className="w-6 h-auto text-night-blue-50"/>
                <UserIcon onClick={handleUserMenu} className="w-6 h-auto text-night-blue-50"/>
            </div>
            <Link to={"http://localhost:5173/"} className="h-12 w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
                <img className="w-full h-full" src="../../../public/img/estrellaPolarLogoBlanco.png" alt="" />
            </Link>
        </nav>
        <UserMenu isOpen={userMenuState}/>
        <Menu isOpen={menuState} callback={handleMenu}/>
        
        </>
    )
}