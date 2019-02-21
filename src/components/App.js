import React from 'react';
import AddObjectForm from './AddObjectForm';

class App extends React.Component {
	state = {
		json:{}
	}
	addJson = (key) => {
		const json = {...this.state.json};
		const name = key["textRef"];
		if(key["statusRef"] === "boolean") {
			json[name] = 'hello';
			this.setState({ json })
		}
		console.log(json);
	}
	render() {
		return (
			<div>
				<AddObjectForm 
				addJson={this.addJson}
				 />
			</div>
			)
	}
}

export default App;