import { useState } from "react";
import TextFeild from "./TextFeild";
import Button from "./Button";

import layout from "./styles/layout.module.css";
import inputStyles from "./styles/input.module.css";
import btn from "./styles/button.module.css";
import list from "./styles/list.module.css";
import item from "./styles/item.module.css";

const TodolistChat = () => {
  const [todoValue, SettodoValue] = useState("");
  const [todos, Settodos] = useState([]);
  const [editIndexNumber, SetEditIndexNumer] = useState(null);
  const [editVaule, SetEditVaule] = useState("");

  const addtodo = () => {
    if (todoValue.trim().length < 3) {
      alert("Invalid Value");
      return;
    }
    const next = [...todos, todoValue.trim()];
    Settodos(next);
    SettodoValue("");
  };

  const editHandler = (indexNumber) => {
    SetEditIndexNumer(indexNumber);
    SetEditVaule(todos[indexNumber] ?? "");
  };

  const saveHandler = (indexNumber) => {
    const copy = [...todos];
    copy.splice(indexNumber, 1, editVaule);
    Settodos(copy);
    SetEditIndexNumer(null);
    SetEditVaule("");
  };

  const cancelEdit = () => {
    SetEditIndexNumer(null);
    SetEditVaule("");
  };

  const deleteAll = () => {
    Settodos([]);
  };

  const deleteTodos = (indexNumber) => {
    const copy = [...todos];
    copy.splice(indexNumber, 1);
    Settodos(copy);
  };

  return (
    <div className={layout.container}>
      <div className={layout.card}>
        <div className={layout.header}>
          <h1 className={layout.title}>Todo List</h1>
          <div className={layout.actions}>
            {/* Pass className to your Button/TextFeild components if they support it */}
            <button className={`${btn.btn} ${btn.primary}`} onClick={addtodo}>
              Add Todo
            </button>
            <button className={`${btn.btn} ${btn.danger} ${btn.wiggle}`} onClick={deleteAll}>
              Delete All
            </button>
          </div>
        </div>

        <div className={layout.actions}>
          {/* If your TextFeild component supports className, pass inputStyles.input */}
          <div className={inputStyles.inputWrap}>
            <input
              className={inputStyles.input}
              placeholder="Enter your Todos..."
              onChange={(e) => SettodoValue(e.target.value)}
              value={todoValue}
            />
          </div>
        </div>

        <ul className={list.list}>
          {todos.length === 0 && <div className={list.empty}>Currently no todos — add one! ✨</div>}

          {todos.map((value, index) => {
            const isEditing = editIndexNumber === index;
            return (
              <li
                key={index}
                className={`${item.item} ${isEditing ? item.editing : ""}`}
              >
                {isEditing ? (
                  <div style={{ display: "contents" }}>
                    <input
                      className={item.editInput}
                      placeholder="Please enter edit value"
                      onChange={(e) => SetEditVaule(e.target.value)}
                      value={editVaule}
                    />
                    <div className={item.rowActions}>
                      <button className={item.saveBtn} onClick={() => saveHandler(index)}>
                        Save
                      </button>
                      <button className={item.cancelBtn} onClick={cancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className={item.text}>{value}</span>
                    <div className={item.rowActions}>
                      <button className={item.editBtn} onClick={() => editHandler(index)}>
                        Edit
                      </button>
                      <button className={item.deleteBtn} onClick={() => deleteTodos(index)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <div className={layout.footerHint}>
          Tip: Double‑check spelling before saving — small wins add up! 💪
        </div>
      </div>
    </div>
  );
};

export default TodolistChat;
