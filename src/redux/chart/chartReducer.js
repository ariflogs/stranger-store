import {chartTypes} from './chartTypes'
import {addItemToChart} from './chartUtils'

const defaultState = {
  show: false,
  items: [],
}

const chartReducer = (state = defaultState, action) => {
  switch(action.type) {
    case chartTypes.TOGGLE_CHART_VISIBILITY:
      return {
        ...state,
        show: !state.show
      };

    case chartTypes.ADD_ITEM: 
      return {
        ...state,
        items: addItemToChart(state.items, action.payload)
      }
    default:
      return state
  }
}

export default chartReducer