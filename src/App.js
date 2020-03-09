import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Age: <span>{this.props.age}</span></h3>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        <hr />
        <div>
          <h3>History</h3>
          <ul>
            {
              this.props.history.map((item) => (<li key={item.id} className="historyItem" 
              onClick={() => this.props.onDeleteHistory(item.id)}> {item.age}</li>))
            }
          </ul>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach({ type: 'AGE_UP', value: 1 }),
    onAgeDown: () => dispach({ type: 'AGE_DOWN', value: 1 }),
    onDeleteHistory: (id) => dispach({type:'DELETE', key: id})
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
