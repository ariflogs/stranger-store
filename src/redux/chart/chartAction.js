import {chartTypes} from './chartTypes'

export const chartVisibilityAction = () => ({
  type: chartTypes.TOGGLE_CHART_VISIBILITY
})

export const addChartItemAction = item => ({
  type: chartTypes.ADD_ITEM,
  payload: item
})