import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskForm from './components/TaskForm'
import Header from './components/Header'
import Main from './components/Main'

function App () {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Main/>
      <footer></footer>
    </>
  );
};

export default App;
