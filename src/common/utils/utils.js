import { useState, useEffect } from "react";

export const toggleSidebar = () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const slideIn = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue('--SideNavigation-slideIn');
        if (slideIn) {
            closeSidebar();
        } else {
            openSidebar();
        }
    }
};

export const openSidebar = () => {
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.setProperty('--SideNavigation-slideIn', '1');
    }
};

export const closeSidebar = () => {
    if (typeof document !== 'undefined') {
        document.documentElement.style.removeProperty('--SideNavigation-slideIn');
        document.body.style.removeProperty('overflow');
    }
};

export const fetchFromCom = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((data) => setData(data));
    }, [url]);

    return [data];
};


