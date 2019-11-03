import React, { Component } from 'react'

export default class NotFoud extends Component {
  componentWillMount() {
    // console.log(this.props.staticContext)
    const { staticContext } = this.props;
    staticContext && (staticContext.notFound = true);
  }
  render() {
    return (
      <div>
        404 sorry page is not found
      </div>
    )
  }
}
