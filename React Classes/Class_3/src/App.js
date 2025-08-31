import { useState } from "react";
import './App.css';
function App() {

  const [list, setlist] = useState([])
  const [inputval, setinputval] = useState()
  const [editMode, seteditMode] = useState(false)
  const [currentIndex,setcurrentIndex]= useState()

  function inputtext(e) {
    const value = e.target.value
    setinputval(value)
  }
  function Additem() {
    const copylist = [...list]
    copylist.push(inputval)
    setlist(copylist)
    setinputval('')
  }
  function deleteItem(index) {

    const copylist = [...list]
    copylist.splice(index, 1)
    setlist(copylist)
  }
  function EditItem(index) {
    const itemvalue = list[index]
    setinputval(itemvalue)
    seteditMode(true)
    setcurrentIndex(index)
    
  }
  function upDateitem() {
const copylist = [...list]
copylist[currentIndex] = inputval
setlist(copylist)
seteditMode(false)
setinputval('')
   }
   function deleteAllItem(){
    setlist([])
   }  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo Application</h1>
        <input value={inputval} onChange={inputtext} placeholder="Enter your Text" />
        {editMode
          ? <button onClick={upDateitem}>Update</button>
          :
          <button onClick={Additem}>Add</button>}
        <ul>
          {list.map(function (item, index) {
            return <li>{item}
              <button onClick={() => EditItem(index)}>Edit</button>
              <button onClick={() => deleteItem(index)}>Delete</button>
              <button onClick={deleteAllItem}>Delete All</button>

            </li>
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
