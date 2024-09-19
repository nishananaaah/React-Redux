import { createStore } from 'redux'
import CakeReducer from '../Cakes/CakeReducer'

const Store = createStore(CakeReducer)

export default Store
