import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import NewSpot from './pages/NewSpot'

export default function Routes() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Login} />
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/new" component={NewSpot} />
			</Switch>
		</Router>
	)
}