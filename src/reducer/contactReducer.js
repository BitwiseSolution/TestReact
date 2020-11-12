import * as actionTypes from "../actions/actionTypes";

export default (
  state = [
    {
      firstName: "",
      lastName: "",
      dropDown: "",
      summary: "",
      objectives: "",
      problem: "",
      vision: "",
      documents: "",
      personName: [],
      projectedImpact: 0,
      estimatedBudget: 0,
      projectedNvp: 0,
      projectsImpact: 0,
      projectSpend: 0,
      slider1: 0,
      slider2: 40,
      slider2: 70,
      age: 0,
      age1: 0,
      age2: 0,
      age3: 0,
      name:"",
    }
  ],
  action
) => {
  const newState = [...state];
  console.log("newState", newState);
  console.log("action.type", action.type);
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      // console.log("contact",action.contact)
      return [...state, Object.assign({}, action)];
    case actionTypes.EDIT_FORM:
      console.log("action edit reeducer", action.editData);

      newState[0].firstName = action.editData.firstName || state[0].firstName;
      newState[0].lastName = action.editData.lastName || state[0].lastName;
      newState[0].dropDown = action.editData.dropDown || state[0].dropDown;
      newState[0].summary = action.editData.summary || state[0].summary;
      newState[0].objectives =
        action.editData.objectives || state[0].objectives;
      newState[0].problem = action.editData.problem || state[0].problem;
      newState[0].vision = action.editData.vision || state[0].vision;
      newState[0].documents = action.editData.documents || state[0].documents;
      newState[0].personName =
        action.editData.personName || state[0].personName;

      newState[0].projectedImpact =
        action.editData.projectedImpact || state[0].projectedImpact;

      newState[0].estimatedBudget =
        action.editData.estimatedBudget || state[0].estimatedBudget;

      newState[0].ProjectedNvp =
        action.editData.ProjectedNvp || state[0].ProjectedNvp;

      newState[0].projectsImpact =
        action.editData.projectsImpact || state[0].projectsImpact;

      newState[0].projectSpend =
        action.editData.projectSpend || state[0].projectSpend;

      newState[0].slider1 = action.editData.slider1 || state[0].slider1;

      newState[0].slider2 = action.editData.slider2 || state[0].slider2;

      newState[0].slider3 = action.editData.slider3 || state[0].slider3;

      newState[0].age = action.editData.age || state[0].age;

      newState[0].age1 = action.editData.age1 || state[0].age1;

      newState[0].age2 = action.editData.age2 || state[0].age2;

      newState[0].age3 = action.editData.age3 || state[0].age3;

      newState[0].name = action.editData.name || state[0].name;

      console.log("newState", newState);
      return newState;

    //   console.log("contacts dataaaa",state)
    // return state.map((post)=>post.firstName === action.firstName ? {...post,editing:!post.editing}:post)

    case actionTypes.REMOVE_CONTACT:
      console.log("Idddddd", action.id);
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};

// case 'EDIT_POST':
//   return state.map((post)=>post.id === action.id ? {...post,editing:!post.editing}:post)
