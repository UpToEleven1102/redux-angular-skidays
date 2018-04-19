import GoalProgress from '../ui/GoalProgress'
import React from 'react'
import {connect} from 'react-redux'
import {setGoal} from '../../actions'
import {goal} from "../../store/reducers";

const mapStateToProps = (state) => {
    return {
        current: state.allSkiDays.length,
        goal: state.goal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewGoal: (goal) => {
            dispatch(setGoal(goal))
        }
    }
}

const container = connect(mapStateToProps, mapDispatchToProps)(GoalProgress)

export default container

{/*<GoalProgress current={10} */
}
{/*goal={20}*/
}
{/*onNewGoal={goal => console.log('todo: change goal', goal)} />*/
}
