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

const Label = props => {
  const styles = {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    border: "none",
    backgroundColor: props.bgColor,
    color: props.textColor,
    lineHeight: getLineHeight(props.sz),
    fontWeight: "600",
    fontSize: "16px",
    width: "content",
    paddingLeft: "5px",
    paddingRight: "5px",
    ...props.style
  };

  return <div css={styles}>{props.children}</div>;
};

Label.propTypes = {
  sz: PropTypes.oneOf(["sm", "md", "lg"]),
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  style: PropTypes.object
};

Label.defaultProps = {
  sz: "sm",
  bgColor: "blue",
  textColor: "white",
  style: {}
};

export default Label;
