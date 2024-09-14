import { useState } from "react"

function TodoMenu({filterTodos}) {
    const [selectedMenu,setSelectedMenu] = useState("ALL");
    return (
        <section className="mt-4 flex justify-between">
        <div className="flex gap-2 ">
            
          <button
          className={`${selectedMenu == "ALL" ? "text-blue-500" : ""}`}
          onClick={()=> {
            filterTodos("ALL")
            setSelectedMenu("ALL")
          }}
          >All</button>

          <button 
          className={`${selectedMenu == "PENDING" ? "text-blue-500" : ""}`}
          onClick={()=> {
            filterTodos("PENDING")
            setSelectedMenu("PENDING")
          }}>Pending</button>

          <button
          className={`${selectedMenu == "COMPLETED" ? "text-blue-500" : ""}`}
          onClick={()=> {
            filterTodos("COMPLETED")
            setSelectedMenu("COMPLETED");
          }}>Completed</button>

        </div>
        <button className="px-2 bg-blue-500 text-white py-1 rounded">
          Clear All
        </button>
      </section>
    )
}

export default TodoMenu;