import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMembers from "./components/TeamMembers";
import DisplayData from './components/DisplayData.js';
import firebase from 'firebase';

class App extends Component {
    constructor(props){
        super(props);
        var config = {
            apiKey: "AIzaSyCirM6SXBjFUM5a2liPibL86p4abK8x-2U",
            authDomain: "lab4-d9c2b.firebaseapp.com",
            databaseURL: "https://lab4-d9c2b.firebaseio.com",
            projectId: "lab4-d9c2b",
            storageBucket: "lab4-d9c2b.appspot.com",
            messagingSenderId: "421384606415"
        };
        firebase.initializeApp(config);
    }
  render() {
    return (
      <div>
        <TeamMembers db={firebase}/>
          <DisplayData db={firebase}/>
      </div>
    );
  }
}

export default App;
