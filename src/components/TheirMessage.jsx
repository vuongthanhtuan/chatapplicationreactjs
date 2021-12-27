const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
  const RenderAvatar = () => {
    if (message.sender && message.sender.avatar) {
      return (
        <div
          className="message-avatar"
          style={{ backgroundImage: message.sender && `url(${message.sender.avatar})` }}
        />
      );
    }
    const colors = ['red', 'black', 'green', 'purple', 'blue'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
      <div
        className="message-avatar"
        style={{ backgroundColor: randomColor }}
      >
        {message.sender.username.substring(0, 2).toUpperCase()}
      </div>
    );
  };

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <RenderAvatar />
      )}
      {message.attachments && message.attachments.length > 0
        ? (
          <img
            src={message.attachments[0].file}
            alt="message-attachment"
            className="message-image"
            style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
          />
        )
        : (
          <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px' }}>
            {message.text}
          </div>
        )}
    </div>
  );
};

export default TheirMessage;
