import React, { Component } from "react";
import "./styles.css";
import View from "./View";
import AddContainer from "./AddContainer";
import EditContainer from "./EditContainer";
class App extends Component {
  state = {
    data: [
      { id: "11a", name: "Naresh", age: 23 },
      { id: "11b", name: "Keerti", age: 22 },
      { id: "11c", name: "Viiraj", age: 21 }
    ],
    display: {
      add: false,
      edit: false,
      view: true
    },
    dataForEdit: {}
  };
  deleteData = dataIndex => {
    const dataX = [...this.state.data];
    dataX.splice(dataIndex, 1);
    this.setState({ data: dataX });
  };

  addData = data => {
    const dataX = [...this.state.data, data];
    this.setState({ data: dataX });
    this.setState({
      display: {
        add: false,
        edit: false,
        view: true
      }
    });
  };

  addEdit = (data, dataIndex) => {
    const dataX = [...this.state.data];
    this.setState({ data: dataX });
    this.setState({
      display: {
        add: false,
        edit: false,
        view: true
      }
    });
  };

  editData = dataIndex => {
    const dataX = [...this.state.data];
    console.log(dataX);
    const X = dataX[dataIndex];
    console.log(X);
    this.setState({
      dataForEdit: X
    });
    this.setState({ dIndex: dataIndex });

    console.log(this.state.dataForEdit);
    this.setState({
      display: {
        add: false,
        edit: true,
        view: false
      }
    });
  };

  testing = () => {
    this.setState({
      display: {
        add: false,
        edit: false,
        view: !this.state.display.view
      }
    });
  };
  render() {
    let table = (
      <table>
        <View
          data={this.state.data}
          onDelete={index => this.deleteData(index)}
          onEdit={index => this.editData(index)}
        />
      </table>
    );
    let disp = "";
    if (this.state.display.view) {
      disp = table;
    } else if (this.state.display.edit) {
      disp = (
        <EditContainer
          data={this.state.dataForEdit}
          editInData={(data, index) => this.addEdit(data, index)}
          index={this.state.dIndex}
        />
      );
    } else {
      disp = <AddContainer addInData={data => this.addData(data)} />;
    }
    return (
      <div>
        <button onClick={this.testing}>Toggle</button>
        {disp}
      </div>
    );
  }
}
export default App;
