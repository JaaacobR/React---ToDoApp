import React, { useState } from "react";
import "./AddTask.css";

const AddTask = (props) => {
  let minDate = new Date().toISOString().slice(0, 10);
  let maxDate = minDate.slice(0, 4) * 1 + 1;
  maxDate = maxDate + "-12-31";

  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [date, setDate] = useState(minDate);

  const handleDate = (e) => {
    setDate(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCheckbox = (e) => {
    setChecked(e.target.checked);
  };

  const handleClick = () => {
    if (text.length > 2) {
      const add = props.add(text, checked, date);
      if (add) {
        setText("");
        setChecked(false);
        setDate(minDate);
      }
    } else {
      console.log("za krótko");
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="dodaj zadanie"
        value={text}
        onChange={handleText}
      />
      <input
        type="checkbox"
        checked={checked}
        id="important"
        onChange={handleCheckbox}
      />
      <label htmlFor="important">Priorytet</label>
      <br />
      <label htmlFor="date">Do kiedy zrobić</label>
      <input
        type="date"
        value={date}
        min={minDate}
        max={maxDate}
        onChange={handleDate}
      />
      <br />
      <button onClick={handleClick}>Dodaj</button>
    </div>
  );
};

export default AddTask;
