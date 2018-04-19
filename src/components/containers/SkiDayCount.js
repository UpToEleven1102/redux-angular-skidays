import SkiDayCount from '../ui/SkiDayCount'
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProp = (state) => {
	return {
		total: state.allSkiDays.length,
		powder: state.allSkiDays.filter(day => day.powder).length,
		backcountry: state.allSkiDays.filter(day => day.backcountry).length
	}
}

const container = connect(mapStateToProp)(SkiDayCount)

export default container



