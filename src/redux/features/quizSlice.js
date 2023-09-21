import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    question_to_answer: {},
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
    reset: (state) => {
      return initialState;
    }
  },
});

// Action creators are generated for each case reducer function
export const { chooseAnswer, reset } = quizSlice.actions;