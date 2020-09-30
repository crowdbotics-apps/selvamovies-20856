import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignUp11117123Reducer from '../features/SignUp11117123/redux/reducers'
import CalendarView3117121Reducer from '../features/CalendarView3117121/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignUp11117123: SignUp11117123Reducer,
CalendarView3117121: CalendarView3117121Reducer,

});