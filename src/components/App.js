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
	addJson = (key, index) => {
		const obj = {...this.state.obj};
		const name = key["textRef"];
		const value = key["valueRef"];
		const status = key["statusRef"];
		const json = obj[index];
			switch(status) {
	  		case "boolean":
				json[name] = new Boolean();
				this.setState({visible:false})
	    	break;
	    	case "text":
	    		json[name] = value;
	    		this.setState({visible:false})
	    	break;
	    	case "number":
	    		json[name] = Number(value);
	    		this.setState({visible:false})
	    	break;
	    	case "date":
	    		json[name] = new Date();
	    		this.setState({visible:false})
	    	break;
	    	case "structure":
	    		json[name] = {}
	    		this.setState({visible:true})
	    	break;
	    	case "array":
	    		json[name] = []
	    		this.setState({visible:true})
	    	break;
	 		 default:
		}
		this.setState({ obj,
							 })
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
							visible={this.state.visible}
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