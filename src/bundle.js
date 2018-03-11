import React from 'react'
import ReactDOM from 'react-dom'

import Reboot from 'material-ui/Reboot';

import Keyword from './keyword'
import { AppLayout } from './common'


class App extends React.Component {
	constructor(p) {
		super(p)
	}
	render () {
		return <div>
				<Reboot />
				<AppLayout>
					<Keyword />
				</AppLayout>
			</div>
	}
}

ReactDOM.render(<App />, document.getElementById('app'));

