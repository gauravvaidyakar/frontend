function Counter({count,increment,decrement,Reset}){
    return(
    <>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    </>)
}

export default Counter;