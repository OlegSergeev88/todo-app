import React from "react";
import List from "./list";

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      valArr: []
    };
  }

  handleClick(arg) {
    let val = this.state.value;
    let arr = this.state.valArr;
    arr.push(arg);
    this.setState({ valArr: arr });
    console.log(arr);
  }

  handleChange(e) {
    let val = e.target.value;
    this.setState({ value: val });
  }

  render() {
    let { valArr } = this.state;
    let list = valArr.map((item, index) => <List key={index} tem={item} />);
    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this, this.state.value)}>
          CREATE
        </button>
        <ul>{list}</ul>
      </div>
    );
  }
}
