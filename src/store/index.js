import { createStore } from "redux";

const initialState = {
  resume: {
    generalInformation: {},
    personalInformation: {},
    experience: {},
    education: {},
    volunteer: {},
    militaryService: {},
    certificate: {},
    award: {},
    projects: {},
    publication: {},
    language: {},
    skills: {},
    hobbies: {},
  },
};
const resumeDataReducer = (state = initialState, action) => {
  return {
    ...state,
    resume: {
      ...state.resume,
      [action.type]: { ...action.amount },
    },
  };
};
const store = createStore(resumeDataReducer);

export default store;
