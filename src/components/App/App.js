import React from "react";
import { Container, Row, Col } from "react-grid-system";
import Searchbar from "../Searchbar/Searchbar";
import BasicInfo from "../BasicInfo/BasicInfo";
import MoveCard from "../MoveCard/MoveCard";
import AppLoader from "../Loader/AppLoader";
import GlobalContext from "../../context/Global/globalContext";
import BackgroundImage from "../../Assets/background.png";

const App = () => {
  const globalContext = React.useContext(GlobalContext);
  const styles = {
    textAlign: "center",
    backgroundImage: `url(${BackgroundImage})`,
    backgroundAttachment: "fixed" /*defines scrolling behaviour*/,
    width: "95%",
    margin: "auto",
    height: "100vh",
    padding: "5px 0px"
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
            <Row>
              <Searchbar />
            </Row>
            {globalContext.data !== null ? (
              <Row>
                <BasicInfo
                  id={globalContext.nationalId}
                  data={globalContext.data}
                />
              </Row>
            ) : null}
            {globalContext.data !== null ? (
              <Row>
                <MoveCard moves={globalContext.data.moves} />
              </Row>
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
