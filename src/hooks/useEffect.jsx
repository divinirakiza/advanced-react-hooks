import React, {useEffect, useState} from 'react';
import {useFetch, useForm} from './custom';
import Hello from '../components/Hello';

export function UseEffectUsage() {
    const [values, handleChange] = useForm({
        email: '', 
        firstName: '',
        password: ''
    });
    const [showHello, setShowHello] = useState(true);
 
    const [count, setCount]= useState(JSON.parse(localStorage.getItem('count'))); 

    // useEffect(() => {
    //     console.log('render');

    //     const onMouseMove = e => {
    //         console.log(e);
    //     }
    //     window.addEventListener('mousemove', onMouseMove);

    //     return () => {
    //         console.log('unmount');
    //     window.removeEventListener('mousemove', onMouseMove);

    //     }
    // }, [values, showHello]);


    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count));
    }, [count])

    const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)

    return (
        <div>
            <div>
             <h4>Use effect</h4>
                <div>
                   <p> {!data ? 'Loading ....' : data} </p>
                   <div>Counter: {count}</div>
                   <button onClick={() => setCount(c => c + 1)}>Increment</button>
                </div>
                <div>
                    <button type="button" onClick={() => setShowHello(!showHello)}>Toogle</button>
                    {showHello && <Hello/>}
                                    </div>
             <input type="text" value={values.email} onChange={handleChange} name='email' placeholder="email" />
             <input type="password" value={values.password} onChange={handleChange} name='password' placeholder="Passowrd" />
            </div>
        </div>
    )
}


