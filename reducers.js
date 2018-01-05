import { combineReducers } from 'redux';
import * as actionTypes from '../actions';

export const adsResults = (state = [], action) => {
  switch (action.type) {
    case actionTypes.GET_ADS:
      return [
        ...state,
        action.payload
      ]

    case actionTypes.ADD_ADS:
      return [
        ...state,
        action.payload.id
      ]

    case actionTypes.DEL_ADS:
      let newData = state.slice()
      return newData.filter(item => item !== action.payload.id)

    default:
      return state
  }
}

export const adsEntities = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.GET_ADS:
      return Object.assign(state, action.payload)

    case actionTypes.ADD_ADS:
      return Object.assign(state, {
        [action.payload.id]: action.payload
      })

    case actionTypes.UPDATE_ADS:
      // Why? 使用Object.assign()redu中的数据该表，但是界面不渲染
      // return Object.assign(state, {
      //   [action.payload.id]: action.payload
      // })
      return {
        ...state,
        [action.payload.id]: action.payload
      }

    default:
      return state
  }
}

const result = combineReducers({
  ads: adsResults,
})

const entities = combineReducers({
  ads: adsEntities,
})

export default combineReducers({
  result,
  entities,
})

export const combineData = (result, entities) => (result.map(item => entities[item]))
