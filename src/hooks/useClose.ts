import React, {useEffect, useState} from "react";


export const useClose = (ref: React.RefObject<HTMLDivElement>) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        if (
            ref.current &&
            !ref.current.contains(event.target as Node)
        ) {
            setIsVisible(false);
        }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
        document.removeEventListener("click", handleClickOutside);
        };
    }, [ref]);

    return {isVisible, setIsVisible}
}