import { useState, useEffect } from 'react';

let isFirstInit = true;

function useTasks() {
  const localStorageTasksKey = 'shaniTasks';

  const baseTasks = [
    { id: 1, title: 'Learn React', isCompleted: false },
    { id: 2, title: 'Learn Next.js', isCompleted: false },
  ];
  const [tasks, setTasks] = useState(null);

  function getTasksFromLocalStorage() {
    let result = baseTasks;
    if (typeof window !== 'undefined') {
      const localTasks = window.localStorage.getItem(localStorageTasksKey);
      if (localTasks) {
        result = JSON.parse(localTasks);
      }
    }
    return result;
  }

  useEffect(() => {
    const localTasks = getTasksFromLocalStorage();
    if (localTasks) {
      setTasks(localTasks);
    }
    isFirstInit = false;
    return () => {
      isFirstInit = true;
    };
  }, []);

  function setTasksToLocalStorage() {
    if (typeof window !== 'undefined' && !isFirstInit && tasks) {
      window.localStorage.setItem(localStorageTasksKey, JSON.stringify(tasks));
    }
  }

  useEffect(() => {
    if (!isFirstInit) {
      setTasksToLocalStorage();
    }
  }, [tasks]);

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
