import { createContext, useContext, useReducer } from 'react'
import { storeInitialState } from './store.initialState'
import { storeReducer } from './store.reducer'

const StoreContext = createContext(storeInitialState)

export const StoreProvider = ({ children }) => {
  const [state, d] = useReducer(storeReducer, storeInitialState)
  const dispatch = (type, payload) => d({ type, payload })

  return (
    <StoreContext.Provider value={{ ...state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export const StoreConsumer = StoreContext.Consumer

export const useStore = () => useContext(StoreContext)
