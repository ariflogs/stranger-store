import {chartTypes} from './chartTypes'

export const chartVisibilityAction = () => ({
  type: chartTypes.TOGGLE_CHART_VISIBILITY
})

export const addChartItemAction = item => ({
  type: chartTypes.ADD_ITEM,
  payload: item
})

export const removeChartItemAction = item => ({
  type: chartTypes.REMOVE_ITEM,
  payload: item
})

export const removeAllChartItemAction = item => ({
  type: chartTypes.REMOVE_ALL_ITEM,
  payload: item
})