import React from 'react';

class App extends React.Component {
	statusRef = React.createRef();
	state = {
		section:{}
	}
	checkValue = (e) => {
		e.preventDefault();
		const valeur = this.statusRef.current.value;
		console.log(valeur);
	}
	addValue = () => {
		const section = {...this.state.section};
		section[`x${Date.now()}`] = new Boolean;
		this.setState({ section });
	}
	render() {
		return (
			<div>
				<form onSubmit={this.checkValue}>
					<input type="text" placeholder="Text"/>
					<select name="valeur" ref={this.statusRef}>
					<option value="text">text</option>
					<option value="boolean">boolean</option>
					</select>
					<button type="submit"> click me</button>
				</form>
			</div>
			)
	}
}

export default App;