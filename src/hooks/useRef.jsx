import React, {useRef, useState} from 'react';
import HelloRef from '../components/HelloRef'


export function UseRefUsage() {

    const inputRef = useRef();
    const [showHelloRef, setShowHelloRef] = useState(true);
    return (
    <div>
        {(showHelloRef && <HelloRef />)}
        <p>Use ref</p>
        <input type="text" ref={inputRef} />
        <button onClick={() => {
            inputRef.current.focus()
            console.log(inputRef.current)
        }}>Focus</button>

<br />
        <button onClick={() => setShowHelloRef(!showHelloRef)}>Toogle</button>
    </div>)
}