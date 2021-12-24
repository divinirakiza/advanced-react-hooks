import React, {useState} from 'react';
import {useForm} from './custom'

function expensiveInitialState (){
    return 4;
}

const UseStateUsage =  ()  => {
    
    return (
        <div>
            <p>Basic Usage</p>
            <BasicUsage/>


            <p>Handling Inputs</p>
            <HandlingInputs/>
        </div>
    )
}


const BasicUsage = () => {
    useState(() => expensiveInitialState());

    // Base Setter
    // const [count, setCount] = useState(0);

    const [{count1, count2}, setCount] = useState({count1: 0, count2: 1});

    return (
            <div>
                {/* Will override the whole object */}
                {/* <button onClick={() => setCount(curr => {count1: (curr.count1 + 1)} )}>+</button> */}
            
                <button onClick={() => 
                                        setCount(curr => (
                                        { ...curr,
                                            count1: (curr.count1 + 1) 

                                        }))}>+</button>
                
                {/* // No overwriting updates */}
                {/* <button onClick={() => setCount(count => (count + 1))}>Count 3</button> */}

                <p>Count1: {count1}</p>
                <p>Count2: {count2}</p>
            </div>
    )
}

const HandlingInputs = () => {
   

    const [values, handleChange] = useForm({email: '', paassword: ''})

    return (
            <div>
                <input name="email" value={values.email} onChange={handleChange}/>
                <input type="password" name="password" value={values.password} onChange={handleChange} />
            </div>
    )
}

export default UseStateUsage;