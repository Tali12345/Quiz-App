import React from 'react';
import questions from '../q&a/questions.json';
import AnswerButton from './AnswerButton';
import { useSelector } from "react-redux";

function Question(props) {

    const submitted = useSelector((state) => state.quiz.value.submitted);
    const wrong_answers = useSelector((state) => state.quiz.value.wrong_answers);
    const correct_answers = useSelector((state) => state.quiz.value.correct_answers);

    function classNameGreenOrRed(index_answer) {
        if (submitted===1) {
            if (props.index_question in wrong_answers && wrong_answers[props.index_question]===index_answer) {
                return "table-danger";
            }
            if (props.index_question in correct_answers && correct_answers[props.index_question]===index_answer) {
                return "table-success";
            }
        } else {
            return "";
        }
    }

  return (
    <div className="div_question">
        <table className="table table-hover table-sm">
            <thead>
                <tr className="table-primary">
                    <th colSpan="2">{questions[props.index_question].question}</th>
                </tr>
            </thead>
            <tbody>
            {Object.entries(questions[props.index_question].answers).map((item, index) => {
                return (
                    <tr key={props.index_question+","+index}>
                        <td className="button_column">
                            <AnswerButton index_answer={index} index_question={props.index_question}></AnswerButton>
                        </td>
                        <td className={classNameGreenOrRed(index)} >{item[1]}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    </div>
  )
}

export default Question