import { useState } from 'react';
import './App.css';
import { SampleService } from '@/services/SampleService';

function App() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const getSampleName = async () => {
        // マスタ初期化APIを呼び出す
        const name: string = await SampleService.getSampleName();
        setName(name);
    };

    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => getSampleName()}>Get Name</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
                {name && <p>{name}</p>}
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
