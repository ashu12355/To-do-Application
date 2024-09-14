const BASE_URL = "http://localhost:1000/todos";

export function getTodos() {
    return fetch("http://localhost:1000/todos");
} 
export function addTodo(payload) {
    return fetch("http://localhost:1000/todos", {
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
      'content-type':"application/json"
    }
   })

  export function updateTodoState(id,state){
    const url = `${BASE_URL}/${id}/state/${state}`;
    return fetch(url ,{method: "PATCH" });
  }  
}