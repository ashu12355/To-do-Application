import "./index.css";
import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [allTodo, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("http://localhost:1000/todos");
        const todos = await response.json();
        console.log(todos);
        setTodos(todos);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTodos();
  }, []);

async function submitForm(event){
  event.preventDefault();
  const form = event.target;
  const inputs = form.elements;
  
  const obj = {};

  Array.from(inputs).forEach(input =>{
    if(input.type !== "submit"){
      obj[input.name] = input.value;
    }
  });
 const json = JSON.stringify(obj); //convert javascript object in JSON
 console.log(json);



 const response = await fetch("http://localhost:1000/todos", {
  method:"POST",
  body:JSON.stringify(obj),
  headers:{
    'content-type':"application/json"
  }
 })

 if(response.status === 201){
  const data = await response.json();
  setTodos([...allTodo,data])
 } else {
  console.error(response.status);
  
 }
}
  return (
    <main>
      <div className="bg-white p-4 rounded-md shadow-lg w-96">
        <h2 className="text-center text-xl">Todo-App</h2>
        <section className="mt-4">
          <form onSubmit={submitForm} className="flex justify-between gap-2">
            <input type="text" name="title" placeholder="Add Text Here" />
            <input type="submit" value="add" />
          </form>
        </section>

        <section className="mt-4 flex justify-between">
          <div className="flex gap-2 ">
            <button>All</button>
            <button>Pending</button>
            <button>Completed</button>
          </div>
          <button className="px-2 bg-blue-500 text-white py-1 rounded">
            Clear All
          </button>
        </section>
        <hr />
        <section className="mt-4">
  {allTodo.map((todo) => (
    <div className="flex gap-4" key={todo.id}>
      <input type="checkbox" />
      <p className="text-purple-600">
        {todo.title}
      </p>
    </div>
  ))}
</section>

      </div>
    </main>
  );
}

export default App;
