import { useState } from 'react'
import './App.css'
import TaskList from './components/TaskList'
import { type Task } from './types'

function App() {
  // const [tasks, setTasks] = useState<Task[]>([])
  const tasks = [
    {
      id: 1,
      title: "Work on Project",
      currentPomodoro: 1,
      totalPomodoros: 4,
      isCompleted: false
    },
    {
      id: 2,
      title: "Work on Project More",
      currentPomodoro: 2,
      totalPomodoros: 5,
      isCompleted: false
    },
  ]
  return (
    <>
    <TaskList tasks={tasks}/>
    </>
  )
}

export default App
