import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);


  }


  render() {
    return (
      <div>
        <form>
            <label>
                How Many Players?
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
      </div>
    );
  }
}

export default Form;
