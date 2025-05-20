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
            <h1>Kategorie zdjec</h1>
            <div>
                <label>
                    Pokaż kwiaty
                    <input
                        type="checkbox"
                        checked={KwiatyWidocznosc}
                        onChange={() => setKwiatyWidocznosc(!KwiatyWidocznosc)}
                    />
                </label>
                {KwiatyWidocznosc ? <img src="obraz1.jpg" alt="loading"/> : <p></p>}
                {KwiatyWidocznosc ? <img src="obraz2.jpg" alt="loading"/> : <p></p>}
                {KwiatyWidocznosc ? <img src="obraz7.jpg" alt="loading"/> : <p></p>}

            </div>
            <div className="button">
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
                {ZwierzetaWidocznosc ? <img src="obraz3.jpg" alt="loading"/> : <p></p>}
                {ZwierzetaWidocznosc ? <img src="obraz4.jpg" alt="loading"/> : <p></p>}
                {ZwierzetaWidocznosc ? <img src="obraz5.jpg" alt="loading"/> : <p></p>}
                {ZwierzetaWidocznosc ? <img src="obraz8.jpg" alt="loading"/> : <p></p>}
                {ZwierzetaWidocznosc ? <img src="obraz9.jpg" alt="loading"/> : <p></p>}
                {ZwierzetaWidocznosc ? <img src="obraz10.jpg" alt="loading"/> : <p></p>}
                {ZwierzetaWidocznosc ? <img src="obraz11.jpg" alt="loading"/> : <p></p>}
            </div>
            <div className="button">
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
                {AutaWidocznosc ? <img src="obraz6.jpg" alt="loading"/> : <p></p>}
                {AutaWidocznosc ? <img src="obraz12.jpg" alt="loading"/> : <p></p>}

            </div>
            <div className="button">
                <span>Pobierz {count}</span>
                <button onClick={increment}>+</button>
            </div>
        </>
    )
        ;
}

export default App;