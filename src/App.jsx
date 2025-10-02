import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm'
import Header from './components/Header'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <main></main>
      <TaskForm />
    </>
  );
};

export default App;
