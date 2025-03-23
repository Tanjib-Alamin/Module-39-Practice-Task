import { useState } from "react"

export default function Batsman() {
    const [runs, setRuns] = useState(0)
    const [six, setSixs] =useState(0)
    
    const handelSingels = () => {
        const addSingle = runs + 1;
        setRuns(addSingle)
    }
    const handelSix = () => {
        const addSix = runs + 6;
        const allSixes = six + 1;
        setSixs(allSixes)
        setRuns(addSix)
    }


    return (
        <div>
            <h3>Player : Bangla Batsman</h3>
            {
                runs > 50 && <p>your score is 50</p>
            }
            <h1>All Sixes : {six }</h1>
            <h2>Score: { runs }</h2>
            <button onClick={handelSingels}>singels</button>
            <button>four</button>
            <button onClick={handelSix}>six</button>
        </div>
    )
}