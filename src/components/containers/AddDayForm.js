import AddDayForm from '../ui/AddDayForm'
import { withRouter } from 'react-router'
import React from 'react'
import {connect} from 'react-redux'
import {addDay, clearSuggestions, suggestResortNames} from '../../actions'

const mapStateToProps = (state, props) => {
    return {
        router: props.router,
        fetching: state.resortNames.fetching,
        suggestions: state.resortNames.suggestions
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewDay: (day) => {
            dispatch(addDay(day.resort, day.date, day.powder, day.backcountry))
        },
        onClear: () => {
            dispatch(clearSuggestions())
        },
        onChange: (value) => {
            dispatch(suggestResortNames(value))
        }
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(AddDayForm)

export default withRouter(container)
// export default withRouter(
//
//
//     (props) =>
//         <AddDayForm suggestions={[]}
//                 fetching={false}
//                 router={props.router}
//                 onNewDay={day => console.log('todo: add day', day)}
//                 onChange={value => console.log('todo: suggest', value)}
//                 onClear={() => console.log('todo: clear suggestions')} />
// )