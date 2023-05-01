import { useState, useEffect } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Next.js' },
  ]);

  useEffect(() => {
    console.log('checking');
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, title: `${newTask}` }]);
  };

  const removeTask = (taskId) => {
    const copyTasks = [...tasks];
    const updatedTasks = copyTasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return [tasks, addTask, removeTask];
}

export default useTasks;
