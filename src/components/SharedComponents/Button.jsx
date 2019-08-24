/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

const getLineHeight = sz => {
  switch (sz) {
    case "sm":
      return "1.75em";
    case "md":
      return "2.25em";
    case "lg":
      return "3em";
    default:
      throw new Error("INVALID BUTTON SIZE");
  }
};

const Button = props => {
  const styles = {
    fontFamily: "Arial, sans-serif",
    border: "none",
    backgroundColor: props.bgColor,
    borderRadius: "5px",
    color: props.textColor,
    boxShadow:
      "0px 1px 5px 0px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 3px 1px -2px rgba(0,0,0,0.12)",
    cursor: "pointer",
    lineHeight: getLineHeight(props.sz),
    fontWeight: "600",
    fontSize: "16px",
    width: "100%",
    ":hover": {
      opacity: 0.8
    },
    ...props.style
  };

  return (
    <button css={styles} type="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

Button.propTypes = {
  sz: PropTypes.oneOf(["sm", "md", "lg"]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
};
Button.defaultProps = {
  sz: "sm",
  bgColor: "blue",
  textColor: "white",
  style: {},
  onClick: () => {}
};

export default Button;
