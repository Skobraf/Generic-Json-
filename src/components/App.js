import React from 'react';
import AddObjectForm from './AddObjectForm';

class App extends React.Component {
	state = {
		obj:{}
	}
	addRow = () => {
		const row = {...this.state.obj};
		row[`json${Date.now()}`] = 'hello';
		this.setState({obj: row});
		console.log(this.state.obj);
		}
	addJson = (key, index) => {
		const obj = {...this.state.obj};
		const json = obj[index];
		console.log(json,key);		
	}
	render() {
		return (
			<div>
				<ul>
					{
						Object.keys(this.state.obj).map(key => (
							<AddObjectForm 
							key={key}
							index={key}
							addJson={this.addJson}
							jsonIndex={this.state.obj[key]}
							 />
							)
					)}
				</ul>
				 <button onClick={this.addRow}>Add new</button>
			</div>
			)
	}
}

export default App;