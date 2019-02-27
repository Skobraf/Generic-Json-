import React from 'react';
import AddObjectForm from './AddObjectForm';

class App extends React.Component {
	state = {
		obj:{},
		count:0
		}

	addRow = () => {
		const row = {...this.state.obj};
		row[`state${this.state.count}`] = {};
		this.setState({
			obj: row,
			count:this.state.count +1
		});
		}


	addJson = (index, key, level, parentId, stateNum) => {
		const obj = {...this.state.obj[stateNum]};
		const k = {...this.state.obj};
		const name = key["textRef"];
		const value = key["valueRef"];
		const status = key["statusRef"];
		const json = obj[index];
		if (Object.keys(obj).length === 0) {
			switch(status) {
		  		case "text":
		  			k[stateNum]["id"] = 0;
			  		k[stateNum]["name"] = name;
			  		k[stateNum]["type"] = value;
			  		k[stateNum]["value"] = value;
			  		k[stateNum]["status"] = status;
		    	break;
		    	case "number":
		    		k[stateNum]["id"] = 0;
			  		k[stateNum]["name"] = name;
			  		k[stateNum]["type"] = Number(value);	
			  		k[stateNum]["value"] = value;
			  		k[stateNum]["status"] = status;	
		    	break;
		    	case 'boolean':
		    		k[stateNum]["id"] = 0;
			  		k[stateNum]["name"] = name;
			  		k[stateNum]["type"] = new Boolean();
			  		k[stateNum]["value"] = value;
			  		k[stateNum]["status"] = status;
				break;
				case 'date':
					k[stateNum]["id"] = 0;
			  		k[stateNum]["name"] = name;
			  		k[stateNum]["type"] = new Date();
			  		k[stateNum]["value"] = value;
			  	break;
	 		 default:
			}

		} else {
			let data = obj.type[level];	
					for(let i = 0; i < index - 1; i++) {
						data = data.type[0]
					}

			switch(status) {
		  		case "text":
		  			data.type.push({
	  					id:index +1,
						name:name,
						value:value,
						status:status,
						type:value
	  				})
		    	break;
		    	case "number":
		  			data.type.push({
	  					id:index +1,
						name:name,
						value:value,
						status:status,
						type:Number(value)
	  				})
		    	break;
		    	case 'boolean': 
		    		data.type.push({
	  					id:index +1,
						name:name,
						value:value,
						status:status,
						type:value
	  				})
	  			break;
	  			case 'date':
	  				data.type.push({
	  					id:index +1,
						name:name,
						value:value,
						status:status,
						type:value
	  				})
	  			break;
	 		 default:
	 		    alert('action not supported')
			}
		}
			
		this.setState({obj: k})
	}
	
	addStruct = (index, key, level, parentId,stateNum) => {
		let obj = {...this.state.obj[stateNum]};
		let k = {...this.state.obj};
		const name = key["textRef"];
		const value = key["valueRef"];
		const status = key["statusRef"];
		const json = obj[index];
			if (Object.keys(obj).length === 0) {
				switch(status) {
			  		case "array":
			  			k[stateNum]["id"] = 0;
			  			k[stateNum]["name"] = name;
			  			k[stateNum]["type"] = [];
			  			k[stateNum]["value"] = value;
			  			k[stateNum]["status"] = status;
			    	break;
			    	case "structure":
			  			console.log("parentId");
			    	break;
			 		 default:
				}
			} else {
				switch(status) {
			  		case "array":
			  			let data = obj.type[level];	
						for(let i = 0; i < index - 1; i++) {
							data = data.type[0]
						}
			  			index == 0 ? obj.type.push({id:index + 1,
								name:name,
								type:[]}) : data.type.push({
			  					id:index +1,
								name:name,
								value:value,
								status:status,
								type:[]
			  				})
							
			    	break;
			    	case "structure":
			  			console.log(parentId);
			    	break;

			 		 default:
				}

			}	
		this.setState({obj: k})
	}
	componentDidMount() {
        const localStorageRef = localStorage.getItem('myNestedState');
        const localStorageRefNum = localStorage.getItem('myCount')
        console.log(localStorageRefNum);
        if(localStorageRef && localStorageRefNum) {
        	this.setState({
        			obj: JSON.parse(localStorageRef),
					count:JSON.parse(localStorageRefNum)    			
        		});
        }
        
    }

    componentDidUpdate() {
        console.log('updated');
        localStorage.setItem('myNestedState', JSON.stringify(this.state.obj));
        localStorage.setItem('myCount',JSON.stringify(this.state.count))
    };
	render() {
		return (
			<div>
				<ul>{
						Object.keys(this.state.obj).map((comment,i) => {
							let k = this.state.obj[comment];
							return (
								<AddObjectForm 
									key={i}
									index={comment}
									addJson={this.addJson}
									type={this.state.obj[comment]}
									addStruct={this.addStruct}
							 />	
								)
							
							}
					)}
				</ul>

				 <button onClick={this.addRow}>Add new</button>
			</div>
			)
	}
}

export default App;

   