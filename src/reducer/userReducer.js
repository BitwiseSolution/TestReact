

import * as actionTypes from '../actions/actionTypes';
const initialState = {
    users = [
    
        {
            "id":1,
            "firstName":"samiksha",
            "lastname":"rastogi"
    
        },{
            "id":2,
            "firstName":"sharvari",
            "lastname":"apte"
        },{
            "id":3,
            "firstName":"smriti",
            "lastname":"nigam"
        }
    
    
    ]
 };
 
export default (state = initialState, action) => {
  const newState = { ...state };
 
  switch (action.type){
      
    //   case actionTypes.Update_Data:
    //       console.log("action add reeducer",action.updateData)

    //       newState.dataToSummary = action.updateData;
    //       newState.dataPie = action.updateData;        
    //        console.log("newState",newState)
    //        return newState

    //        case actionTypes.Update_Data_OnmouseLeave:
    //           newState.dataToSummary = action.updateDataOnmouseLeave;
    //           newState.dataPie = action.updateDataOnmouseLeave;
    //           console.log("action add reeducer after leave",action.updateDataOnmouseLeave)

    //       return newState

         
      default:
            return newState;
    }
   };


