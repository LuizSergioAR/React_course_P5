import { Component } from 'react';

import style from './User.module.css';

class User extends Component {
  componentWillUnmount() {
    console.log('User will unmount!');
  }

  render() {
    return <li className={style.user}>{this.props.name}</li>;
  } 
}

export default User;