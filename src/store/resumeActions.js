import { ADD, UPDATE, REMOVE } from "./resumeActionTypes.js";

export const addResumeItem = (formId) => {
  return {
    type: ADD,
    payload: { formId },
  };
};

export const updateResumeItem = (formId, formNumber, data) => {
  return {
    type: UPDATE,
    payload: { data, formId, formNumber },
  };
};

export const removeResumeItem = (formId, formNumber) => {
  return {
    type: REMOVE,
    payload: { formId, formNumber },
  };
};
