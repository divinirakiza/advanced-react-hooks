import React, {useEffect} from 'react';

export default function Hello() {
    
    useEffect(() => {
        console.log('Hello Component rendered');
    }, [])


    return (
        <div>
            <h4>Hello World 😊</h4>
        </div>
    )
}