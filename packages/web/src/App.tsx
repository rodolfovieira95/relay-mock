import React from "react";
import { QueryRenderer } from "react-relay";
// import graphql from "babel-plugin-relay/macro";

import environment from "./environment";

const graphql = require("babel-plugin-relay/macro");

function App() {
  return (
    <div>
      Hello World!
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery {
            hello
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          console.log("error: ", error);
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>User ID: </div>;
          // return <div>User ID: {props.hello}</div>;
        }}
      />
    </div>
  );
}

export default App;
