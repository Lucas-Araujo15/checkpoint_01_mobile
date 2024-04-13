import { ReactNode, createContext, useContext, useState } from "react"

interface Task {
    id: number
    title: string
}

interface GlobalStateContext {
    tasks: Task[]
    addTask: (title: string) => void
    updateTask: (id: number, newTitle: string) => void
    deleteTask: (id: number) => void
}

const GlobalStateContext = createContext<GlobalStateContext>({
    tasks: [],
    addTask: () => {},
    updateTask: () => {},
    deleteTask: () => {}
})

export const useGlobalState = () => useContext(GlobalStateContext)

interface GlobalStateProviderProps {
    children: ReactNode
}

export function GlobalStateProvider({children}: GlobalStateProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([])

    function addTask(title: string) {
        const newTask: Task = {
            id: Date.now(),
            title
        }

        setTasks([...tasks, newTask])
    }

    function updateTask(id: number, newTitle: string) {
        const newTasks = tasks.map(task => task.id === id ? {...task, title: newTitle} : task)
        setTasks(newTasks)
    }

    function deleteTask(id: number) {
        const newTasks = tasks.filter(task => task.id !== id)
        setTasks(newTasks)
    }

    return (
        <GlobalStateContext.Provider value={{tasks, addTask, deleteTask, updateTask}}>
            {children}
        </GlobalStateContext.Provider>
    )
} 