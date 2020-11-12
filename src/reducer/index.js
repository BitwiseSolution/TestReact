import { combineReducers } from 'redux';
import contacts from './contactReducer';
import data from './AddReducer';
import contactSteps from './CountSteps'

export default combineReducers({
    contacts: contacts,
    data: data,
    contactSteps: contactSteps,

});