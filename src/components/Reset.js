import React from 'react';
import { useDispatch } from "react-redux";
import { reset } from "../redux/features/quizSlice";


export function Reset(props) {

  const dispatch = useDispatch();

  function handleClickReset() {
    dispatch(reset());
  }

  return (

    <button type="button" className="btn btn-light" onClick={handleClickReset}>{props.name}</button>
  )
}

export default Reset;