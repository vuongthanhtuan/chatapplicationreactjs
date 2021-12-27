const Typing = ({ typers }) => {
  const sending = '...Tying';
  return (
    <div className="typing">
      {typers.join(<sending />)}
    </div>
  );
};
export default Typing;
