import { useEffect } from 'react';

const useFavicon = (iconSrc) => {
    useEffect(() => {
        const favicon =
            document.querySelector("link[rel='icon']") ||
            document.createElement('link');
        favicon.rel = 'icon';
        favicon.href = iconSrc;

        if (!document.querySelector("link[rel='icon']")) {
            document.head.appendChild(favicon);
        }
    }, [iconSrc]);
};

export default useFavicon;
