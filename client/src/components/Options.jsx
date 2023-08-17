import React, { useContext, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { SocketContext } from "../SocketContext";

const mainDivCss = {
  display: "flex",
  flexDirection: "row",
  gap: "2rem",
  padding: "10px",
  backgroundColor: "white",
  margin: "20px",
  borderRadius: "10px",
};

const buttonCss = {
  padding: "10px",
  marginTop: "10px",
  border: "2px solid black",
  borderRadius: "10px",
  width: "350px",
  cursor: "pointer",
  backgroundColor: "red",
  color: "white",
};
const buttonCss2 = {
  padding: "10px",
  marginTop: "10px",
  border: "2px solid black",
  borderRadius: "10px",
  width: "350px",
  cursor: "pointer",
  backgroundColor: "green",
  color: "white",
};
const buttonCss1 = {
  padding: "10px",
  marginTop: "-0.8rem",
  border: "2px solid black",
  borderRadius: "10px",
  width: "350px",
  backgroundColor: "green",
  color: "white",
};
const inputCss = {
  paddingTop: "10px",
  paddingBottom: "10px",
  marginTop: "10px",
  border: "2px solid black",
  borderRadius: "10px",
  width: "350px",
  margin: 0,
};

const innerDivCss = {
  width: "400px",
  // borderRight: "2px solid black",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

const h5style = {
  marginBottom: "1rem",
};

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } =
    useContext(SocketContext);
  const [idToCall, setIdToCall] = useState("");

  return (
    <div style={{display:'flex', flexDirection:'column',}}>
      <form noValidate autoComplete="off">
        <div style={mainDivCss}>
          <div style={innerDivCss}>
            <h5 style={h5style}>Account Info</h5>
            <input
              type="text"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputCss}
              placeholder="Name"
            />
            <br />
            {console.log("====>",me)}
            <CopyToClipboard text={me}>
              <button type="button" style={buttonCss1}>Copy to Clipboard</button>
            </CopyToClipboard>
          </div>

          <div style={innerDivCss}>
            <h5 style={h5style}>Make a Call</h5>
            <input
              type="text"
              label="ID to call"
              value={idToCall}
              onChange={(e) => setIdToCall(e.target.value)}
              style={inputCss}
              placeholder="ID to Call"
            />

            {callAccepted && !callEnded ? (
              <button  type="button" style={buttonCss} onClick={leaveCall}>
                Hang Up
              </button>
            ) : (
              <button  type="button" style={buttonCss2} onClick={() => callUser(idToCall)}>
                Call
              </button>
            )}
          </div>
        </div>
      </form>
      {children}
    </div>
  );
};

export default Options;
