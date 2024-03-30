import React, {useState} from 'react';


// function Counter(props){
    
//     const [count , setCount ] = useState(10);
//     function counteradd(){
//         if(count < 20){
//      setCount( count + 1)
//         }
//     }
//     function countersubtract(){
//         if(count > 10){
//         setCount( count - 1)
//       }
//     }

//     function reset(){
//        setCount(10)

//        }
//     return(
//         <>
//         <p>{count}</p>
//         <button onClick={counteradd}>Count+</button>
//       <button onClick={countersubtract}>Count-</button>
//       <button onClick={reset}>RESET</button>
//       </>   
//     );
   
// }
// export default Counter;


function Counter(props){


    return(
        <>
                
        <button onClick={props.onClick}>{props.name}</button>
        <p>{props.count}</p>
        </>

    );

}

export default Counter;