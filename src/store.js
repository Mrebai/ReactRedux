import {createStore , combineReducers , applyMiddleware} from "redux"
import { logger  } from "redux-logger"

import userReducer from "./reducers/userReducer"
import mathReducer from "./reducers/mathReducer"



export default createStore(combineReducers({userReducer : userReducer , mathReducer : mathReducer}), {} , applyMiddleware(logger ));


