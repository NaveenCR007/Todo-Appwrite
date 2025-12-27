import React, { useEffect } from 'react'
import Input from './Input'
import Button from './Button'
import { useForm } from 'react-hook-form'
import storageService from '../appwrite/config'
import { useSelector } from 'react-redux'
import Tasks from './Tasks'

function AddTask() {
  const { register, handleSubmit, setValue } = useForm()
  const editTaskTitle = useSelector(state => state.auth.editTaskTitle)
  const editTaskId = useSelector(state => state.auth.taskId)


  // Pre fill the old task title
  useEffect(() => {
    if (editTaskTitle) {
      setValue("todoTitle", editTaskTitle)
    }
  }, [editTaskTitle, setValue])


  const submit = async (data) => {
    if (editTaskId) {
      const session = await storageService.updateTask(editTaskId, data);

      if (session) {
        console.log("Task Updated");
      }

    } else {
      const result = await storageService.createTask(data)

      if (result) {
        console.log("New task added");
      }
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div className='w-full'>
          <Input
            label="Add task: "
            placeholder="What do you want to do today..."
            {...register("todoTitle",
              {
                required: "Task title is required!",
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: "Only letters and numbers are allowed"
                }
              })
            }
          />

          <Button
            type='submit'
            bgColor={editTaskId ? "bg-green-500" : undefined}
            className="w-full text-center cursor-pointer"
            children={editTaskId ? "Update" : "Add"}
          />
        </div>
      </form>

      <Tasks />
    </>
  )
}

export default AddTask
