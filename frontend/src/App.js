import React, { Component } from 'react';

const list = [
  {
    id: 1,
    title: '1st Item',
    description: 'Description here.'
  },
  {
    id: 2,
    title: '2nd Item',
    description: 'Another description here.'
  },
  {
    id: 3,
    title: '3rd Item',
    description: 'Third description here.'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { list };
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
