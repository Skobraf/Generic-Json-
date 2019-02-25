import React from 'react';
import AddObjectForm from './AddObjectForm';

class App extends React.Component {
	state = {
		obj:{
			state1:{
				id:0,
				type:[{
					id:1,
					type:[{
						id:2,
						type:"hello"
					}]
				}]
			},
			state2:{
				id:0,
				type:"hello"
			}
		}
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
				json[status] = new Boolean();
				json["name"] = name;		
	    	break;
	    	case "text":
	    		json[status] = value;
	    		json["name"] = name;
	    	break;
	    	case "number":
	    		json[status] = Number(value);
	    		json["name"] = name;
	    	break;
	    	case "date":
	    		json[status] = new Date();
	    		json["name"] = name;
	    	break;
	 		 default:
		}
		this.setState({obj})
	}
	addStruct = (key, index) => {
		const obj = {...this.state.obj};
		const name = key["textRef"];
		const value = key["valueRef"];
		const status = key["statusRef"];
		const json = obj[index];
			switch(status) {
	  		case "array":
				json[status] = [];
				json["name"] = name;	
	    	break;
	    	case "structure":
	    		json[status] = {};
	    		json["name"] = name;
	    	break;
	 		 default:
		}
		this.setState({obj})
		console.log(key);
	}
	render() {
		return (
			<div>
				<ul>{
						Object.keys(this.state.obj).map(key => (
							<AddObjectForm 
							key={key}
							index={key}
							addJson={this.addJson}
							type={this.state.obj[key]}
							addStruct={this.addStruct}
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