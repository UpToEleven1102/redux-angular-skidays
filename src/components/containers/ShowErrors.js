import React from 'react'
import {connect} from 'react-redux'
import ShowErrors from '../ui/ShowErrors'
import {clearError} from '../../actions';

const mapStateToProps = (state) => {
	return {
		errors: state.errors
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClearError:(index) => dispatch(clearError(index))
	}
}

const container = connect(mapStateToProps, mapDispatchToProps)(ShowErrors)

export default container

// export default () =>
// 	<ShowErrors errors={['sample error']}
// 						  onClearError={index => console.log('todo: clear error at', index)} />
