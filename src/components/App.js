import React from 'react';
import AddObjectForm from './AddObjectForm';

class App extends React.Component {
	state = {
		obj:{},
		visible:false
	}
	addRow = () => {
		const row = {...this.state.obj};
		row[`json${Date.now()}`] = {};
		this.setState({obj: row});
		}
	toggleVisibility = (key, index) => {
		const name = key["textRef"];
		const value = key["valueRef"];
		const status = key["statusRef"];

			switch(status) {
	  		case "boolean":
				this.setState({visible:false})					
	    	break;
	    	case "text":
	    		this.setState({visible:false})
	    	break;
	    	case "number":
	    		this.setState({visible:false})
	    	break;
	    	case "date":
	    		this.setState({visible:false})
	    	break;
	    	case "structure":
	    		this.setState({visible:true})
	    	break;
	    	case "array":
	    		this.setState({visible:true})
	    	break;
	 		 default:
		}

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
	    		json[name] = {};
	    	break;
	    	case "array":
	    		json[name] = [];
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
							visible={this.state.visible}
							toggleVisibility={this.toggleVisibility}
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