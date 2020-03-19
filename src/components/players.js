import React, {Component} from 'react';

class Players extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert(this.state.value);  
    event.preventDefault();
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                How Many Players?
                <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit"></input>
        </form>
    );
  }
}

export default Players;