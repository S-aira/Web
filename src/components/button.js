import React,{useState} from 'react';

function Button(props){
    const [count , setCount] = useState(0);
    function Increment(){
        setCount(count + 1);
    }
    function Decrement(){
        setCount(count - 1);
    }
    return(
        <>
        <p>{count}</p>
        <button onClick={Increment} disabled={count == 20}> Increment</button>
        <button onClick={Decrement} disabled={count == 0}>decrement</button>

        <button onMouseEnter={props.changeHandler} onClick={props.clickHandler}>{props.children}</button>
        </>
    );
}

export default Button;

