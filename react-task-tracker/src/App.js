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
  return (
    <div className="container"> 
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
