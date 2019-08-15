export const ALL_FORESTS = 'ALL_FORESTS'

export function allForests(payload) {
  return {
    type: ALL_FORESTS,
    payload
  }
}

export const NEW_FOREST = 'NEW_FOREST'

export function newForest(payload){
  return{
    type: NEW_FOREST,
    payload
  }
}
