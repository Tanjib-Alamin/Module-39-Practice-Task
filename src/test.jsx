import { useState } from "react"

export default function Test() {
    const [count, setCount] = useState(0);
    const [sixes, setSixes] = useState(0);
    const handelSingle = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const handelFour = () => {
        const newCount = count + 4;
        setCount(newCount);
    }
    const handelSix = () => {
        const newCount = count + 6;
        const newSixes = sixes + 1;
        setSixes(newSixes)
        setCount(newCount);
    }
    const handelDouble = () => {
        const newCount = count + 2;
        setCount(newCount);
    }



    return (
        <div>
            <h3>Players of Bangladesh</h3>
             {
                count > 50 &&  <p>congrats your 50</p>
            }
            {
                <h4>Your sixes: {sixes }</h4>
            }
            <h1>Score: {count} </h1>
            <button onClick={handelSingle}>Single</button>
            <button onClick={handelFour}>Four</button>
            <button onClick={handelSix}>Six</button>
            <button onClick={handelDouble}>Double</button>
           
        </div>
    )
}