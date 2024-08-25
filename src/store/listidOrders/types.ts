import { UUID } from "../commonTypes"
import { Action } from "redux"
export * from '../commonTypes'

export type State = UUID[]
export type SetListidOrders = Action<'@lisidOrders/set'>& {
  payload:State
}
export type AddListidToOrders = Action<'@lisidOrders/add'>& {
  payload:UUID
}
export type RemoveListidFromOrders = Action<'@lisidOrders/remove'>& {
  payload:UUID
}
export type Actions = SetListidOrders|AddListidToOrders|RemoveListidFromOrders