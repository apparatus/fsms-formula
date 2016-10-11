import React, { Component } from 'react'

// Exporting Component, it can be imported and dropped into any container to render
export class HelloWorld extends Component {
  constructor (props) {
    super(props)

    this.action1 = ::this.action1
    this.action2 = ::this.action2
  }

  action1 () {

  }

  action2 () {

  }

  render () {
    return (
      <div>
        <button type="button" onClick={this.action1}>Call Service1 Action1</button>
        <br />
        <button type="button" onClick={this.action2}>Call Service2 Action2</button>
      </div>
    )
  }
}

// Exposing Route, it can directly be imported and plugged into react-router
export class HelloWorldRoute extends Component {
  static defaultProps = {
    path: '/hello-world',
    component: HelloWorld,
    onEnter: (/* nextState, replace, callback */) => {
      // Route enter hook
    }
  }
}
