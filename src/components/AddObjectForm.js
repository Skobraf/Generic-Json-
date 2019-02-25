import React from 'react';

class AddObjectForm extends React.Component {
	statusRef = React.createRef();
	textRef = React.createRef();
	valueRef = React.createRef();
	showVisible = () => {
		this.setState({visible: false})
	}
	showMe = (e) => {
		e.preventDefault();
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.addStruct(json, this.props.index)
	}
	getValues = () => {
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.addJson(json, this.props.index);
	}
	toggleVisibility = () => {

		if (this.statusRef.current.value ==="array" || this.statusRef.current.value ==="structure" ) {
			this.visible = true;
		}
		else {this.visible = false;}
		console.log(this.props);
		}
		

	render() {
		let visible = false;
		return (
			<ul>
				<li onClick={this.showVisible}>
					<form onSubmit={this.showMe}>
						<input type="text" placeholder="Text" ref={this.textRef} />
						<select name="valeur"  ref={this.statusRef} onChange={this.toggleVisibility}>
							<option value="text">text</option>
							<option value="boolean">Boolean</option>
							<option value="number">Number</option>
							<option value="structure">Structure</option>
							<option value="array">Array</option>
							<option value="date">Date</option>
						</select>
						<input type="text" placeholder="Value" ref={this.valueRef}  style={{display: this.visible ? 'none' : 'inline-block'}} />
						<button style={{display: this.visible ? 'inline-block' : 'none'}} type="submit">Add</button>
						<button onClick={this.getValues} style={{display: this.visible ? 'none' : 'inline-block'}} >Submit</button>
					</form>
				</li>
				<ul>
				
				</ul>
			</ul>
			)
	}
}

export default AddObjectForm;