//VideoPlayer.jsx
import React, { useContext, useEffect, useState} from "react";
import { SocketContext } from "../SocketContext";

const customVideoCss = {
  width: "auto",
  border: "2px solid black",
  height: "auto",
  marginTop: "20px",
  paddingLeft: "20px",
  paddingRight: "20px",
  backgroundColor: "white",
  borderRadius: "10px",
};

const mainCustomCss = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  flexDirection: "column",
  flexWrap: "wrap"
};


const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

    useEffect(()=>{
      navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
   
        const videoDom = document.getElementById("me_video")
          videoDom.srcObject = currentStream;
      }).catch((err)=>console.log("error: ",err));
    },[])

  return (
    <div style={mainCustomCss}>
      <div className="video-flex-box" style={{ display: "flex" }}>
   
          <div style={customVideoCss}>
            <h3>{name || "Name"}</h3>

            
            <video
              width="320"
              height="240"
              playsInline
              muted
              id="me_video"
              autoPlay
            />
       
          </div>
  

        {callAccepted && !callEnded && (
          <div className="others-video" style={customVideoCss}>
            <h3>{call.name || "Name"}</h3>
            <video width="320"
              height="240" playsInline ref={userVideo} autoPlay />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;



