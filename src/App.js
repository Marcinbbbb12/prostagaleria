import React, { useState } from 'react';
import './App.css';

function App() {
    const [KwiatyWidocznosc, setKwiatyWidocznosc] = useState(true);
    const [ZwierzetaWidocznosc, setZwierzetaWidocznosc] = useState(true);
    const [AutaWidocznosc, setAutaWidocznosc] = useState(true);
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1);
    };



    return (
        <>
            <h1>Prosta Galeria</h1>
            <div>
                <label>
                    Pokaż kwiaty
                    <input
                        type="checkbox"
                        checked={KwiatyWidocznosc}
                        onChange={() => setKwiatyWidocznosc(!KwiatyWidocznosc)}
                    />
                </label>
                {KwiatyWidocznosc ? <img src="kwiaty.png" alt="loading"/> : <p></p>}
            </div>
            <div>
                <span>Pobierz {count}</span>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <label>
                    pokaz zwierzeta
                    <input
                        type="checkbox"
                        checked={ZwierzetaWidocznosc}
                        onChange={() => setZwierzetaWidocznosc(!ZwierzetaWidocznosc)}
                    />
                </label>
                {ZwierzetaWidocznosc ? <img src="kot.png" alt="loading"/> : <p></p>}
            </div>
            <div>
                <span>Pobierz {count}</span>
                <button onClick={increment}>+</button>
            </div>
            <div>
                <label>
                    pokaz auta
                    <input
                        type="checkbox"
                        checked={AutaWidocznosc}
                        onChange={() => setAutaWidocznosc(!AutaWidocznosc)}
                    />
                </label>
                {AutaWidocznosc ? <img src="auto.png" alt="loading"/> : <p></p>}
            </div>
            <div>
                <span>Pobierz {count}</span>
                <button onClick={increment}>+</button>
            </div>
        </>
    )
        ;
}

export default App;