const Button = (props) => {
  const { cls, content } = props;
  return <button className={cls}>{content}</button>;
};

const element = (
  <div className="social-btn-bg">
    <h1 className="social-btn-heading">Social Button</h1>
    <Button cls="social-btn-like" content="Like" />
    <Button cls="social-btn-comment" content="Comment" />
    <Button cls="social-btn-share" content="Share" />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
