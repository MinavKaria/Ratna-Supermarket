import PropTypes from "prop-types";

function NextIcon({ reverse }) {
  return (
    <>
      <h1
        style={{
          transform: reverse ? "rotate(180deg)" : "rotate(0deg)",
        }}
      >
        {" "}
        {">"}{" "}
      </h1>
    </>
  );
}

// Prop validation for NextIcon
NextIcon.propTypes = {
  reverse: PropTypes.bool, // reverse is optional and should be a boolean
};

export default NextIcon;
