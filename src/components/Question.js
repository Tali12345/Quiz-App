import React from 'react';
import questions from '../q&a/questions.json';
import AnswerButton from './AnswerButton';

function Question(props) {

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
                        <td>{item[1]}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    </div>
  )
}

export default Question