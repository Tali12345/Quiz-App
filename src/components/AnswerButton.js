import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { chooseAnswer } from "../redux/features/quizSlice";

function AnswerButton(props) {

    const question_to_answer = useSelector((state) => state.quiz.value.question_to_answer);
    const chosen_answer =question_to_answer[props.index_question];
    console.log(chosen_answer);

    const dispatch = useDispatch();

    function handleClickAnswer(event) {
        dispatch(chooseAnswer([props.index_question, props.index_answer]));
    }

    return (
        <button type="button" className={chosen_answer===props.index_answer ? "btn btn-primary":"btn btn-outline-primary"} onClick={handleClickAnswer}></button>
    )
}

export default AnswerButton;