import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, readTodo, updateTodo } from '../store/todo';

function Home() {
  const [task, setTask] = useState('');
  const [editableTaskId, setEditableTaskId] = useState(null);
  const [updatedTask, setUpdatedTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (task.trim()) {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  const handleUpdate = (id, text) => {
    setEditableTaskId(id);
    setUpdatedTask(text);
  };

  const handleSaveUpdate = (id) => {
    dispatch(updateTodo({ id, text: updatedTask }));
    setEditableTaskId(null);
  };

  return (
    <div className="mx-auto w-full max-w-screen-lg bg-zinc-50  shadow-lg rounded-lg overflow-hidden mt-36">
      <div className="px-16 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase text-center">To-Do List</h1>
      </div>
      <form
        className=" mx-auto w-full max-w-screen-md px-4 py-2"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <div className="flex items-center border-b-2 border-teal-500 py-2 ">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>

      <ul className="divide-y divide-gray-200 px-4">
        {todos.map((todo) => (
          <li key={todo.id} className="py-4 flex justify-between items-center">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(readTodo(todo.id))}
                className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
              />
              {editableTaskId === todo.id ? (
                <input
                  value={updatedTask}
                  onChange={(e) => setUpdatedTask(e.target.value)}
                  onBlur={() => handleSaveUpdate(todo.id)}
                  className="ml-3 block text-gray-900"
                />
              ) : (
                <label
                  className={`ml-3 block text-gray-900 ${todo.completed ? 'line-through' : ''}`}
                  onClick={() => handleUpdate(todo.id, todo.text)}
                >
                  {todo.text}
                </label>
              )}
            </div>
            {todo.completed && (
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-500 hover:text-red-700"
              >
                X
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;

 
  
 

 
 