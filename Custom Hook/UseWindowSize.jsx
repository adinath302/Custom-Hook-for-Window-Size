import React, { useState } from 'react'
import { useEffect } from 'react';

const UseWindowSize = () => {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {  
        const HandleRsize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        }
        window.addEventListener('resize', HandleRsize);

        return () => { window.removeEventListener('resize', HandleRsize) }
    },[])
}

export default UseWindowSize;