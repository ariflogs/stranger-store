export const addItemToChart = (chartItems, newItem) => {
  const existingItem = chartItems.find(chartItem => chartItem.id === newItem.id);

  if (existingItem) {
    return chartItems.map(chartItem =>
      chartItem.id === newItem.id
        ? {
            ...chartItem,
            quantity: chartItem.quantity + 1
          }
        : chartItem
    );
  }

  return [...chartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromChart = (chartItems, newItem) => {
  const existingItem = chartItems.find(chartItem => chartItem.id === newItem.id);

  if (existingItem) {
    return chartItems.map(chartItem =>
      chartItem.id === newItem.id && chartItem.quantity > 1
        ? {
            ...chartItem,
            quantity: chartItem.quantity - 1
          }
        : chartItem
    );
  }

  return [...chartItems, { ...newItem, quantity: 1 }];
};
