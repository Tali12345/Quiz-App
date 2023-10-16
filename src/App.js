import React from 'react';
import Question from './components/Question';
import Results from './components/Results';
import './App.css';
import questions from './q&a/questions.json';

function App() {

  return (
    <div>
      <div className="title">
        <div className="info-container">
          <h1> 📖  Quiz  💡 </h1>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0099ff" fillOpacity="1" d="M0,128L30,133.3C60,139,120,149,180,170.7C240,192,300,224,360,218.7C420,213,480,171,540,160C600,149,660,171,720,186.7C780,203,840,213,900,186.7C960,160,1020,96,1080,106.7C1140,117,1200,203,1260,229.3C1320,256,1380,224,1410,208L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
        </svg>
      </div>
      <div className="quiz-questions">
        {questions.map((item, index) => {
          return (
            <Question index_question={index} key={index}></Question>
          );
        })}
      <Results></Results>
      </div>
    </div>
  )
}

export default App
