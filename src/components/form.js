import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super();
    }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        {/* <form>
            <label>
                Name:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
        </form> */}
      </div>
    );
  }
}

export default Form;
