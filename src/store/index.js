import appReducers from './reducers'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

const messageLogger = store => next => action => {
    let result

    console.groupCollapsed(`dispatching action: `)
    console.log(`All ski days:`, store.getState().allSkiDays.length )

    result = next(action)

    const {allSkiDays, goal, resortNames, errors} = store.getState()
    console.log(`           after action: 
                    ski days:  ${allSkiDays.length}
                    goal: ${goal}
                    suggestions: ${JSON.stringify(resortNames.suggestions)}
                    errors: ${JSON.stringify(errors)}
    `)
    console.groupEnd()
    return result
}

export default (initialState = {}) => {
        return applyMiddleware(thunk, messageLogger)(createStore)(appReducers, initialState)
}