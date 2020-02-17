import React, { Component } from "react";
import "./styles.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Reduxs</h1>
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
