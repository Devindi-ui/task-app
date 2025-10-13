const TaskItem = () => {
  return (
    <div className=''>
      <div className='flex-1'>
        <h3 className='text-lg font-semibold'>Create app</h3>
        <p className='text-sm text-gray-600 mt-1'>
          a set of words that is complete in itself, typically containing
        </p>
        <p className='text-sm text-gray-400 mt-2'>Completed</p>
      </div>
      <div className='flex gap-2'>
        <button className='bg-yellow-500 text-white py-2 px-6 my-4 
            rounded-xl shadow hover:bg-yellow-600'>
          Edit
        </button>
        <button className='bg-red-600 text-white py-2 px-6 my-4 
            rounded-xl shadow hover:bg-red-700'>
          Delete
        </button>
      </div>
    </div>
  )
}

export default TaskItem
