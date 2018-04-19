import C from './constants'
import fetch from 'isomorphic-fetch'

export const addDay = (resort, date, powder= false, backcountry = false) => {
    return {
        type: C.ADD_DAY,
        payload: {
            "resort": resort,
            "date": date,
            "powder": powder,
            "backcountry": backcountry
        }
    }
}

export const removeDay = (date) => {
    return {
        type: C.REMOVE_DAY,
        payload:  date
    }
}

export const setGoal = (goal) => {
    return {
        type: C.SET_GOAL,
        payload: goal
    }
}

export const addError = (error) => {
    return {
        type: C.ADD_ERROR,
        payload: error
    }
}

export const clearError = (index) => {
    return {
        type: C.CLEAR_ERROR,
        payload: index
    }
}

export const startFetching = () => {
    return {
        type: C.FETCH_RESORT_NAMES
    }
}

export const cancelFetching = () => {
    return {
        type: C.CANCEL_FETCHING
    }
}

export const changeSuggestions = suggestions => {
    return {
        type: C.CHANGE_SUGGESTIONS,
        payload: suggestions
    }
}

export const clearSuggestions = () => {
    return {
        type: C.CLEAR_SUGGESTIONS
    }
}

export const suggestResortNames = value => (dispatch, getState) => {
    dispatch(startFetching())

    fetch('http://localhost:8080/resorts/' + value)
        .then(response => response.json())
        .then(response => {
            dispatch(changeSuggestions(response))

            dispatch(cancelFetching())
        })
        .catch(error => {
            dispatch(addError(error.message))
        })
}



