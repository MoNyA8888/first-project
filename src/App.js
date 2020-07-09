import React from 'react';
import './App.css';

import './index.css';


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      email: [],
    }
  }
  handleTextChange(event) {
    //This function is called whenever the text in the text field is modified
    alert(event.target.value)
  }
  handleSubmit(event) {
    //This function is called whenever the user clicks "submit" - process the text that was entered here
    alert("Submitted")
  }




  render() {
    return (

      <div className="App">
        {/*Insert code to render a Hangman component here and pass it information to display the right image*/}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.currentLetter}
            onChange={this.handleTextChange}
          />
          <button> Submit </button>
        </form>
      </div>




    );
  }
}


export default App;
