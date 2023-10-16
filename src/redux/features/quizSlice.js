import { createSlice } from "@reduxjs/toolkit";
import answers from './answers.json';

const initialState = {
  value: {
    question_to_answer: {},
    wrong_answers: {},
    correct_answers: {},
    submitted: 0
  }
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    chooseAnswer: (state, action) => {
      return {
        ...state,
        value: {
          ...state.value,
          question_to_answer:  {
            ...state.value.question_to_answer,
            [action.payload[0]]: action.payload[1]
          } 
        }
      };
    },
    checkAnswers: (state) => {
        const temp_wrong_answers = {};
        const temp_correct_answers = {};
        for (const [key, value] of Object.entries(answers)) {
            if (state.value.question_to_answer[key]!==parseInt(value)) {
                temp_wrong_answers[key]=state.value.question_to_answer[key];
            } else {
                temp_correct_answers[key]=state.value.question_to_answer[key];
            }
        }
        console.log("temp_wrong_answers", temp_wrong_answers);
        return {
            ...state,
            value: {
              ...state.value,
              wrong_answers: temp_wrong_answers,
              correct_answers: temp_correct_answers,
              submitted: 1,
            }
        };
    },
    reset: (state) => {
        return initialState;
    },
}
});

// Action creators are generated for each case reducer function
export const { chooseAnswer, checkAnswers, reset } = quizSlice.actions;