import { combineReducers } from 'redux';
import reducerIdeas from './reducer-ideas';
import reducerActiveIdea from './reducer-active-idea';
import {reducer as formReducer } from 'redux-form';


export default combineReducers({
	ideas: reducerIdeas,
	activeIdea: reducerActiveIdea,
	form: formReducer
});