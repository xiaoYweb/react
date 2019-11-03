import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style from './header.css';


export default class Header extends Component {
  componentWillMount() {
    const {staticContext } = this.props;
    if (staticContext) {
      staticContext.css.push(style._getCss());
    }
  }
  render() {
    return (
      <div className={style.header}>
      <Link to='/'>navTo home</Link>
      <br />
      <Link to='/login'>navTo login</Link>
      <br />
      <Link to='/404'>client navTo 404</Link>
    </div>
    )
  }
}
