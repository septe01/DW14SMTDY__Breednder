import { combineReducers, createStore, applyMiddleware } from "redux";

import { promise, logger } from "./middleware";

//reducers
import userR from "../_reducers/userR";
import speciesR from "../_reducers/speciesR";
import ageR from "../_reducers/ageR";
import petR from "../_reducers/petR";

const reducers = combineReducers({
  userR,
  speciesR,
  ageR,
  petR
});

const store = createStore(reducers, applyMiddleware(promise, logger));

export default store;
