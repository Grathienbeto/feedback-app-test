// impt
import PropTypes from "prop-types";

const Header = ({ text, bgColor, color }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color,
  };

  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

// defines default props in case doesn't get pass anything
Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  color: "#ff6a95",
};

// utilizing prop types to ensure continuity
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

export default Header;
