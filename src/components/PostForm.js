import React, { Component } from "react";

class PostForm extends Component {
  render() {
    return (
      <div className="App">
        <h1>Add Posts</h1>
        <div>
          <label> Title: </label>
          <input type="text" />
        </div>
        <br />
        <div>
          <label> Body: </label>
          <textarea type="text" placeholder="new post" />
        </div>
        <br />
        <button type="submit"> Submit </button>
      </div>
    );
  }
}

export default PostForm;
