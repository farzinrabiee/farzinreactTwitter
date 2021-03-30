// import React, {useState} from "react"
// import './App.css';
//
// function App() {
//     const [tasks, setTasks] = useState(["do", "far"])
//     const [newTask, setNewTask] = useState("")
//
//
//     const addTask = () => {
//
//         if (!newTask) {
//             return;
//         }
//         // const taskss = [...tasks]
//         // taskss.push(newTask)
//         // setTasks(taskss)
//         setTasks(currentTasks=>{
//             return [...currentTasks,newTask]
//         })
//         setNewTask("")
//     }
//
//
//     return (
//         <div className="container">
//             <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)}/>
//             <button onClick={addTask}>add</button>
//             <div className="list">
//                 {tasks.map(task => (
//                         <div className="task">
//                             <p className='taskTitle'>{task}</p>
//                         </div>
//                     )
//                 )}
//             </div>
//         </div>
//
//     );
// }
//
// export default App;
import React from 'react';
import Layout from "./components/layout/layout";

const App = () => {
    return (
        <Layout/>
    );
};

export default App;
