import React from 'react';
import Question from './components/Question';
import Results from './components/Results';
import './App.css';
import questions from './q&a/questions.json';

function App() {

  return (
    <div>
      <h1>Quiz</h1>
      {questions.map((item, index) => {
        return (
          <Question index_question={index} key={index}></Question>
        );
      })}
      <Results></Results>
    </div>
  )
}

export default App
