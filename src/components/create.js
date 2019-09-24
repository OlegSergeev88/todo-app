import React from "react";

export default class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleClick() {
    let val = this.state.value;
    alert(val);
  }

  handleChange(e) {
    let val = e.target.value;
    this.setState({ value: val });
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>CREATE</button>
      </div>
    );
  }
}
