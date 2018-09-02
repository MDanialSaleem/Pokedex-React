import React  from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../store/Actions.js";
import Radium from "radium";

class Searchbar extends React.Component
{
    state = {
        currentValue : "Enter id or name",
        error: false
    };


    handleInput = (value) =>
    {
        this.setState({
            currentValue: value
        });
    };

    //used for performing certain checks before calling the API.
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
                if(value !== this.props.id)
                {
                    this.props.loadNew(value);
                }
                this.props.startLoading();
                this.props.loadNew(value);
            }
            else
            {
                this.setState({
                    error:true
                });
            }
        }
        else //if a name was submitted. Number.parseInt return NaN if it can't convert the string to a valid number.
        {
            value = value.toLowerCase(); //to prevent case issues.
            const index = this.props.list.findIndex(pokemon => pokemon === value);
            if(index !== -1)
            {
                this.setState({
                    error:false
                });
                if(index + 1 !== this.props.id)
                {
                    this.props.loadNew(index+1);
                }
                this.props.startLoading();
                this.props.loadNew(index+1);
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

        const styles = {
            width: "90%",
            display: "grid",
            gridTemplateColumns: "70% 30%",
            gridColumnGap: "5px",
            "@media (max-width: 600px)": {
                gridTemplateColumns: "1fr",
                gridRowGap: "1px"
            }

        };

        const buttonStyles = {
            boxSizing: "border-box",
            border: "3px solid lightblue",
            borderRadius: "10px",
            fontSize: "30px",
            "@media (max-width: 600px)": {
                fontSize: "15px"
            }
        }


        const inputStyles = {
            border: "3px solid lightblue",
            boxSizing: "border-box",
            borderRadius: "10px",
            background: "#F5FFFA",
            width: "100%",
            fontSize: "30px",
            "@media (max-width: 600px)": {
                fontSize: "15px"
            }
        }
        return (
            <div style={styles}>
                <input style={inputStyles} type = "text" placeholder={this.state.currentValue} onKeyUp={(event) => this.handleInput(event.target.value)} />
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
        loadNew: (id) => dispatch(ActionTypes.loadNewPokemon(id)),
        startLoading: () => dispatch({type:ActionTypes.START_LOADING})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Radium(Searchbar));