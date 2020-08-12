import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// Component
// State
// Lifecycle
// UI

class App extends React.Component {
	render () {
		return (
			<div>
				Hello World
			</div>
		)
	}
}

ReactDOM.render(
	<App />, // React Element
	document.getElementByUD('app') //Where to render to the element to

)