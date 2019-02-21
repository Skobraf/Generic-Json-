import React from 'react';
import AddObjectForm from './AddObjectForm';

class App extends React.Component {
	state = {
		obj:{}
	}
	addRow = () => {
		const row = {...this.state.obj};
		row[`json${Date.now()}`] = {};
		this.setState({obj: row});
		}
	addJson = (key, index) => {
		const obj = {...this.state.obj};
		const name = key["textRef"];
		const value = key["valueRef"];
		const status = key["statusRef"];
		const json = obj[index];
			switch(status) {
	  		case "boolean":
				json[name] = new Boolean();
	    	break;
	    	case "text":
	    		json[name] = value;
	    	break;
	    	case "number":
	    		json[name] = Number(value);
	    	break;
	    	case "date":
	    		json[name] = new Date();
	    	break;
	    	case "structure":
	    		json[name] = {}
	    	break;
	    	case "array":
	    		json[name] = []
	    	break;
	 		 default:
		}
		this.setState({ obj })
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