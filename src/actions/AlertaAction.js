import { SHOW_ALERT, HIDE_ALERT } from "../types";

//MUESTRA UNA ALERTA
export function showAlert(alert) {

  return (dispatch) => {
    dispatch(showAlertError(alert))
  }
}

const showAlertError = alert => ({
  type: SHOW_ALERT,
  payload: alert
});

//OCULTAR ALERTA
export function hideAlert() {

  return (dispatch) => {
    dispatch(hideAlertError())
  }
}

const hideAlertError = () =>({
  type: HIDE_ALERT,
})
