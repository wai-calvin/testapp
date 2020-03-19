import React, {Component} from 'react';
// import './App.css';
import Form from './components/form';
import Players from './components/players';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerAmount: 0,
    };
  }

  render() {
    return (
      <div>
        <Players />
        {/* <Form /> */}
      </div>
    );
  }
}

export default App;
