import { createStore } from "redux";

import { userReducer } from "./userReducer";
// Наше состояние хранится в сторе
// Каждый раз когда мы исползуем dispatch вызывается функция reducer
export const store = createStore(userReducer);
