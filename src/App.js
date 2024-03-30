// import React from 'react';
// // import Button from './components/button';
// // import './components/button.css';
// // import './components/table.css';
// // import List from './components/list';
// // import Table from './components/table';
// import Counter from './components/counter.js';
// import './components/counter.css';
// function App() {
//   return (
//     <>
//     {/* <Button name="Pagal" /> 
//    <Button name="Pagal1" />
//    <Button name="Pagal2" /> */}
//    {/* <Button/>
//   <Button changeHandler={() => alert("Hlo World")}>Were are you?</Button>
//     <List/>
//     <Table/>  */}
//     <Counter/>


//    </>
//   );
// }

// export default App;


// import React, { useState } from "react"; 
// import Counter from './components/counter.js';
// // import List from './components/List.js'; // Import the List component
// //import './components/Button.css';
// // import './components/List.css';
// function App() {
//   let [count , setCount] = useState(10);
//   function Increment(){
//     if(count < 20)
//     setCount(count + 1);
// }

// function Decrement(){
//   if(count > 10)
//     setCount(count - 1);
// }

// function Reset(){
//     setCount(10);
// } 

//     return (

//       <div>
//            {/* <div>
//             <Button name="Button-1" className="btn-1" onClick={() => { alert('You clicked on Button1'); }} />
//             <Button name="Button-2" className="btn-2" onClick={() => { alert('You clicked on Button2'); }} />
//             <Button name="Button-3" className="btn-3" onClick={() => { alert('You clicked on Button3'); }} />
//           </div> */}

//           {/* <div className="list">
//             <List/>
//           </div>  */}
          
          
//           {/* <Button name="Increment"/> */}

//           <Counter onClick={Increment} name="Increment"></Counter>
//           <Counter onClick={Decrement} name="Decrement"></Counter>
//           <Counter onClick={Reset} name="Reset"></Counter>
//           <p>{count}</p>

//       </div>
    
//     );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex === -1) {
      if (inputValue.trim() !== '') {
        setTodos([...todos, inputValue]);
        setInputValue('');
      }
    } else {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = inputValue;
      setTodos(updatedTodos);
      setInputValue('');
      setEditIndex(-1);
    }
  };

  const handleEdit = (index) => {
    setInputValue(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    if (editIndex === index) {
      setInputValue('');
      setEditIndex(-1);
    }
  };

  return (
    <div className="todo-list">
      <h1 className="title">To-Do List</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your task"
          className="input"
        />
        <button type="submit" className="btn">{editIndex === -1 ? 'Add Task' : 'Update Task'}</button>
      </form>
      <ul className="list">
        {todos.map((todo, index) => (
          <li key={index} className="list-item">
            <div>{todo}</div>
            
            <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
            <button onClick={() => handleEdit(index)} className="edit-btn">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;




