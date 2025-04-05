import { ACTIONS } from "./resumeActionTypes";

export const addResumeItem = (formId) => {
  return {
    type: ACTIONS.ADD,
    payload: { formId },
  };
};

export const updateResumeItem = (formId, formNumber, data) => {
  return {
    type: ACTIONS.UPDATE,
    payload: { data, formId, formNumber },
  };
};

export const removeResumeItem = (formId, formNumber) => {
  return {
    type: ACTIONS.REMOVE,
    payload: { formId, formNumber },
  };
};
