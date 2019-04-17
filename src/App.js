import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component {
state = {
  ninjas : [
    {name: 'Bruce', surName: 'Lee', age: 34, belt: 'Black Blue', id: 1},
    {name: 'Steva', surName: 'Scepanovic', age: 21, belt: 'Orange', id: 2},
    {name: 'Hasan', surName: 'Sukljev', age: 49, belt: 'White', id: 3}
  ]
}

  render() {
    return (
      <div className="App">
       <h1>Idemo na MUP</h1>
       <p>Welcome!</p>
       <Ninjas ninjas={this.state.ninjas}/>
      </div>
    );
  }
}

export default App;
