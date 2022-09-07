export const setEvents = (items) => ({type: 'SET_EVENT', payload: items})
export const addItemToEvents = (item) => ({type: 'ADD_TO_EVENTS', payload: item})
export const updateItemToAction = (items) => ({type: 'UPDATE_EVENT', payload: items})
export const deleteItemToAction = (id) => ({type: 'DELETE_EVENT', payload: id})