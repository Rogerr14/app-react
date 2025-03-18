import { useState } from "react"

export const Counter = () => {

  const [counter, setCounter] = useState(0);


  const increment = (valor:number)=> {
    setCounter(counter + valor);
  }




  return (
    <div className="nt-5">
        <h1>Counter: UseState</h1>

        <span>valor: {counter}</span>
        <br />
        <button className="btn btn-outline-primary mt-2" onClick={ () =>increment(1)}>
          +1
        </button>
        <br />
        <button className="btn btn-outline-primary mt-2" onClick={()=>increment(2)}>
          +2
        </button>
        <br />
        <button
        className="btn btn-outline-danger mt-2"
        onClick={() => setCounter(0)}
        >
          Reset
        </button>
    </div>
  )
}
