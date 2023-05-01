import { useState, useEffect } from 'react';

function useTasks() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', isCompleted: false },
    { id: 2, title: 'Learn Next.js', isCompleted: false },
  ]);

  useEffect(() => {
    console.log('checking');
  }, []);

  const addTask = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, title: `${newTask}`, isCompleted: false }]);
  };

  const removeTask = (taskId) => {
    const copyTasks = [...tasks];
    const updatedTasks = copyTasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  function toggleCompleteTask(taskId) {
    const copyTasks = [...tasks];
    const currentTask = tasks.find((task) => task.id === taskId);
    currentTask.isCompleted = !currentTask.isCompleted;
    const currentTaskIndex = tasks.findIndex((task) => task.id === taskId);
    copyTasks[currentTaskIndex] = currentTask;
    setTasks(copyTasks);
  }

  return [tasks, addTask, removeTask, toggleCompleteTask];
}

export default useTasks;
