import React from "react";

export default class List extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   result: false,
    //   value: "",
    //   vale: false
    // };
  }

  //   handleEdit(e) {
  //     let val = e.target.value;
  //     this.setState({ value: val });
  //   }

  //   handleResult() {
  //     let res = this.state.result;
  //     let x = this.state.vale;
  //     this.setState({ result: !this.state.result, vale: true });
  //     console.log(x);
  //   }

  render() {
    return (
      <li>
        <div onClick={this.props.xx.bind(null, this.props.ref)}>
          {this.props.item}
        </div>
        <button onClick={this.props.onDelete}>X</button>
      </li>
    );
  }
}
