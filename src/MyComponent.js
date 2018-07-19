import React, { Component } from 'react';

export class MyComponent extends Component {
  render() {
    return (
        <div>
            <div className="MyComponent">Hello {this.props.greeting}! We have {this.props.clicks} clicks</div>
            <button onClick={this.handleClick}>Click me</button>
        </div>
    );
  }

  handleClick = (e) => (
      this.props.onClick(e)
  )
}