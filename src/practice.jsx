import { useState } from "react"

export default function Addcounter() {
    const [count, setCount] = useState(0);

    const handelAdd = () => {
        const newNum = count + 5;
        setCount(newNum);
    }
    return (
        <div className="card" >
            <h3>Count: { count}</h3>
            <button onClick={handelAdd}>Add</button>
        </div>
    )
}