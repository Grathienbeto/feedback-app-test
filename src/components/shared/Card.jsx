import PropTypes from "prop-types";

const Card = ({ children, reverse }) => {
  // return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4)" : "#fff",
        color: reverse ? "#fff" : "rgb(0,0,0)",
      }}
    >
      {" "}
      {children}
    </div>
  );
};

Card.defaultProps = {
  reverse: false,
  backgroundColor: "#fff",
  color: "rgb(0,0,0)",
};

Card.propTypes = {
  children: PropTypes.node,
  reverse: PropTypes.bool,
};

export default Card;
