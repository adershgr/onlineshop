import { legacy_createStore as createStore} from 'redux'
import reducers from "./reducers/index"
//We recommend using the configureStore method of the @reduxjs/toolkit package, which replaces createStore.

const store = createStore(reducers,
     {},
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.window.__REDUX_DEVTOOLS_EXTENSION__()
     )
export default store;