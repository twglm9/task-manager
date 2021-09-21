const tasks = [
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

const Tasks = () => {
    return (
        <>
          {tasks.map(() => (<h3>task.text</h3>))}  
        </>
    )
}

export default Tasks
