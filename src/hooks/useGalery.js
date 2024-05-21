import { useState, useEffect } from "react";

export function useGalery({galery, container}){
    const [scrollValue, setScrollValue] = useState(0);
    const [transitionx, setTransitionx] = useState({});

    useEffect(() => {
        const estilo = {
            transform: `translateX(${scrollValue}px)`,
            transition: 'transform 0.3s ease-in-out'
        };
        setTransitionx(estilo);
    }, [scrollValue]);

    const handleScroll = (direction) => {
        const maxScrollValue = container.current.offsetWidth - galery.current.scrollWidth;

        setScrollValue((prevScrollValue) => {
            let newScrollValue = prevScrollValue;
            if (direction === 'left') {
                newScrollValue = Math.min(prevScrollValue + 500, 0);
            } else if (direction === 'right') {
                newScrollValue = Math.max(prevScrollValue - 500, maxScrollValue);
            }
            return newScrollValue;
        });
    };

    return {transitionx, handleScroll}
}