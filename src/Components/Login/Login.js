import React, { Component } from 'react';
import { throwStatement } from '@babel/types';
import './Login.css'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      customerEmail: '',
      customerPassword: '',
      managerEmail: '',
      managerPassword: '',
      ready: false
    } 
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return <section className='login'>
      <form className='customer-login__form'>
        <input 
          className='customer-email__input'
          type='text'
          value={this.state.customerEmail}
          name='customer-email'
          placeholder='Enter email here'
          onChange={this.handleChange}
        />
        <input 
          className='customer-password__input'
          type='password'
          value={this.state.customerPassword}
          name='customer-password'
          placeholder='Enter your password'
          onChange={this.handleChange}
        />
        <button className='customer-login__btn' />
      </form>

      <form className='manager-login__form'>
        <input 
        className='manager-email__input'
        type='text'
        value={this.state.managerEmail}
        name='manager-email'
        placeholder='Enter email here'
        onChange={this.handleChange}
      />
        <input 
          className='manager-password__input'
          type='password'
          value={this.state.managerPassword}
          name='manager-password'
          placeholder='Enter your password'
          onChange={this.handleChange}
        />
        <button className='manager-login__button'/>
      </form>
    </section>
  }

}

export default Login

