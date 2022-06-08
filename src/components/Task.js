import React from "react";

const Task = (props) => {
  const style = {
    color: "red",
  };
  const { text, date, id, active, important, finishDate } = props.tasks;

  if (active) {
    return (
      <p>
        <strong style={important ? style : null}>{text}</strong> - do{" "}
        <span>{date} </span>
        <button onClick={() => props.change(id)}>Zadanie zrobione</button>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();

    return (
      <p>
        <strong>{text}</strong>
        <em> (zrobić do {date}</em>
        <br />- potwierdzenie wykonania <span>{finish}</span>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    );
  }
};

export default Task;
