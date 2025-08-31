import { useEffect, useState } from 'react';
import './App.css' 
import FbpostComponent from './Post Components';
function App() {
const [postData,setpostData] = useState([])

useEffect(() => {
getapiData()
},[])

if(!postData.length){
  return <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifer.com%2Fen%2Fgifs%2Floading&psig=AOvVaw3Qml-LVx7ef8SskBzUmwWu&ust=1704479499175000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMie74WvxIMDFQAAAAAdAAAAABAS'/>
}

function getapiData(){
  fetch('https://dummyjson.com/products')
  .then((res) => res.json())
  .then((res) => setpostData(res.products))
}
console.log(postData)

  return (
    <div className="App">
      <div className="App-header">
      <FbpostComponent allpost={postData} />        
      </div>
    </div>
  );
}

export default App;
