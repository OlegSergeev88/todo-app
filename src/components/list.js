import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
      value: "",
      vale: false
    };
  }

  handleEdit(e) {
    let val = e.target.value;
    this.setState({ value: val });
  }

  handleResult() {
    let res = this.state.result;
    let x = this.state.vale;
    this.setState({ result: !this.state.result, vale: true });
    console.log(x);
  }

  render() {
    return (
      <li>
        <div onClick={this.state.result ? null : this.handleResult.bind(this)}>
          {this.state.result ? (
            <div>
              <input type="text" onChange={this.handleEdit.bind(this)} />
              <button onClick={this.handleResult.bind(this)}>SET</button>
            </div>
          ) : this.state.vale ? (
            this.state.value
          ) : (
            this.props.item
          )}
        </div>
        <button onClick={this.props.onDelete}>X</button>
      </li>
    );
  }
}
