//ternary operator
import { useState } from "react";

function App() { 

  const [task, setTasks] = useState<{ status: string; task: string }[]>(
    [
        {status: 'pending', task: 'task1'},
        {status: 'completed', task: 'task2'},
        {status: 'pending', task: 'task3'},
    ]
  );
  const [displayStatus, setDisplayStatus] = useState(true);

  return (
    <>
    <div>
        <button onClick={() => setTasks([])}>Clear Task</button>
        <button onClick={()=>setDisplayStatus(false)}>Hide Task List</button>
    </div>
    <hr />
    {displayStatus? (
        <ul>
            {task.length>0 ? (
                task.map((item: { status: string; task: string }, index: number) => (
                    <li key={index}>
                        {item.task}
                    </li>
                ))
            ):(
                <li>No Task</li>
            )} 
        </ul>
    ):(
        <h1>List is unavailable!</h1>
    )}
    </>
  );
}
export default App;