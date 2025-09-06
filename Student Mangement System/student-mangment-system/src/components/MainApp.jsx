import { useEffect, useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Styles from "./styles/dashboard.module.css"
export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [search, setSearch] = useState("");

  // Fetch students
  const fetchStudents = async () => {
    const snapshot = await getDocs(collection(db, "students"));
    setStudents(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  // Add student
  const addStudent = async () => {
    if (!name || !rollNo) {
      alert("Please fill all fields");
      return;
    }
    await addDoc(collection(db, "students"), { name, rollNo });
    setName("");
    setRollNo("");
    fetchStudents();
  };

  // Delete student
  const deleteStudent = async (id) => {
    await deleteDoc(doc(db, "students", id));
    fetchStudents();
  };

  // On page load
  useEffect(() => {
    fetchStudents();
  }, []);

  // Filter students
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={Styles.container}>
      <h1 className={Styles.heading}>📚 Student Management Dashboard</h1>

      {/* Add Student Form */}
      <div className={Styles.formContainer}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={Styles.input}
        />
        <input
          type="text"
          placeholder="Enter Roll No"
          value={rollNo}
          onChange={(e) => setRollNo(e.target.value)}
          className={Styles.input}
        />
        <button className={Styles.addBtn} onClick={addStudent}>
          ➕ Add Student
        </button>
      </div>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 Search Student"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={Styles.searchInput}
      />

      {/* Students Table */}
      <div className={Styles.tableContainer}>
        <table className={Styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                  <td>
                    <button
                      className={Styles.deleteBtn}
                      onClick={() => deleteStudent(student.id)}
                    >
                      🗑 Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className={Styles.noData}>
                  No students found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
