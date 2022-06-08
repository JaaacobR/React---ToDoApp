import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((item) => item.active);
  const done = props.tasks.filter((item) => !item.active);

  if (done.length > 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  console.log(done);
  const activeTasks = active.map((item) => (
    <Task
      key={item.id}
      tasks={item}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((item) => (
    <Task
      key={item.id}
      tasks={item}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? (
          activeTasks
        ) : (
          <p>brak zadań , ale jesteś szczęśliwym człowiekiem!</p>
        )}
      </div>

      <hr />
      <div className="done">
        <h2>Zadania zrobione ({done.length})</h2>
        {done.length > 5 && (
          <span style={{ fontSize: 10 }}>
            wyswietlonych jest jedynie 5 ostatnich elementów
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
