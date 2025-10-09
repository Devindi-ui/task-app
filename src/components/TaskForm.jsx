import { useEffect, useState } from "react";
const TaskForm = ({ onSubmit, onCancel, initial }) => {
  const [title, setTitle] = useState(initial?.title || "");
  const [desc, setDesc] = useState(initial?.desc || "");
  const [completed, setCompleted] = useState(initial?.completed || "");
  const [error, setError] = useState("");

  useEffect (() => {
    setTitle(initial?.title || "");
    setDesc(initial?.desc || "");
    setCompleted(initial?.completed || "");
    setError("");
  }, [initial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title is required");
      return;
    }
    onSubmit({ title: title.trim(), desc, completed });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="card p-5 space-y-4 shadow-lg rounded"
    >
      <div>
        <label className="text-gray-700">Task Title</label>
        <input
          type='text'
          className='bg-gray-200 apperance-none border-2 border-gray-200 
          rounded w-full py-2 px-4 text-gray-700 leading-tight 
          focus:outline-none focus:bg-white focus:border-gray-600 mt-2'
          placeholder='eg: Complete node project'
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>

      <div className="mt-5">
        <label className="text-gray-700">Description</label>
        <textarea className="border-gray-200 rounded 
          border-1 shadow min-h-[100px] w-full py-2 px-4 focus:ouline-none
          focus:bg-white focus:border-gray-600 mt-2"
        onChange={(e) => setDesc(e.target.value)}
        value={desc}></textarea>
      </div>

      <div className="flex items-center gap-2 mt-1 mb-3">
        <input type="checkbox" 
          className="h-4 w-4 rounde border-gray-300 focus:ring-blue-500 mt-1"
          onChange={(e) => setCompleted(e.target.checked)}
          checked={completed}
        />
        <label htmlFor="completed" className="text-sm text-gray-700">
          Completed</label>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="">
        <button 
          type="submit" 
          className="bg-green-600 px-2 py-2 rounded 
          mt-3 text-white hover:bg-green-800">Add Task</button>
      </div>
    </form>
  )
}

export default TaskForm;