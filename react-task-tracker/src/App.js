import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";

import { useState, useEffect } from "react"

function App() {
    const [showAddTask, setShowAddTask] = useState(true)
    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }

      getTasks()
    }, [])

    //fetch tasks
    const fetchTasks = async () => {
      const res = await fetch("http://localhost:5000/tasks")
      const data = await res.json()

      return data
    }
    //fetch task
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await res.json()

      return data
    }

    //add task
    const addTask = async (task) => {
      const res  = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
      })  

      const data = await res.json()

      setTasks([...tasks, data])
      
      //console.log(task)
      //const id = Math.floor(Math.random() * 1000) + 1
      //const newTask = { id, ...task }
      //setTasks([...tasks, newTask])
    }

    //delete task
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE',
      })

      setTasks(tasks.filter((task) => task.id !== id))
    }

    //toggle reminder
    const toggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`http://localhost:5000/tasks/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      setTasks(tasks.map((task) => task.id === id ? 
        { ...task, reminder: !task.reminder } 
        : task ))
      console.log(id)
    }

    return (
      <div className="container"> 
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? 
              (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) 
              : ("No tasks to show")}
        <Footer />
      </div>
    );
}

export default App;
