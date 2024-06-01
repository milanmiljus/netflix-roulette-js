import React from 'react'

export class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        value: this.props.initialValue || 0
      }
    }

    increment = () => {
      this.setState((prevState) => ({
        value: prevState.value + 1
      }))
    }

    decrement = () => {
      this.setState((prevState) => ({
        value: prevState.value - 1
      }))
    }

    render() {
      return React.createElement('div', null,
        React.createElement('p', null, `Counter Value: ${this.state.value}`),
        React.createElement('button', { onClick: this.increment }, 'Increment'),
        React.createElement('button', { onClick: this.decrement }, 'Decrement')
      )
    }
  }