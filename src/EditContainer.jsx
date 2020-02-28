import React, { Component } from "react";

class EditContainer extends Component {
  state = {
    data: {
      id: this.props.data.id,
      name: this.props.data.name,
      age: this.props.data.age
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
    console.log(this.props.index);
    this.props.editInData(this.state.data, this.props.index);
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

export default EditContainer;
