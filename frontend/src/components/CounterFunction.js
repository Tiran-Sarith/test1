import React, {useState} from "react";

function CounterFunction(){
    //1st state eke value eka, 2nd eka set krnn one method eka
    let [number, setNumber] = useState(0)

    function increment(){
        setNumber(++number);
    }

    return(
        <div>
            <h3> Functional Component</h3>
            <h1>Counter = {number}</h1>

            <button onClick={e => increment()}>Increment</button>
        </div>
    )
}
            //class base eeke constructor wade krne reacthooks walin
export default CounterFunction;