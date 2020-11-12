import * as actionTypes from "../actions/actionTypes";

export default (
    state = {
        stepperValue: 0
    },
    action
) => {
    const newState = {...state };
    console.log("action.type", action.type);

    switch (action.type) {


        case actionTypes.Increment_Stepper:
            newState = state.stepperValue + 1;
            // newState.stepperValue = newState.stepperValue + 1;
            return newState

        case actionTypes.Decrement_Stepper:
            //  newState = state.stepperValue - 1;
            newState.stepperValue--;
            return newState

        case 'setvalue':
            newState.stepperValue = action.setStepperValue


        default:
            return state;
    }

};