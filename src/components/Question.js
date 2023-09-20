import React from 'react';
import questions from './questions.json';
import AnswerButton from './AnswerButton';

function Question(props) {

  return (
    <div class="div_question">
        <table class="table table-hover table-sm">
            <thead>
                <tr class="table-primary">
                    <th colspan="2">{questions[props.number_question].question}</th>
                </tr>
            </thead>
            <tbody>
            {Object.entries(questions[props.number_question].answers).map((item, index) => {
                return (
                    <tr>
                        <td class="button_column">
                            <AnswerButton number_answer={index+1}></AnswerButton>
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