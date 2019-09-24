import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: false,
      value: ""
    };
  }

  handleResult() {
    let res = this.state.result;
    this.setState({ result: !this.state.result });
  }

  render() {
    return (
      <div>
        <li>
          <div
            onClick={this.state.result ? null : this.handleResult.bind(this)}
          >
            {this.state.result ? (
              <div>
                <input type="text" />
                <button>SET</button>
              </div>
            ) : (
              this.props.item
            )}
          </div>
          <button onClick={this.props.onDelete}>X</button>
        </li>
      </div>
    );
  }
}
