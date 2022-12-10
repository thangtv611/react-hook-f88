import { useState, useEffect } from 'react';

const Scenario2 = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    }, []);

    return <h1>{width}</h1>;
};

export default Scenario2;
