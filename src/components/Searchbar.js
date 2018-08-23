import React  from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../store/Actions.js";

class Searchbar extends React.Component
{
    state = {
        currentValue : "Enter Id",
        error: false
    };


    handleInput = (value) =>
    {
        this.setState({
            currentValue: value
        });
    };

    handleInitialSubmit(value)
    {
        var number = Number.parseInt(value,10);
        if(!isNaN(number))
        {
            if(number >=1 && number <=721)
            {
                this.setState({
                    error:false
                });
                this.props.handleSubmit(value);
            }
            else
            {
                this.setState({
                    error:true
                });
            }
        }
        else
        {
            value = value.toLowerCase();
            const index = this.props.list.findIndex(pokemon => pokemon === value);
            if(index !== -1)
            {
                this.setState({
                    error:false
                });
                this.props.handleSubmit(index+1);
            }
            else
            {
                this.setState({
                    error:true
                });
            }
        }
    }

    render() {
        const buttonStyles = {
            fontSize: "30px",
            margin: "0px 3px",
            border: "3px solid lightblue",
            borderRadius: "10px"
        }


        const inputStyles = {
            fontSize: "30px",
            margin: "0px 3px",
            border: "3px solid lightblue",
            borderRadius: "10px",
            background: "#F5FFFA"
        }
        return (
            <div>
                <input style={inputStyles} type = "text" placeholder={this.props.id} onKeyUp={(event) => this.handleInput(event.target.value)} />
                <button style={buttonStyles} onClick={() => this.handleInitialSubmit(this.state.currentValue)}>Search</button>
                {this.state.error ? <h4>No Such Pokemon</h4> : null}
            </div>
        );
    }
}

const mapStateToProps = function(state)
{
    return {
        id : state.nationalId,
        firstEntered: state.firstEntered,
        list: state.list
    };
}

const mapDispatchToProps = function(dispatch)
{

    return {
        handleSubmit : (id) => dispatch({type:ActionTypes.SUBMIT_NEW_POKEMON, id})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Searchbar);