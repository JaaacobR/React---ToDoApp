import React, { useState } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

import "./App.css";

const App = () => {
  let counter = 3;
  const [tasks, setTasks] = useState([
    {
      id: 0,
      text: "do sth",
      date: "2021-11-15",
      important: true,
      active: true,
      finishDate: null,
    },
    {
      id: 1,
      text: "do sth 2",
      date: "2022-02-12",
      important: false,
      active: true,
      finishDate: null,
    },
    {
      id: 2,
      text: "do sth 3",
      date: "2022-12-12",
      important: false,
      active: true,
      finishDate: null,
    },
  ]);

  const handleTaskDelete = (id) => {
    console.log(`item ${id} usuniety`);

    let tasksCopy = [...tasks];
    tasksCopy = tasks.filter((item) => item.id !== id);
    setTasks(tasksCopy);
  };

  const handleTaskChangeStatus = (id) => {
    console.log(`item ${id} zmieniony`);
    const tasksCopy = Array.from(tasks);
    tasksCopy.forEach((item) => {
      if (item.id === id) {
        item.active = false;
        item.finishDate = new Date().getTime();
      }
    });

    setTasks(tasks);
  };

  const add = (text, important, date) => {
    const task = {
      id: counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };
    counter++;

    setTasks([...tasks, task]);
    return true;
  };

  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <AddTask add={add} />
      <hr />
      <TaskList
        tasks={tasks}
        delete={handleTaskDelete}
        change={handleTaskChangeStatus}
      />
    </div>
  );
};

export default App;
