import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg'
import { connect } from 'react-redux';
import actionCreator from './store/actions/actions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Age: <span>{this.props.age}</span></h3>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {
          this.props.loading && <img src={logo} alt="Not found" className="App-logo" />
        }
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
    history: state.history,
    loading: state.loading,
  }
}

const mapDispachToProps = (dispach) => {
  return {
    onAgeUp: () => dispach(actionCreator.ageUp(1)),
    onAgeDown: () => dispach(actionCreator.ageDown(1)),
    onDeleteHistory: (id) => dispach(actionCreator.onDelete(id))
  }
}

export default connect(mapStateToProps, mapDispachToProps)(App);
