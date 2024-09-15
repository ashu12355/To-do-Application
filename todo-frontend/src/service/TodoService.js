const BASE_URL = "http://localhost:1000/todos";

export function getTodos() {
    return fetch(BASE_URL);
} 
export function addTodo(payload) {
    return fetch(BASE_URL, {
    method: "POST",
    body:JSON.stringify(payload),
    headers:{
      'content-type':"application/json"
    }
   })

  export function updateTodoState(id,state){
    const url = `${BASE_URL}/${id}/state/${state}`;
    return fetch(url ,{ method: "PATCH" });
  }  
}