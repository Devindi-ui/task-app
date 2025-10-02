const TaskForm = () => {
  return (
    <form>
      <div>
        <label className="text-gray-700">Task Title</label>
        <input
          type='text'
          className='bg-gray-200 apperance-none border-2 border-gray-200 
          rounded w-full py-2 px-4 text-gray-700 leading-tight 
          focus:outline-none focus:bg-white focus:border-gray-600 mt-2'
          placeholder='eg: Complete node project'
        />
      </div>

      <div className="mt-5">
        <label className="text-gray-700">Description</label>
        <textarea className="border-gray-200 rounded 
        border-1 shadow min-h-[100px] w-full py-2 px-4 focus:ouline-none
        focus:bg-white focus:border-gray-600 mt-2"></textarea>
      </div>

      <div className="flex item-center gap-2">
        <input type="checkbox" className="h-4 w-4 rounde border-gray-300 focus:ring-blue-500 mt-1"/>
        <label htmlFor="completed" className="text-sm text-gray-700">Completed</label>
      </div>

      <div className="">
        <button type="submit" className="bg-green-600 px-2 py-2 rounded mt-3 text-white hover:bg-green-800">Add Task</button>
      </div>
    </form>
  )
}

export default TaskForm;