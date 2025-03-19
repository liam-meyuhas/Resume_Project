import { createStore } from "redux";

// const initialState = {
//   resume: {
//     generalInformation: {},
//     personalInformation: {},
//     experience: {},
//     education: {},
//     volunteer: {},
//     militaryService: {},
//     certificate: {},
//     award: {},
//     projects: {},
//     publication: {},
//     language: {},
//     skills: {},
//     hobbies: {},
//   },
// };

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
  // const { formId } = action.payload || {};

  if (action.type === "ADD") {
    return {
      ...state,
      resume: {
        ...state.resume,
        [formId]:
          state.resume[formId] && state.resume[formId].length > 0
            ? [...state.resume[formId], { id: state.resume[formId].length + 1 }]
            : [{ id: 1 }],
      },
    };
  }
  if (action.type === "UPDATE") {
    return {
      ...state,
      resume: {
        ...state.resume,
        [formId]: state.resume[formId].map((form) =>
          form.id === formNumber ? { ...form, resumeData: { ...data } } : form
        ),
      },
    };
  }
  // if (action.type === "REMOVE") {
  //   let resumeData = [...state.resume[formId]];
  //   let updateResumeData = resumeData.filter((item) => item.id !== formNumber);
  //   return {
  //     ...state,
  //     resume: {
  //       ...state.resume,
  //       [formId]: updateResumeData,
  //     },
  //   };
  // }
  return {
    ...state,
    resume: {
      ...state.resume,
      [action.type]: { ...action.payload },
    },
  };
};
const store = createStore(resumeDataReducer);

export default store;
