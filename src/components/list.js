import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.tem}
          <button onClick={this.props.onDelete}>X</button>
        </li>
      </div>
    );
  }
}
