import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  email: '',
                  username: '',
                  password: '',
                  email_error: '',
                  username_error: '',
                  password_error: ''
            };
            this.handleSubmit = this.handleSubmit.bind(this);
      }

      update(field) {
            return e => this.setState({
                  [field]: e.currentTarget.value
            });
      }

      handleSubmit(e) {
            e.preventDefault();
            const values = {
                        password: this.state.password,
                        email: this.state.email,
                        username: this.state.username
            }
            const user = Object.assign({}, values);
            this.props.processForm(user).fail(()=> this.renderErrors()).then(()=> this.props.history.push('/channels'))
      }

      emailError(error) {
            if (error === "Email has already been taken") {
                  this.setState({ email_error: ' - This email has alraedy been taken' })
            } else if (this.state.email === "") {
                  this.setState({ email_error: ' - This field is required' })
            } else {
                  this.setState({ email_error: error })
            }
      }

      usernameError(error) {
            if (this.state.username === '') {
                  this.setState({ username_error: ' - This field is required' })
            } else {
                  this.setState({ username_error: ' - Must be 2 or more in length' })
            }
      }

      passwordError(error) {
            if (this.state.password === '') {
                  this.setState({ password_error: ' - This field is required' })
            } else if (error === 'Password is too short (minimum is 6 characters)') {
                  this.setState({ password_error: ' - Must be 6 or more in length' })
            } else {
                  this.setState({ password_error: error })
            }
      }

      renderErrors() {
            this.state.email_error = '';
            this.state.username_error = '';
            this.state.password_error = '';

            this.props.errors.map((error) => {
                  switch (true) {
                        case /Email/.test(error):
                              this.emailError(error);
                              break;
                        case /Username/.test(error):
                              this.usernameError(error);
                              break;
                        case /Password/.test(error):
                              this.passwordError(error);
                              break;
                        default:
                              this.emailError(error);
                              this.passwordError(error);
                              break;
                  }
            })
      }

      email() {
            let fieldClass = (this.state.email_error.length > 1) ? 'input-container input-error' : 'input-container';

            return (
                  <div className={fieldClass}>
                        <label>EMAIL
                              <span className="error-message">{this.state.email_error}</span>
                        </label>
                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                  </div>
            )
      }

      username() {
            if (this.props.formType === 'signup') {
                  let fieldClass = (this.state.username_error.length > 1) ? 'input-container input-error' : 'input-container';

                  return (
                        <div className={fieldClass}>
                              <label>USERNAME
                                    <span className="error-message">{this.state.username_error}</span>
                              </label>
                              <input type="text" value={this.state.username} onChange={this.update('username')} />
                        </div>
                  )
            }
      }

      password() {
            let fieldClass = (this.state.password_error.length > 1) ? "input-container input-error" : "input-container";

            return (
                  <div className={fieldClass}>
                        <label>PASSWORD
                              <span className="error-message">{this.state.password_error}</span>
                        </label>
                        <input
                              type="password"
                              value={this.state.password}
                              onChange={this.update('password')}
                        />
                  </div>
            )
      }

      link() {
            if (this.props.formType === 'signup') {
                  return (
                        <div className="session-link-container">
                              <Link to="/login">Already have an account?</Link>
                        </div>
                  )
            } else {
                  return (
                        <div className="session-link-container">
                              <span>Need an account? <Link to="/signup">Register</Link></span>
                        </div>
                  )
            }
      }

      sessionFormHeader() {
            if (this.props.formType === 'signup') {
                  return (
                        <div className="session-form-header">
                              <h3>Create an account</h3>
                        </div>
                  )
            } else {
                  return (
                        <div className="session-form-header">
                              <h3>Welcome back!</h3>
                              <div>We're so excited to see you again!</div>
                        </div>
                  )
            }
      }

      createDemoUser() {
            if (this.props.formType === 'login') {
                  return <button 
                        type="submit"
                        className="session-button"
                        id="demo-user-button"
                        onClick={() => this.setState({ email: 'demo@gmail.com', password: 'password' })}>
                        Demo Login</button>
            } else {
                  return null
            }
      }

      render() {
            let text = (this.props.formType === 'signup') ? 'Continue' : 'Login'
            return (
                  <div className="session-form-container">
                        <div className="input-form-container">
                              {this.sessionFormHeader()}
                              <form onSubmit={this.handleSubmit} className="session-form">

                                    {this.email()}

                                    {this.username()}

                                    {this.password()}

                                    <button type="submit" className='session-button'>{text}</button>

                                    {this.createDemoUser()}

                                    {this.link()}
                              </form>
                        </div>
                        <div className="session-form-underlay"></div>

                        

                  </div>
            );
      }
}

export default SessionForm;
