import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerEmail: '',
      registerPassword: '',
      registerName: ''
    }
  };

  onNameChange = (event) => {
    this.setState({registerName: event.target.value})
  };

  onEmailChange = (event) => {
    this.setState({registerEmail: event.target.value})
  };

  onPasswordChange = (event) => {
    this.setState({registerPassword: event.target.value})
  };

  onSubmitSignIn = () => {
    fetch('https://smartbrain-api-8m4u.onrender.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: this.state.registerName,
        email: this.state.registerEmail,
        password: this.state.registerPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <article className="mainblock br4 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25 mw5 center">
          <main className="pa4">
             <div className="measure">
                 <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Register</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                      <input className="pa2 input-reset ba bg-transparent w-100" type="text" name="name" onChange={this.onNameChange}  id="name" />
                    </div>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                      <input 
                        onChange = { this.onEmailChange }
                        className="pa2 input-reset ba bg-transparent w-100" 
                        type="email" name="email-address"  
                        id="email-address" />
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlfor="password">Password</label>
                      <input 
                        onChange = { this.onPasswordChange }
                        className="b pa2 input-reset ba bg-transparent w-100" 
                        type="password" 
                        name="password"  
                        id="password" />
                    </div>
                 </fieldset>
                    <div className="">
                       <input 
                          onClick={this.onSubmitSignIn} 
                          className="signIn b ph3 pv2 input-reset ba bg-transparent pointer f6 dib" 
                          type="submit" 
                          value="Register" />
                    </div>
              </div>
          </main>
      </article>
    );
  }
}

export default Register;