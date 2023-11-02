import React, { createContext, useContext, useReducer } from 'react';

// Define an initial state
const initialState = {
  filterFormDataType: [],
  filterFormDataStatus: [],
};

// Create a context
const AppStateContext = createContext(initialState);

// Define a reducer function to handle state updates
function appStateReducer(state, action) {
  switch (action.type) {
    case 'ADD_FILTERFORM_TYPE':
      return { ...state, filterFormDataType: [ ...state?.filterFormDataType, action.value ] };
    case 'REMOVE_FILTERFORM_TYPE':
      return { ...state, filterFormDataType: state?.filterFormDataType?.filter(text => text !== action.value) };
    case 'ADD_FILTERFORM_STATUS':
      return { ...state, filterFormDataStatus: [ ...state?.filterFormDataStatus, action.value ] };
    case 'REMOVE_FILTERFORM_STATUS':
      return { ...state, filterFormDataStatus: state?.filterFormDataStatus.filter(text => text !== action.value) };
    default:  
    return state;
  }
}

// Create a provider to wrap your entire application
function AppStateProvider({ children }) {
  const [state, dispatch] = useReducer(appStateReducer, initialState);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
}

// Create a custom hook to access the context
function useAppState() {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within an AppStateProvider");
  }
  return context;
}

export { AppStateProvider, appStateReducer, useAppState, AppStateContext };