import React, { Component } from "react";

class AddContainer extends Component {
  state = {
    data: {
      id: "",
      name: "",
      age: ""
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      data: { ...this.state.data, [name]: value }
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, name, age } = this.state.data;
    this.setState({ data: { id, name, age } });
    this.props.addInData(this.state.data);
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="id"
          onChange={this.handleChange}
          value={this.state.data.id}
          placeholder="Enter id"
        />
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.state.data.name}
          placeholder="Enter String"
        />
        <input
          type="text"
          name="age"
          onChange={this.handleChange}
          value={this.state.data.age}
          placeholder="Enter age"
        />
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default AddContainer;
