import './App.css';
import { useState } from 'react';
function App() {
  const [list, setlist] = useState([])
  const [inputupdate, setinputupdate] = useState()
  const [Editupdate, seteditupdate] = useState(false)
  const [currentIndex,setcurrentIndex]= useState()
  function textUpdate(event) {
    const value = event.target.value
    setinputupdate(value)
  }
  function Addtodo() {
    const copylist = [...list]
    copylist.push(inputupdate)
    setlist(copylist)
    setinputupdate(' ')

  }
  function deleteTodo(index) {
    const copylist = [...list]
    copylist.splice(index, 1)
    setlist(copylist)
  }
  function EditTodo(index) {
    const itemvalue = list[index]
    setinputupdate(itemvalue)
    seteditupdate(true)
  }
  function updateitem() {
    //PURPOSE
    // 1.Input ki Value List K USi Index Per Update Hojai
    //2.Update ka button Add me change hojai
    //3.input khali karna
    const copylist = [...list]
    copylist[currentIndex] = inputupdate
    setlist(copylist)
    seteditupdate(false)
    setinputupdate(' ')
  }
 // console.log(EditTodo);
  return (
    <div className="App">
      <div className='App-header'>
        <h2>Todo Application</h2>
        <input onChange={textUpdate} placeholder='Enter your Task' value={inputupdate} />
        {Editupdate ?
        <button onClick={Addtodo}>update</button>
        :
          <button onClick={updateitem}>Add</button>}
        <ol>
          {list.map(function (item, index) {
            return <li >{item}
              <button onClick={() => deleteTodo(index)}>Delete</button>
              <button onClick={() => EditTodo(index)}>Edit</button>

            </li>
          })}
        </ol>


      </div>
    </div>
  );
}

export default App;
