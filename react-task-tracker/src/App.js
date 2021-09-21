import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: "dr appointment",
            day: "deb 5 @ 2:30pm",
            reminder: true,
        },
        {
            id: 2,
            text: "foood shopping",
            day: "feb 6 @ 2:30pm",
            reminder: true,
        },
        {
            id: 3,
            text: "school meeting",
            day: "feb 6 @ 1:30pm",
            reminder: true,
        },
    ]
)
    //delete task
    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
      //console.log("delete", id)
    }

    //toggle reminder
    const toggleReminder = (id) => {
      setTasks(tasks.map((task) => task.id === id ? 
        { ...task, reminder: !task.reminder } 
        : task ))
      console.log(id)
    }

    return (
      <div className="container"> 
        <Header />
          {tasks.length > 0 ? 
            (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) 
            : ("No tasks to show")}
      </div>
    );
}

export default App;
