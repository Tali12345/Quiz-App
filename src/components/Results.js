import React from 'react';
import Submit from './Submit';
import Reset from './Reset';
import { useSelector } from "react-redux";
import ConfettiExplosion from 'react-confetti-explosion';

function Results() {

  const submitted = useSelector((state) => state.quiz.value.submitted);
  const wrong_answers = useSelector((state) => state.quiz.value.wrong_answers);

  return (
    <div className="center">
        {submitted===0 &&<div><br/><br/><Submit></Submit><br/><br/><br/></div>}
        {submitted===1 && (Object.keys(wrong_answers).length===0 ? 
        <div className="alert alert-success" role="alert">
          <ConfettiExplosion></ConfettiExplosion>
          <h1>Congratulations! 🎉 </h1>
          <p>All your answers are correct</p>
          <Reset name="Reset"></Reset>
        </div> : 
        <div className="alert alert-light" role="alert">
        <p>Not quite right, {Object.keys(wrong_answers).length} answers are wrong </p>
        <h1>Try Again</h1>
        <Reset name="Try Again"></Reset>
        </div>)
        }
    </div>
  )
}

export default Results