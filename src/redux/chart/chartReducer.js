import { chartTypes } from "./chartTypes";
import { addItemToChart, removeItemFromChart } from "./chartUtils";

const defaultState = {
  show: false,
  items: []
};

const chartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case chartTypes.TOGGLE_CHART_VISIBILITY:
      return {
        ...state,
        show: !state.show
      };

    case chartTypes.ADD_ITEM:
      return {
        ...state,
        items: addItemToChart(state.items, action.payload)
      };

    case chartTypes.REMOVE_ITEM:
      return {
        ...state,
        items: removeItemFromChart(state.items, action.payload)
      };

    case chartTypes.REMOVE_ALL_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id)
      };
  
    default:
      return state;
  }
};

export default chartReducer;
