import { useState } from "react"
import TextFeild from "./TextFeild"
import Button from "./Button";

const Todolist = () => {

    const [todoValue, SettodoValue] = useState('')
    const [todos, Settodos] = useState([])


    const addtodo = () => {
        if (todoValue.length < 3) {
            alert("Invaild Value")
            return
        }
        todos.push(todoValue)
        Settodos([...todos])
        SettodoValue("")
        console.log('add Todos');
    }

    // const editTodo = (indexNumber) => {
    //     console.log(indexNumber);
    //     console.log(todos[indexNumber]);
    //     const editValue = prompt('Enter edit Value', todos[indexNumber])
    //     todos.splice(indexNumber, 1, editValue)
    //     Settodos([...todos])


    // }
    const [editIndexNumber, SetEditIndexNumer] = useState(null)
    const [editVaule, SetEditVaule] = useState('')
    const editHandler = (indexNumber) => {
        console.log(indexNumber);
        SetEditIndexNumer(indexNumber)
    }
    const saveHandler = (indexNumber)=>{
        todos.splice(indexNumber,1,editVaule)
        Settodos(...[todos])
        SetEditIndexNumer(null)
    }
    const deleteAll = ()=>{
        Settodos([])
    }
    const deleteTodos = (indexNumber)=>{
    todos.splice(indexNumber,1)
    Settodos([...todos])
    }
    return (
        <>
            <h1>Todo List</h1>
            <TextFeild
                placeholder="Enter your Todos..."
                onChange={(e) => { SettodoValue(e.target.value) }}
                value={todoValue}
            />
            <Button title="Add Todo" OnClick={addtodo} />
            <Button title="Delete All" OnClick={deleteAll} />
            <div>
                <ul>
                    {todos.map((value, index) => {
                        console.log(index, value);

                        return editIndexNumber === index ? <div>
                            <TextFeild
                                placeholder={'Plz Enter Edit Value'}
                                onChange={(e) => { SetEditVaule(e.target.value) }}
                                value={editVaule} />
                                <Button title={'Save'} OnClick={()=>saveHandler(index)} />
                        </div> : (<>
                            <li key={index}>{value}</li>
                            <Button title={'Edit'} OnClick={() => editHandler(index)} />
                                <Button title={'Delete'} OnClick={() => deleteTodos(index)} />
                        </>
                        )

                    })}
                </ul>
            </div>

        </>
    )
}

export default Todolist
