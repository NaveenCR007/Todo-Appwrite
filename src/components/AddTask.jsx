import React, { useEffect } from 'react'
import Input from './Input'
import Button from './Button'
import { useForm } from 'react-hook-form'
import storageService from '../appwrite/config'

function AddTask({ Task }) {
  const { register, handleSubmit, setValue } = useForm()


  // Pre fill the old task title
  useEffect(() => {
    if (Task) {
      setValue("todoTitle", Task.todoTitle)
    }
  }, [Task, setValue])


  const submit = async (data) => {
    if (Task) {
      const id = Task.$id;
      const session = await storageService.updateTask(id, data)

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
          bgColor={Task ? "bg-green-500" : "bg-blue-500"}
          className="w-full text-center cursor-pointer"
          children={Task ? "Update" : "Add"}
        />
      </div>
    </form>
  )
}

export default AddTask
