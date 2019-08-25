import React from "react";
import { Container } from "react-grid-system";
import Searchbar from "../Searchbar/Searchbar";
import BasicInfo from "../BasicInfo/BasicInfo";
import MoveCard from "../MoveCard/MoveCard";
import AppLoader from "../Loader/AppLoader";
import GlobalContext from "../../context/Global/globalContext";
import BackgroundImage from "../../Assets/background.png";

const App = () => {
  const globalContext = React.useContext(GlobalContext);
  const styles = {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundAttachment: "fixed" /*defines scrolling behaviour*/,
    height: "100vh"
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
          <Container>
            <Searchbar />
            {globalContext.data !== null ? (
              <>
                <BasicInfo
                  id={globalContext.nationalId}
                  data={globalContext.data}
                />
                <MoveCard moves={globalContext.data.moves} />
              </>
            ) : null}
          </Container>
        </div>
      ) : (
        <AppLoader />
      )}
    </>
  );
};

export default App;
