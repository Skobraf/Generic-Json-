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
						type:[]
					}]
				}]
			},
			state2:{	
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
	addStruct = (index, key, level) => {
		const obj = {...this.state.obj["state1"]};
		const k = {...this.state.obj};
		const name = key["textRef"];
		const value = key["valueRef"];
		const status = key["statusRef"];
		const json = obj[index];
		if(index == null) {

		}
		let data = obj.type[level];	
		for(let i = 0; i < index - 1; i++) {
			data = data.type[level]
		}
			switch(status) {
	  		case "array":
	  			index == 0 ? obj.type.push({id:index + 1,
						name:name,
						type:[]}) : data.type.push({
	  					id:index +1,
						name:name,
						type:[]
	  				})
	    	break;
	    	case "structure":
	  
	    	break;
	 		 default:
		}
		this.setState({obj: k})
		console.log(level)
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