import React from 'react';

class App extends React.Component {
	state = {
		section:{}
	}
	addValue = () => {
		const section = {...this.state.section};
		section[`x${Date.now()}`] = new Boolean;
		this.setState({ section })
		console.log(this.state)
	}
	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Text"/>
					<select name="" id="">
					<option value="">text</option>
					<option value="">boolean</option>
					</select>
				</form>
			</div>
			)
	}
}

export default App;