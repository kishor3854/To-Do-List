import { useState } from 'react';
import './App.css';
import './components/style.css';
import CustomButtom from './components/CustomButtom'
import CustomTextInput from './components/CustomTextInput'
import ToDoList from './components/ToDoList';

function App() {

  const [toDo, setToDo] = useState('');
  const [toDoData, setToDoData] = useState([]);

  const onAdd = () => {
    if (toDo.length > 0) {
      const newTodo = { id: toDoData.length + 1, name: toDo };
      console.log('newTodo', newTodo);
      setToDoData([...toDoData, newTodo]);
      setToDo('');
    } else {
      alert('Please add some task.')
    }
  }

  const deleteTodo = (id) => {
    setToDoData(toDoData.filter(filterTodo => filterTodo.id !== id))
  }

  const addTask = (value) => {
    setToDo(value)
  }

  return (
    <div className="App">
      <CustomTextInput
        onChange={addTask}
        value={toDo}
        placeholder="New Todo" />
      <CustomButtom buttonName={'Add'} onClick={onAdd} />
      <br />
      <h2>To Do List</h2>

      <ToDoList todos={toDoData} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
