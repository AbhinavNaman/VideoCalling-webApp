import React from "react";
import "./App.css";

import VideoPlayer from "./components/VideoPlayer";
import Options from "./components/Options";
import Notifications from "./components/Notifications";

const appbarCustomCss = {
  height: "70px",
  display: "flex",
  width: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "white",
  color: "black",
  border: "2px solid black",
  borderRadius: "10px",
  margin: "auto",
  marginTop: "20px",
};

const appCustomCss = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
};

//image: marginLeft: '15px'

const App = () => {
  return (
    <div style={appCustomCss}>
      <div style={appbarCustomCss}>
        <h1>Video Call</h1>
      </div>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
};

export default App;
