import SkiDayList from '../ui/SkiDayList'
import React from 'react'
import {connect} from 'react-redux'
import {removeDay} from '../../actions'

const mapStateToProps = (state, props) => {
    return {
        days: state.allSkiDays,
        filter: props.params.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onRemoveDay: (date) => {
            dispatch(removeDay(date))
        }
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(SkiDayList)

export default container


// const sample = [
//     {
//     "resort": "Stowe",
//     "date": "2017-1-28",
//     "powder": false,
//     "backcountry": false
//   },
//   {
//     "resort": "Tuckerman's Ravine",
//     "date": "2017-1-31",
//     "powder": false,
//     "backcountry": true
//   },
//   {
//     "resort": "Mad River Glen",
//     "date": "2017-2-12",
//     "powder": true,
//     "backcountry": false
//   }
// ]

// export default (props) =>
//     <SkiDayList days={sample}
//                 filter={props.params.filter}
//                 onRemoveDay={date => console.log('remove day on', date)} />
