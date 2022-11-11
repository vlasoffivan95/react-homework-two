import React, { Component } from "react";

class MessageStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { status: false };
  }

  changeStatus = () => {
    this.setState({
      status: !this.state.status,
    });
  };
  render() {
    let { message } = this.props;
    let { status } = this.state;

    return (
      <>
        <div>
          <h2> {message}</h2>
          <p>{status ? "status: read" : "status: unread"}</p>
        </div>
        <button disabled={status} onClick={this.changeStatus}>
          Read
        </button>
      </>
    );
  }
}

export default MessageStatus;
