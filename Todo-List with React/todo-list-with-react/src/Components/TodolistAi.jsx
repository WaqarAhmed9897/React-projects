import { useState } from "react";
import styles from "./Todolist.module.css";

const TodolistAi = () => {
  const [todoValue, SettodoValue] = useState("");
  const [todos, Settodos] = useState([]);
  const [editIndexNumber, SetEditIndexNumer] = useState(null);
  const [editVaule, SetEditVaule] = useState("");

  const addtodo = () => {
    if (todoValue.trim().length < 3) {
      alert("Invalid Value");
      return;
    }
    Settodos([...todos, todoValue.trim()]);
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
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h1 className={styles.title}>Todo List</h1>
          <div className={styles.actions}>
            <button className={`${styles.btn} ${styles.primary}`} onClick={addtodo}>
              Add Todo
            </button>
            <button className={`${styles.btn} ${styles.danger} ${styles.wiggle}`} onClick={deleteAll}>
              Delete All
            </button>
          </div>
        </div>

        <div className={styles.actions}>
          <div className={styles.inputWrap}>
            <input
              className={styles.input}
              placeholder="Enter your Todos..."
              onChange={(e) => SettodoValue(e.target.value)}
              value={todoValue}
            />
          </div>
        </div>

        <ul className={styles.list}>
          {todos.length === 0 && <div className={styles.empty}>Currently no todos — add one! ✨</div>}

          {todos.map((value, index) => {
            const isEditing = editIndexNumber === index;
            return (
              <li key={index} className={`${styles.item} ${isEditing ? styles.editing : ""}`}>
                {isEditing ? (
                  <>
                    <input
                      className={styles.editInput}
                      placeholder="Please enter edit value"
                      onChange={(e) => SetEditVaule(e.target.value)}
                      value={editVaule}
                    />
                    <div className={styles.rowActions}>
                      <button className={`${styles.btn} ${styles.primary}`} onClick={() => saveHandler(index)}>
                        Save
                      </button>
                      <button className={`${styles.btn} ${styles.ghost}`} onClick={cancelEdit}>
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <span className={styles.text}>{value}</span>
                    <div className={styles.rowActions}>
                      <button className={`${styles.btn} ${styles.ghost}`} onClick={() => editHandler(index)}>
                        Edit
                      </button>
                      <button className={`${styles.btn} ${styles.danger}`} onClick={() => deleteTodos(index)}>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </li>
            );
          })}
        </ul>

        <div className={styles.footerHint}>
          Tip: Double-check spelling before saving — small wins add up! 💪
        </div>
      </div>
    </div>
  );
};

export default TodolistAi;
