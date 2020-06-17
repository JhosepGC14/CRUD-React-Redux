import { SHOW_ALERT, HIDE_ALERT } from "../types";

//cada reducer tiene su propio state
const initalState = {
  alert: null,
}

export default function (state = initalState, action) {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        alert: action.payload,
      }
    case HIDE_ALERT:
      return {
        ...state,
        alert: null
      }
    default:
      return state;
  }
}