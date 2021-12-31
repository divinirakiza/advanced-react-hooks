import React, {useEffect} from 'react';

export function UseEffectUsage() {
    useEffect(() => {
        console.log('render');
    })

    return (
        <div>Use effect</div>
    )
}


