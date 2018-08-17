import React from "react";
import {connect} from "react-redux";
import * as ActionTypes from "../store/Actions.js";

class Navbar extends React.Component
{
    render()
    {
        return (
            <div>
                <button onClick={this.props.onShowMove}>Show moves</button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) =>
{
    return {
        onShowMove : () => dispatch({type:ActionTypes.SHOW_MOVES})
    };
}

export default connect(null, mapDispatchToProps)(Navbar);