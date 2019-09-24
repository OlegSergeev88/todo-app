import React from "react";
import List from "./list";

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      valArr: [],
      result: false
    };
  }

  handleClick(arg) {
    let val = this.state.value;
    let arr = this.state.valArr;
    arr.push(arg);
    this.setState({ valArr: arr, value: "" });
    this.refs.someName.value = "";
  }

  handleChange(e) {
    let val = e.target.value;
    this.setState({ value: val });
  }

  handleDelete(arg) {
    let arr = this.state.valArr;
    arr.splice(arg, 1);
    this.setState({ valArr: arr });
  }

  render() {
    let { valArr } = this.state;
    let list = valArr.map((item, index) => (
      <List
        res={this.state.result}
        onDelete={this.handleDelete.bind(this, index)}
        key={index}
        item={item}
      />
    ));
    return (
      <div>
        <input
          ref="someName"
          type="text"
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleClick.bind(this, this.state.value)}>
          CREATE
        </button>
        <ul>{list}</ul>
      </div>
    );
  }
}
