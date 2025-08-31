import { useEffect, useState } from 'react';
import './App.css';

function App() {
const [questions,setquestions] = useState([])
const [currentIndex,setcurrentIndex] = useState(0)
const [score,setscore] = ('')

useEffect(function(){
getquestionFromapi()
},[])

function getquestionFromapi(){
  fetch('https://the-trivia-api.com/v2/questions')
  .then((res => res.json() ))
  .then((res => {
    res.map(function (item){
      item.options = [...item.incorrectAnswers,item.correctAnswer]
      shuffle(item.options)   
    })
      setquestions(res)
  }))
}

if(!questions.length){
  return
  <div><h1>loading.....</h1></div>
}
function next(){
  setcurrentIndex(currentIndex + 1)}

function restart(){
  setcurrentIndex(0)
}
function updatetext(e)
{
const value = e.target.value
console.log(value);
}
let quizended = currentIndex ===  questions.length
const currentQuestion = questions[currentIndex]

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
  return (
    <div className="App">
      <header className="App-header">
        
        {!quizended ?
        <div className='questions'>
        <h2>Q{currentIndex + 1} {questions[currentIndex].question.text}</h2>
        {currentQuestion.options.map(function (item){
          return (
            <div><input onChange={updatetext}  name='q' type='radio' value={item} />
            {item}
            </div>
          )
        })}
      <button onClick={next}>Next</button>
</div>
:
<div className='Results'>
  <h2>Result</h2>
  <h3>80%</h3>
  <button onClick={restart}>Restart</button>
</div>}
      </header>
    </div>
  );
}

export default App;
