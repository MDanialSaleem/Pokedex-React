/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core";
import PropTypes from "prop-types";

const LinearProgressBar = props => {
  const progress = Math.round((props.progress / props.end) * 100);

  const outerStyles = {
    backgroundColor: props.emptyColor,
    width: props.width,
    margin: "5px",
    borderRadius: "5px"
  };

  const keyfr = keyframes`
  0%,
  100% {
    transition-timing-function: linear;
  }
  0% {
    width: 0;
  }
  100% {
    width: ${progress}%;
  }`;

  const innerStyle = {
    backgroundColor: props.fillColor,
    animation: `${keyfr} ${props.time}s`,
    padding: "3px",
    fontSize: props.fontSize,
    maxWidth: `${progress}%`,
    color: props.textColor,
    overflow: "hidden",
    whiteSpace: "nowrap"
  };
  return (
    <div css={outerStyles}>
      <div css={innerStyle}>{props.label}</div>
    </div>
  );
};

LinearProgressBar.propTypes = {
  emptyColor: PropTypes.string,
  fillColor: PropTypes.string,
  textColor: PropTypes.string,
  label: PropTypes.string,
  fontSize: PropTypes.string,
  time: PropTypes.number,
  end: PropTypes.number,
  progress: PropTypes.number.isRequired,
  width: PropTypes.string
};

LinearProgressBar.defaultProps = {
  emptyColor: "rgb(229, 233, 235)",
  fillColor: "red",
  textColor: "white",
  label: "",
  fontSize: "16px",
  time: 0,
  end: 100,
  width: "100%"
};

export default LinearProgressBar;
