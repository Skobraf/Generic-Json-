import React from 'react';

class AddObjectForm extends React.Component {
	statusRef = React.createRef();
	textRef = React.createRef();
	valueRef = React.createRef();

	getValues = () => {
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.addJson(json, this.props.index);
		console.log(json["statusRef"],this.props.visible);
	}
	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="Text" ref={this.textRef} />
					<select name="valeur" onChange={this.getValues} ref={this.statusRef}>
						<option value="text">text</option>
						<option value="boolean">Boolean</option>
						<option value="number">Number</option>
						<option value="structure">Structure</option>
						<option value="array">Array</option>
						<option value="date">Date</option>
					</select>
					<input type="text" placeholder="Value" ref={this.valueRef} />
					<button style={{display: this.props.visible ? 'inline-block' : 'none'}}>add</button>
				</form>
			</div>
			)
	}
}

export default AddObjectForm;