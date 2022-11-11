import { Components } from "react";

class MessageStatus extends Components {
  render() {
    const { message, status } = this.props;

    return (
      <>
        <div>
          <h1> {message}</h1>
          <h2>{status}</h2>
        </div>
      </>
    );
  }
};

export default MessageStatus
