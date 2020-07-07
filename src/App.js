import React from 'react';
import './App.css';

import db from "./firebase";
import './index.css';

class App extends React.Component {
  TeamMembers() {
    db.collection("TeamMembers").doc("Monya").set({
      fullname: "Monya assi",
      email: "monyaa@gmail.com",
      favColor: "blue?",
      address: "palestine",
    })
    db.collection("TeamMembers").doc("Hadeel").set({
      fullname: "Monya assi",
      email: "monyaa@gmail.com",
      favColor: "blue?",
      address: "palestine",
    })
    db.collection("TeamMembers").doc("Naem").set({
      fullname: "Monya assi",
      email: "monyaa@gmail.com",
      favColor: "blue?",
      address: "palestine",
    })
    db.collection("TeamMembers").doc("Amro").set({
      fullname: "Monya assi",
      email: "monyaa@gmail.com",
      favColor: "blue?",
      address: "palestine",
    })

  }
  document() {
    db.collection("TeamMembers")
      .doc("Monya")
      .get()
      .then((doc) => {
        const data = doc.data()
        console.log(data)
      })
  }

  collection() {

    db.collection("TeamMembers")
      .get()
      .then((querySnapshot) => {
        let data = {}
        querySnapshot.docs.map(function (doc) {
          data[ doc.id ] = doc.data()
          console.log(data)
          console.log("Monya: " + JSON.stringify(data[ "Monya assi" ]))
        })
      }

      )

  }



  render() {
    return (

      <div>
        <button onClick={this.TeamMembers}></button>



        <button onClick={this.document}></button>


        <button onClick={this.collection}></button>
      </div>




    );
  }
}


export default App;
