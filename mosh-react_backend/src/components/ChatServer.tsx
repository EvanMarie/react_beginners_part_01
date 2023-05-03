import React, { useEffect, useState } from "react";

const connect = () => console.log("connecting...");
const disconnect = () => console.log("disconnecting...");

function ChatServer() {
  useEffect(() => {
    connect();
    /* - This is a function for cleaning up.
       - These should always clean up close down what the effect was doing 
       - see mounting and unmounting in the notes for this section
       */
    return () => disconnect();
  });
  return <div>ChatServer</div>;
}

export default ChatServer;
