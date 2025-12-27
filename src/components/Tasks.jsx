import React, { useState, useEffect } from 'react'
import storageService from '../appwrite/config'
import { useSelector, useDispatch } from 'react-redux'
import { editableTask } from '../store/authSlice'

function Tasks() {
    const user = useSelector(state => state.auth.userData)
    const userId = user.$id
    const dispatch = useDispatch()
    const [task, setTask] = useState([])


    // Fetch all the old tasks
    useEffect(async () => {
        const userTasks = await storageService.listTasks(userId)

        if (userTasks) {
            setTask(userTasks.documents)
        }
    }, [task, setTask])


    const handleEdit = (id) => {
        const editTask = task.find(item => item.$id === id)
        const title = editTask.taskTitle

        dispatch(editableTask({taskId: id, taskTitle: title}))
    }

    const handleDelete = async (id) => {
        const result = await storageService.deleteTask(id)

        if (result) {
            console.log("Task deleted");
        }
    }


    return (
        <div className='w-full max-w-4xl'>
            <ul className='flex flex-wrap'>
                {task.map((idx, item) => {
                    <li key={idx} className='gap-4'>
                        {item.todoTitle}

                        <div className='flex'>
                            <span onClick={handleEdit(item.$id)} className='p-2 font-semibold bg-blue-500'>Edit</span>
                            <span onClick={handleDelete(item.$id)} className='p-2 font-semibold bg-red-500'>Delete</span>
                        </div>

                    </li>
                })}
            </ul>
        </div>
    )
}

export default Tasks
