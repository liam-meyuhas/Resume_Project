import { createStore } from "redux";
import { ACTIONS } from "./resumeActionTypes";

const initialState = {
  resume: {
    generalInformation: [],
    personalInformation: [],
    experience: [],
    education: [],
    volunteer: [],
    militaryService: [],
    certificate: [],
    award: [],
    projects: [],
    publication: [],
    language: [],
    skills: [],
    hobbies: [],
  },
};

const resumeDataReducer = (state = initialState, action) => {
  const { data, formId, formNumber } = action.payload || {};

  switch (action.type) {
    case ACTIONS.ADD:
      return {
        ...state,
        resume: {
          ...state.resume,
          [formId]:
            state.resume[formId].length > 0
              ? [
                  ...state.resume[formId],
                  { id: state.resume[formId].length + 1 },
                ]
              : [{ id: 1 }],
        },
      };

    case ACTIONS.UPDATE:
      return {
        ...state,
        resume: {
          ...state.resume,
          [formId]: state.resume[formId].map((form) =>
            form.id === formNumber ? { ...form, resumeData: { ...data } } : form
          ),
        },
      };

    case ACTIONS.REMOVE:
      let resumeData = [...state.resume[formId]];
      let updateResumeData = resumeData.filter(
        (item) => item.id !== formNumber
      );
      return {
        ...state,
        resume: {
          ...state.resume,
          [formId]: updateResumeData,
        },
      };

    default:
      return state;
  }
};
const store = createStore(resumeDataReducer);

export default store;
