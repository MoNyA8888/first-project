import React from 'react';
import { auth } from './firebase'

import './index.css';


class Signup extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      handleChange: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({ [ event.target.name ]: event.target.value });

  }
  handleSubmit(event) {

    alert("Submitted")
  }


  handleSubmit(event) {

    alert("Submitted")
  }




  render() {
    return (

      <div className="Signup">
        {/*Insert code to render a Hangman component here and pass it information to display the right image*/}
        <form onSubmit={this.signup}>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="email"
          />
          <button> Submit </button>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="password"
          />
          <button> Submit </button>
        </form>
      </div>




    );
  }
}

export default Signup;


