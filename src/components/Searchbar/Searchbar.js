import React  from "react";
import { connect } from "react-redux";
import * as ActionTypes from "../../store/Actions.js";
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

//the state mananged by redux is passed into the components as props. This function maps redux store state
//to component's props. The input is the state stored in redux, the return value is a map of some properties
//of that state to the props of object.
const mapStateToProps = function(state)
{
    return {
        //the state object is defined in the reducer.js file. 
        //the properties on this object are put on the props object by the connect function
        id : state.nationalId,
        firstEntered: state.firstEntered,
        list: state.list
    };
}

//the actions that can be dispatched by this component is determined by this function. This function takes 
//an input, which is the dispatch function. Dispatch is a function defined on the store object that was created
//by the createStore in Index.js. This function expects one arguement which is the Action object i.e an object that 
//has the type property defined on it. It can have any other number of properties. 
//mapDispatchToProps function returns an object that has properties that are anonymous
//functions that call dispatch with appropriate actions. These properties are assigned as methods to the props 
//object. This then, maps actions to properties.
const mapDispatchToProps = function(dispatch)
{
    return {
        loadNew: (id) => dispatch(ActionTypes.loadNewPokemon(id)),
        startLoading: () => dispatch({type:ActionTypes.START_LOADING})
    };
};

//Connect is used to subscribe a react component to the redux store. Connect is a function
//which takes two functions as input that configure the piece of the state this component needs to subscribe
//to and the actions this component needs to dispatch. Either one of these can be passed if both are not needed.
//The connect function returns another function which take the react component and returns a HOC.
export default connect(mapStateToProps,mapDispatchToProps)(Radium(Searchbar));