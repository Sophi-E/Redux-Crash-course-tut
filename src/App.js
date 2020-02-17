import React, { Component } from "react";
import "./styles.css";
import Posts from "./components/Posts";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./Store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Redux</h1>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
