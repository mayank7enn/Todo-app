import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList/TodoList';
function App() {
  const [Todos, setTodo] = useState([]);

  const onFormData = (formData) => {
    if(formData.title.trim().length <= 0) {
      alert("Name cannot be empty!");
      return;
    }
    else{
      setTodo((prevTodos) => { return [formData, ...prevTodos] });
    }
      console.log(formData);
  }

  const deleteItem = (id) => {
    setTodo((prevTodos)=>{
      return prevTodos.filter((updateTodo, index)=>{
        return index !== id;
      })
    })
  }

  return (
    <div className="wrapper">
      <TodoForm onAddData={onFormData} />
      <TodoList elements={Todos} idSelector={deleteItem}/>
    </div>
  );

}

export default App;
