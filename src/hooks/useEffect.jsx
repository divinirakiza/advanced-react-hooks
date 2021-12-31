import React, {useEffect, useState} from 'react';
import {useForm} from './custom';
import Hello from '../components/Hello';

export function UseEffectUsage() {
    const [values, handleChange] = useForm({
        email: '', 
        firstName: '',
        password: ''
    });
    const [showHello, setShowHello] = useState(true);
 

    useEffect(() => {
        console.log('render');

        return () => {
            console.log('unmount');
        }
    }, [values, showHello]);

    return (
        <div>
            <div>
             <h4>Use effect</h4>

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


