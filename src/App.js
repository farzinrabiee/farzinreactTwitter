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
//         const taskss = [...tasks]
//         taskss.push(newTask)
//         setTasks(taskss)
//         setTasks(currentTasks=>{
//             return [...currentTasks,newTask]
//         })
//         setNewTask("")
//     }
// //
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
import React,{Fragment} from 'react';
import Layout from "./components/layout/layout";
import {BrowserRouter, Route, Switch,Redirect} from "react-router-dom";
import Home from "./pages/home/Home";
import Pages404 from "./pages/404";
import TweetByHashTag from "./pages/tweetsByHashtag/TweetByHashTag";
import TweetByUser from "./pages/tweetsByUser/TweetByUser";
import AuthPage from "./pages/auth/AuthPage";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <PublicRoute path={"/login"} component={AuthPage}/>
                    <PrivateRoute path={"/"} render={() => {
                        return (
                            <Layout>

                                <Switch>
                                    <Route exact path={"/"} component={Home}/>
                                    <Route exact path={"/hashtags/:id"} component={TweetByHashTag}/>
                                    <Route exact path={"/users/:user"} component={TweetByUser}/>

                                    <Route component={Pages404}/>
                                </Switch>
                            </Layout>
                        )
                    }}/>
                </Switch>
            </BrowserRouter>
       <ToastContainer/>
        </Fragment>

    );
};

export default App;




const isLogin=()=>!!localStorage.getItem("x-auth-token")

export const PublicRoute=({component,...props})=>{

    return <Route {...props} render={(props)=>{
        console.log(props)
        if (isLogin())
            return <Redirect to={"/"}/>
        else {
            return React.createElement(component,props)
        }
    }
    }/>

}

export const PrivateRoute=({render,...props})=>{

    return <Route {...props} render={(props)=>{
        console.log(props)
        if (isLogin())
            return render(props)
        else {
            return <Redirect to={"/login"}/>

        }
    }
    }/>
}
