import React, { useState } from 'react'
import Child from './Child'

export default function Parant() {
    const [name, setName] = useState("")

    const handleChange = (e) => {
        setName(e.target.value)
    }
    return (<>
        <div>
            <h1>parent</h1>
            <input
                type='text'
                value={name}
                onChange={handleChange}
            />

            <button onClick={() => setName("hanumant")}>Click me !</button>
        </div>
        <Child name={name} />
    </>
    )
}
