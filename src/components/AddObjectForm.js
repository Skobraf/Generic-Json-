import React from 'react';

class AddObjectForm extends React.Component {
	statusRef = React.createRef();
	textRef = React.createRef();
	valueRef = React.createRef();
	showVisible = () => {
		this.setState({visible: false});
	}
	showMe = (e) => {
		e.preventDefault();
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.addStruct(this.props.type.id,json, this.props.level, this.props.type.id, this.props.index)
	}
	getValues = () => {
		const json = {
			statusRef: this.statusRef.current.value,
			textRef: this.textRef.current.value,
			valueRef:this.valueRef.current.value
		}
		this.props.addJson(this.props.type.id, json, this.props.level, this.props.type.id, this.props.index);
	}
	toggleVisibility = () => {

		if (this.statusRef.current.value ==="array" || this.statusRef.current.value ==="structure" ) {
			this.visible = true;
		}
		else {this.visible = false;}
		
		}
		

	render() {
		if(Array.isArray(this.props.type.type)) {
			let arr = this.props.type;
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
				{arr.type.map((comment, i) => (
						<AddObjectForm
						key={i}
						level={i}
						index={this.props.index}
						type={comment}
						addStruct={this.props.addStruct}
						addJson={this.props.addJson}
						/>
			))}
				</ul>
			</ul>
				)
		} else if(typeof this.props.type === 'object') {
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
					{
					Object.keys(this.props.type).filter(e => e === 'type').map((comment, i) => (
							<AddObjectForm
								key={i}
								type={this.props.type[comment]}
								valeur={this.props.type}
								level={i}
								addStruct={this.props.addStruct}
								addJson={this.props.addJson}
							/>
						))
					}
					</ul>
				)
		}
		else return (
			<form onSubmit={this.showMe}>
						<input type="text"  value={this.props.valeur.name} placeholder="Text" ref={this.textRef} />
						<select name="valeur" value={this.props.valeur.name} ref={this.statusRef} onChange={this.toggleVisibility}>
							<option value={this.props.valeur.value}>{this.props.valeur.status}</option>
						</select>
						<input type="text" value={this.props.valeur.value} ref={this.valueRef}  style={{display: this.visible ? 'none' : 'inline-block'}} />
						
					</form>
			)
	}
}

export default AddObjectForm;