import React from 'react';

class AddObjectForm extends React.Component {
	statusRef = React.createRef();
	textRef = React.createRef();
	valueRef = React.createRef();
	showMe = () => {
		return <p>hello</p>
	}
	showMe = (e) => {
		e.preventDefault();
		const souJson = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		console.log(souJson.textRef, souJson.statusRef);
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
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.toggleVisibility(json, this.props.index);
	}
	render() {
		return (
			<ul>
				<li>
					<form>
						<input type="text" placeholder="Text" ref={this.textRef} />
						<select name="valeur"  ref={this.statusRef} onChange={this.toggleVisibility}>
							<option value="text">text</option>
							<option value="boolean">Boolean</option>
							<option value="number">Number</option>
							<option value="structure">Structure</option>
							<option value="array">Array</option>
							<option value="date">Date</option>
						</select>
						<input type="text" placeholder="Value" ref={this.valueRef} onChange={this.getValues} style={{display: !this.props.visible ? 'inline-block' : 'none'}} />
						<button style={{display: this.props.visible ? 'inline-block' : 'none'}} onClick={this.showMe}>add</button>
					</form>
				</li>
				<ul>
					{}
				</ul>
			</ul>
			)
	}
}

export default AddObjectForm;