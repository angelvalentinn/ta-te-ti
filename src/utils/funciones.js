import { WINNER_COMBOS } from "./constantes"

export const verificarGanador = (tableroAVerificar) => {

    for (let combo of WINNER_COMBOS) {

      if (
        tableroAVerificar[combo[0]] &&
        tableroAVerificar[combo[0]] == tableroAVerificar[combo[1]] &&
        tableroAVerificar[combo[0]] == tableroAVerificar[combo[2]]

      ) return tableroAVerificar[combo[0]]

    }

    if (tableroAVerificar.every(item => item != null)) return false

}