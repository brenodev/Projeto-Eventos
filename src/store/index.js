import { createStore } from "redux";
import {usuarioReducer} from "./reducers"

const store = createStore(usuarioReducer);

export default store;