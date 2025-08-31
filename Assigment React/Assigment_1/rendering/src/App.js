import './App.css';


function App() {
  let text = 'Hello world'
  const obj ={ name1 :'Hello World Object'}
  const data = ['We', 'are', 'United']
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
  const complex = [{company: 'XYZ', jobs:['javaScipt,', 'React']},
  {company: 'ABC', jobs:['Angular JS,', 'Ionic']}] 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Expertizo University</h1>
        <h2>Student : Waqar Ahmed</h2>
        <h2>Assigment 1</h2>
       <p>{text}</p>
       <p>{obj.name1}</p>
       <ol>
        {data.map(function (item){
          return <li>{item}</li>
        })}
       </ol>
       <ul>
       {list.map(function (item){
          return <li>{item.name}</li>
        })}
       </ul>
       <table border = '2px'>
        <tr>
          <th>Company</th>
          <th>Jobs</th>
        </tr>
        {complex.map(function(item){
          return <tr>
           <td>{item.company}</td>
          <td>{item.jobs}</td>
          </tr>
         
        })}
       </table>
      </header>
    </div>
  );
}
export default App;
