import './styles.css';
import Content from './Content';
import { useState } from 'react';
import Scenario1 from './scenarios/Scenario1';

export default function App() {
    const [toggleView, setToggleView] = useState(true);

    return (
        <div>
            <button onClick={() => setToggleView(!toggleView)}>Toggle</button>
            {toggleView ? <Scenario1 /> : null}
        </div>
    );
}
