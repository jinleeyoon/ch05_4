import type * as T from './types'

export const addCard = (payload:T.Card):T.AddCardAction => ({
  type:'@cardEntities/add',
  payload
})
export const removeCard = (payload:string):T.RemoveCardAction => ({
  type:'@cardEntities/remove',
  payload
})