import './styles.css';
import Content from './Content';
import { useState } from 'react';
import Scenario1 from './scenarios/Scenario1';
import Scenario2 from './scenarios/Scenario2';

export default function App() {
    const [toggleView, setToggleView] = useState(true);

    return (
        <div>
            <button onClick={() => setToggleView(!toggleView)}>Toggle</button>
            {toggleView ? <Scenario2 /> : null}
        </div>
    );
}
