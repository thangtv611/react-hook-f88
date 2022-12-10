import { useEffect, useState } from 'react';
import axios from 'axios';

const tabs = ['comments', 'albums', 'posts'];

const Scenario1 = () => {
    const [tab, setTab] = useState('comments');
    const [data, setData] = useState([]);
    const [showGoTop, setShowGoTop] = useState(false);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/' + tab).then((resp) => {
            console.log(resp.data[0]);
            setData(resp.data);
        });
    }, [tab]);

    useEffect(() => {
        const handleScroll = () => {
            setShowGoTop(window.scrollY >= 200);
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {tabs.map((current, index) => {
                return (
                    <button
                        style={current === tab ? { fontWeight: 'bold' } : {}}
                        key={index}
                        onClick={() => {
                            if (current !== tab) {
                                setTab(current);
                            }
                        }}
                    >
                        {current}
                    </button>
                );
            })}
            <ul>
                {data.map((item, index) => {
                    return <li key={index}>{item.title || item.name}</li>;
                })}
            </ul>
            {showGoTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        top: 100,
                        padding: '1rem 2rem',
                        color: 'white',
                        background: 'green',
                        cursor: 'pointer'
                    }}
                >
                    Go top
                </button>
            )}
        </div>
    );
};

export default Scenario1;
