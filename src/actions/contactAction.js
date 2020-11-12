import * as actionTypes from "./actionTypes";

export const createContact = contact => {
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
    contact: contact
  };
};

export const deleteContact = id => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    id: id
  };
};
export const addReducer = addReducer => {
  return {
    type: actionTypes.Add_Data,
    addReducer: addReducer
  };
};

export const updateData = updateData => {
  return {
    type: actionTypes.Update_Data,
    // updateData: updateData
    updateData: updateData
  };
};

export const updateDataOnmouseLeave = updateDataOnmouseLeave => {
  return {
    type: actionTypes.Update_Data_OnmouseLeave,
    // updateData: updateData
    updateDataOnmouseLeave: updateDataOnmouseLeave
  };
};

export const editData = editData => {
  return {
    type: actionTypes.EDIT_RECORDS,
    // updateData: updateData
    editData: editData
  };
};
export const setStepperValue = stepperValue => {
  return {
    type: actionTypes.Decrement_Stepper,
    stepperValue: stepperValue
  };
};
export const incrementStepper = () => {
  return {
    type: actionTypes.Increment_Stepper
  };
};

export const decrementStepper = () => {
  return {
    type: actionTypes.Decrement_Stepper
  };
};

export const addRecords = newRecord => {
  return {
    type: actionTypes.Add_Records,
    newRecord: newRecord
  };
};

export const editRecords = editRecords => {
  return {
    type: actionTypes.EDIT_RECORDS,
    // updateData: updateData
    editRecords: editRecords
  };
};

export const deleteRecords = deleteRecords => {
  return {
    type: actionTypes.EDIT_RECORDS,
    // updateData: updateData
    deleteRecords: deleteRecords
  };
};
