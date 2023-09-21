import React from 'react';
import { useDispatch } from "react-redux";
import { checkAnswers } from "../redux/features/quizSlice";
import '../App.css';

function Submit() {

    const dispatch = useDispatch();

    function handleClickSubmit() {
      dispatch(checkAnswers());
    }

    return (
        <div className="submit">
          <button type="button" className="btn btn-success" onClick={handleClickSubmit}>Submit</button>
        </div>
    )
}

export default Submit;