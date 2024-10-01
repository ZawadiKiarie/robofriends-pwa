import React, { Component } from 'react'


class CounterButton extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  shouldComponentUpdate(nextProps, nextState) {//use cautiously, but don't oversue for evry single project, it may hinder some performance or miss some updates coz of shallow comparison(for deeply nested objects)
    if(this.state.count !== nextState.count){
      return true;
    }
    return false;
  }

  updateCount = () => {
    this.setState(state => {
      return {count: state.count + 1}
    })
  }

  render() {
    console.log('counter button')
    return(
      <button color={this.props.color} onClick={this.updateCount}>
        Count: {this.state.count}
      </button>
    )
  }

}

export default CounterButton;