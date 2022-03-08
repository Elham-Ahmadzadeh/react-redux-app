import CounterReducer from "./Counter";
import IsLoggedReducer from "./IsLogged";
import { combineReducers } from "redux";



const allReducers = combineReducers ({
    myCount: CounterReducer,
    loggedIn: IsLoggedReducer
})
export default allReducers