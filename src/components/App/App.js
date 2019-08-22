import React from "react";
import Searchbar from "../Searchbar/Searchbar";
import BasicInfo from "../BasicInfo/BasicInfo";
import MoveCard from "../MoveCard/MoveCard";
import AppLoader from "../Loader/AppLoader";
import GlobalContext from "../../context/Global/globalContext";

const App = () => {
  const globalContext = React.useContext(GlobalContext);
  const styles = {
    textAlign: "center",
    backgroundImage:
      "linear-gradient(to bottom right, red, red 20%, blue 20%, blue 40%, white 40%, white 60%, green 60%, green 80%, yellow 80%, yellow 100%)",
    backgroundAttachment: "fixed" /*defines scrolling behaviour*/,
    width: "95%",
    margin: "auto",
    height: "100vh",
    padding: "5px 0px",
    /*grid starts here*/
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  if (globalContext.firstEntered) {
    //this is necessary because otherwise justify content and this property combined makes page wrong.
    delete styles.height;
  }

  return (
    <>
      {//if you do not use thi bracket here, the ternary operator (or any js code for that matter) gets
      //treated as html(or jsx in this case). These bracket here specify that there is code inside
      //these braces which evaluates into a react component or jsx
      !globalContext.loading ? (
        <div style={styles}>
          <Searchbar />
          {globalContext.data !== null ? (
            <BasicInfo
              id={globalContext.nationalId}
              data={globalContext.data}
            />
          ) : null}
          {globalContext.data !== null ? (
            <MoveCard moves={globalContext.data.moves} />
          ) : null}
        </div>
      ) : (
        <AppLoader />
      )}
    </>
  );
};

export default App;
