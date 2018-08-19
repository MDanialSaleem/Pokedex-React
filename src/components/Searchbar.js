import React  from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../store/Actions.js";

class Searchbar extends React.Component
{
    state = {
        currentValue : "Enter Id"
    };


    handleInput = (value) =>
    {
        this.setState({
            currentValue: value
        });
    };



    render() {
        const styles = {
            border : "2px solid black",
            width: "100%"
        };

        if(this.props.firstEntered === true)
        {
            styles.alignSelf = "flex-start";
        }

        return (
            <div style={styles}>
                <input type = "text" placeholder={this.props.id} onKeyUp={(event) => this.handleInput(event.target.value)} />
                <button onClick={() => this.props.handleSubmit(this.state.currentValue)}>Search</button>
            </div>
        );
    }
}

const mapStateToProps = function(state)
{
    return {
        id : state.nationalId,
        firstEntered: state.firstEntered
    };
}

const mapDispatchToProps = function(dispatch)
{

    return {
        handleSubmit : (id) => dispatch({type:ActionTypes.SUBMIT_NEW_POKEMON, id})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Searchbar);