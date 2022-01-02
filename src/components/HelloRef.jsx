import React, {useRef} from "react";


export default function HelloRef() {
    const renders = useRef(0);

    console.log('Hello renders', renders.current++)

    return (
        <div>
            <p>Hello Ref</p>
        </div>
    )
}