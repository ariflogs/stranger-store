import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import {persistStore} from "redux-persist"

import rootReducer from "./rootReducer";

const middleware = [logger]; // so it can log multiple actions

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistor = persistStore(store) 

export {store, persistor};
