import React from 'react';

const NotFound = () => {
	

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

export default NotFound;