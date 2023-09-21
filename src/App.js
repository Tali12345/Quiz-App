import React from 'react';
import Question from './components/Question';
import './App.css';
import questions from './components/questions.json';

function App() {

  return (
    <div>
      <h1>Quiz</h1>
      {questions.map((item, index) => {
        return (
          <Question index_question={index} key={index}></Question>
        );
      })}
    </div>
  )
}

export default App
